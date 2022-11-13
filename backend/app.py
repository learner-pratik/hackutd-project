from flask import Flask, jsonify, request
from flask_api import status
from flask_pymongo import PyMongo
from requests.auth import HTTPBasicAuth
import requests
import yaml
import json
from ast import literal_eval

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/hack_utd"
mongo = PyMongo(app)
db = mongo.db


# load the config values from yaml file
with open("config.yaml", "r") as stream:
    data_loaded = yaml.safe_load(stream)
config = data_loaded['APP']

URL = 'https://api.utdnebula.com/'
headers={'x-api-key':config['API_KEY']}

@app.route('/', methods=['GET'])
def health():
	return {'message' : 'UP'}

@app.route('/get_degree', methods=['GET'])
def get_degree():
	degree = db.degree.find({})
	deg_list = list(degree)
	for x in deg_list:
		del x['_id']
	return jsonify(deg_list)

@app.route('/submit_details', methods=['POST'])
def submit_details():
	name = request.form['name']
	dob = request.form['dob']
	email = request.form['email']
	password = request.form['password'] # need to encrypted later
	degree = request.form['degree']
	db.users.insert_one({'title':name, 'dob':dob, 'email':email, 'password':password, 'degree':degree})
	return jsonify(message="success")

@app.route('/login', methods=['POST'])
def login():
	name = request.form['name']
	password = request.form['password']
	details = list(db.users.find({"name":name}))
	if len(details) == 0:
		return {'message':'User not found'}
	pwd = details[0]['password']
	if pwd != password:
		return "Password wrong", status.HTTP_400_BAD_REQUEST
	return jsonify(details[0])

@app.route('/pre_req/<degree>/<track>', methods=['GET'])
def pre_req(degree, track):
	school = get_school(degree)
	class_level = 'Graduate' #this has to be changed in future based on the student
	params = {'school':school, 'class_level':class_level}
	tc = db.courses.find({"track":track})
	tcl = list(tc)
	url = URL+'course'
	pre_req_reference_id = []
	if len(tcl) != 0:
		tcl = tcl[0]
		courses = tcl['courses']
		course_number = []
		for x in courses:
			course_number.append(int(x['number']))
		for x in course_number:
			params['course_number'] = x
			res = requests.get(url=url, params=params, headers=headers)
			res_list = res.json()['data'][0]['prerequisites']
			if len(res_list) != 0:
				l = res_list['options'][0]
				if len(l)!=0:
					if 'options' in l:
						l = l['options']
						for t in l:
							if 'class_reference' in t and t['class_reference'] != None:
								pre_req_reference_id.append(t['class_reference'])
					elif 'class_reference' in l:
						l = l['class_reference']
						pre_req_reference_id.append(l)
		pre_req_data = get_course_number(pre_req_reference_id)
		visited = []
		response = []
		for pre in pre_req_data:
			if pre['course_number'] in visited:
				continue
			visited.append(pre['course_number'])
			response.append(pre)
		return response
	else:
		return {'message':"no data"}

@app.route('/pre_req_update', methods=['GET', 'POST'])
def pre_req_update():
	d = json.loads(request.data.decode('utf-8'))
	degree = d['degree']
	track = d['track']
	pre_req = d['pre_req']
	school = get_school(degree)
	class_level = 'Graduate' #this has to be changed in future based on the student
	params = {'school':school, 'class_level':class_level}
	tc = db.courses.find({"track":track})
	tcl = list(tc)
	url = URL+'course'
	pre_req_reference_id = []
	pre_req_json_data = []
	if len(tcl) != 0:
		tcl = tcl[0]
		courses = tcl['courses']
		course_number = []
		for x in courses:
			course_number.append(int(x['number']))
		for x in course_number:
			temp_req = []
			params['course_number'] = x
			res = requests.get(url=url, params=params, headers=headers)
			res_list = res.json()['data'][0]['prerequisites']
			if len(res_list) != 0:
				l = res_list['options'][0]
				if len(l)!=0:
					if 'options' in l:
						l = l['options']
						for t in l:
							if 'class_reference' in t and t['class_reference'] != None:
								pre_req_reference_id.append(t['class_reference'])
					elif 'class_reference' in l:
						l = l['class_reference']
						pre_req_reference_id.append(l)
			for c in pre_req_reference_id:
				if c in pre_req:
					continue
				temp_req.append(c)
			pre_req_json_data.append({'course':x, 'title': res.json()['data'][0]['title'], 'pre_req':temp_req})
		print(pre_req_json_data)
		r = []
		for d in pre_req_json_data:
			cn = d['course']
			title = d['title']
			pt = d['pre_req']
			t = []
			for x in pt:
				t.append(get_course_number(x))
			r.append({'course':cn, 'title': title, 'pre_req':t})
		return r
	else:
		return {'message':"no data"}

def get_courses(degree, track):
	data = list(db.courses.find({"degree":degree, "track":track}))
	course_data = []
	if len(data) != 0:
		course_data = data[0]["courses"]
	return course_data

def get_course_number(ref_id):
	url = URL + 'course/'
	pre_req = []
	for p in ref_id:
		res = requests.get(url+p, headers=headers)
		data = res.json()['data']
		pre_req.append({'title':data['title'],'course_reference':data['_id'],'course_number':data['course_number']})
	return pre_req

def get_subject_prefix(deg):
	if deg == 'cs':
		return 'CS'
	else :
		return 'OO'

def get_school(deg) :
	if deg == 'cs':
		return "Erik Jonsson School of Engineering and Computer Science"
	else:
		return "Oops"


if __name__ == 'main':
	app.run(threaded=True, debug=True)
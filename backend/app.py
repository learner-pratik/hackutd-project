from flask import Flask, jsonify, request
from flask_api import status
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/hack_utd"
mongo = PyMongo(app)
db = mongo.db

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

@app.route('/track_course/<track>', methods=['GET'])
def get_pre_req(track):
	data = list(db.courses.find({"track":track}))
	course_data = []
	if len(data) != 0:
		course_data = data[0]["courses"]
	return jsonify(course_data)



if __name__ == 'main':
	app.run(threaded=True, debug=True)
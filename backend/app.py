from flask import Flask, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/hack_utd"
mongo = PyMongo(app)

@app.route('/health', methods=['GET'])
def health():
	return {'message' : 'UP'}

@app.route('/get_degree', methods=['GET'])
def get_degree():
	degree = mongo.db.degree.find({})
	deg_list = list(degree)
	for x in deg_list:
		del x['_id']
	return jsonify(deg_list)

if __name__ == 'main':
	app.run(threaded=True, port=5000)

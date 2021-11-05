from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return "서버 플라스크 연동"

@app.route("/user", methods=["GET"])
def test_get():

    return jsonify({"status":200, "user": "elice"})

if __name__ == '__main__':
	app.run(debug=True)
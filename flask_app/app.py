from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "서버 플라스크 연동"
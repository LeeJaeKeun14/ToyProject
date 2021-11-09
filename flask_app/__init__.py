from flask import Flask
from flask_cors import CORS

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)
    
    from . import user
    app.register_blueprint(user.bp)

    @app.route('/')
    def index():
        return '노래방 북마크 프로젝트입니다.'

    return app

from flask import Blueprint, request, jsonify
from flask_restful import Api, Resource

bp = Blueprint("user", __name__, url_prefix="/get")
api = Api(bp)

class Search(Resource):
    def get(self):
        data = [{"user": "elice"}]
        
        return jsonify(data)
    
api.add_resource(Search, '/users')


class PostUser(Resource):
    def post(self):
        args = request.get_json()
        data = args.get('user', None)
        
        return jsonify(data)
    
api.add_resource(PostUser, '/post')
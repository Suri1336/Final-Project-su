

"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import hashlib
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Pages
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import hashlib
from datetime import datetime, timedelta
import requests
import os



# Allow CORS requests to this API
api = Blueprint('api', __name__)

CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
@jwt_required()
def handle_hello():

    msg = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    current_user=get_jwt_identity()
    return jsonify(loged_in_as = current_user), 200

@api.route('/token',methods=['POST'])
def create_token():
    UserName=request.json.get('UserName',None)
    password=request.json.get('password',None)
    access_token=create_access_token(identity=UserName)
    return jsonify(access_token=access_token)

@api.route('/signup',methods=['POST'])
def create_user():
    body=request.get_json()
    UserName=body['UserName']
    email=body['email']
    DateOfBirth=body['DateOfBirth']
    password = hashlib.sha256(body['password'].encode("utf-8")).hexdigest()
    new_user=User (email=email,password=password,DateOfBirth=DateOfBirth,UserName=UserName, is_active=True)
    db.session.add(new_user)
    db.session.commit()
    access_token=create_access_token(identity=email)
    return jsonify(access_token,'user successfully created')

# @api.route('/user',methods=['GET'])
# def get_all_users():
#     users=User.query.all()
#     all_users=list(map())

@api.route('/user',methods=['GET'])
def get_all_users():
    users=User.query.all()
    all_users=list(map(lambda user: user.serialize(), users))
    return jsonify(all_users)

@api.route('/private',methods=['GET'])
@jwt_required()
def get_private():
    return jsonify ({'msg':'this is a private end point you need to be logged in to see it'}),200

@api.route('/pages',methods=['GET'])
def get_all_pages():
    pages=Pages.query.all()
    all_pages=list(map(lambda page: page.serialize(), pages))
    return jsonify(all_pages)

@api.route('/pages/<int:id>',methods=['GET'])
def get_each_pages(id):
    page=Pages.query.filter_by(id = id).first()
    if page:
        return jsonify(page.serialize())
    else:
        return jsonify({"message": "Page not found"}), 404

@api.route('/forgot-password', methods=['POST'])
def forget_PassWord():
    body=request.get_json()
    email=body.get('email')
    user=User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"msg":"user not found1"}),400
    

    if user is not None:
        exporation=timedelta(days=1)
        access_token=create_access_token(identity=user.id,expires_delta=exporation)
        email=user.email
        message="lets change your password "+os.getenv("FrontendUrl")+"/updatePassword?token="+str(access_token)
        
        response=requests.post( 
            # mailgun apionline 105
            "https://api.mailgun.net/v3/sandbox5cbc02e2ede14a439f04fe021fbaed88.mailgun.org/messages",
            auth=("api",os.getenv("mailgunApiKey")),
            data={"from":"Mailgun Sandbox <postmaster@sandbox5cbc02e2ede14a439f04fe021fbaed88.mailgun.org>", "to":email,"subject":"password recovery","text":message}
        )

        return jsonify("recovery successful")

@api.route("/updatePassword", methods=["POST"])
@jwt_required()
def updatePassword():
    body=request.get_json()
    password=body.get("password")
    id=get_jwt_identity()
    user=User.query.filter_by(id=id).first()
    if user is not None: 
        user.password=password
        db.session.commit()
        return jsonify("Password successfully Changed")
from mongoengine import *
# from django.db import models

class User(Document):
    username = StringField(max_length=20)
    email = EmailField(required=True, unique=True)
    password = StringField(max_length=500)
    









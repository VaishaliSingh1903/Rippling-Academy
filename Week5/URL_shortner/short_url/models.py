from pkg_resources import require
from accounts.models import User
from mongoengine import *


class Query_Shortner(Document):
    original_url = URLField(blank = False)
    short_url = StringField(blank = False, max_length = 28)
    visit = IntField(default = 0)
    time = DateTimeField()
    user = ReferenceField(User, reverse_delete_rule = CASCADE, required = True, dbref=True)
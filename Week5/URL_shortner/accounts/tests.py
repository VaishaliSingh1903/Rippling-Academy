from django.test import TestCase, Client
from .models import User
# Create your tests here.

class UserTestCase(TestCase):
    def setUp(self) -> None:
        User.objects.create(name = 'Eve',
        email = 'eve@gmail.com',
        password = '123',
        password2='567',
        )
        User.objects.create(name = 'Eve',
        email = 'eve@gmail.com',
        password = '123',
        password2= '123' ,
        )
        User.objects.create(name = 'Eve',
        email = '',
        password = '123',
        password2= '123' ,
        )

    def signup_test(self):
        client =  Client()
        logged_in = client.login(email='testuser', password='12345')

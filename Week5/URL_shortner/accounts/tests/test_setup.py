from django.test import TestCase, Client
from rest_framework.test import APITestCase, APIClient
from django.urls import reverse

class TestSetUp(APITestCase):

    def _fixture_setup(self):
        pass
    def _fixture_teardown(self):
        pass

    def setUp(self) -> None:
        self.sigup_url = reverse('signup')
        self.login_url = reverse('login')
        self.delete_user_url = reverse('delete_user')

        self.signup_user_data = [{ 'username':"teddy",
            'email':"teddy@gmail.com",
            'password':"123",
            'password2':"123",
        },
        {
            'username':"teddy",
            'email':"tedd13@gmail.com",
            'password':"1",
            'password2':"123",
        },
        {
            'username':"",
            'email':"tedd13@gmail.com",
            'password':"123",
            'password2':"123",
        }]

        self.login_user_data = [{ 'email':"teddy@gmail.com",
            'password':"123",
        },
        {
            'email':"tedd13@gmail.com",
            'password':"1",
        },
        {
            'email':"",
            'password':"123",
        }]

        self.user_data_deletion = [{ 'id':'62d10caf1a07aaf37653c5be',
        },
        {
            'id':'62d03de9992a84d3c60b47c1',
        },
        {
            'id':'',
        }]

        return super().setUp()

    def tearDown(self) -> None:
       return super().tearDown()


     


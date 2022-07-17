from .test_setup import TestSetUp


class TestViews(TestSetUp):

    def  test_can_signup(self):
        res = self.client.post(self.sigup_url,self.signup_user_data[0]) 
        self.assertEqual(res.status_code,200) 
        self.assertEqual(res.content.decode(),"User already exist")

        res = self.client.post(self.sigup_url,self.signup_user_data[1])  
        self.assertEqual(res.status_code,200)
        self.assertEqual(res.content.decode(),"Password not same")

        res = self.client.post(self.sigup_url,self.signup_user_data[2])
        self.assertEqual(res.status_code,200)  
        self.assertEqual(res.content.decode(),"empty creditals")



    def test_can_login(self):
        res = self.client.post(self.login_url,self.login_user_data[0]) 
        self.assertEqual(res.status_code,200) 
        self.assertEqual(res.content.decode(),'62d1418c9ee12dcea51a28c8')

        res = self.client.post(self.login_url,self.login_user_data[1])  
        self.assertEqual(res.status_code,200)
        self.assertEqual(res.content.decode(),"User doen't exist / Invalid password")

        res = self.client.post(self.login_url,self.login_user_data[2])
        self.assertEqual(res.status_code,200)  
        self.assertEqual(res.content.decode(),"empty creditals")


    def test_can_delete_user(self):
        res = self.client.post(self.delete_user_url,self.user_data_deletion[0]) 
        self.assertEqual(res.status_code,200) 
        self.assertEqual(res.content.decode(),"User successfully deleted")

        res = self.client.post(self.delete_user_url,self.user_data_deletion[1])  
        self.assertEqual(res.status_code,200)
        self.assertEqual(res.content.decode(),"User doesn't exist")

        res = self.client.post(self.delete_user_url,self.user_data_deletion[2])
        self.assertEqual(res.status_code,200)  
        self.assertEqual(res.content.decode(),"Empty credital")

    
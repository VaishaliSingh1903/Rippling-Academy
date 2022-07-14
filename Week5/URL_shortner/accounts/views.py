from django.shortcuts import redirect, render
from .models import User
from mongoengine import Q
from django.contrib import messages,auth

# Create your views here.
def home(request):
    return render(request, 'home.html')

def login(request):
    if request.method == 'POST': 
        password = request.POST['password']
        email = request.POST['email']
        if email and password:
            user1 = User.objects(email = email) 
            if len(user1):
                # auth.login(request,user1 )
                return redirect(home)
            else:
                return render(request, 'login.html',{'error' : 'User does not exists'})
        else:
            return render(request, 'login .html',{'error' : 'Empty credientals'})
    else:
        return render(request, 'login.html')

def signup(request): 
    
    if request.method == 'POST':
        
        password = request.POST['password']
        email2 = request.POST['email']
        username = request.POST['username']
        password2 =request.POST['password2']
        
        if password2 == password:
            if username and email2 and password:
                user1 = User.objects(email = email2) 
                
                if len(user1):
                    return render(request, 'signup.html',{'error' : 'User already exists'})
                else:
                    user = User()
                    user.username = username
                    user.email = email2
                    user.password = password
                    
                    user.save()
                    messages.success(request,"Registed! \n Login here")
                    return  redirect(login)
            else:
                return render(request, 'signup.html',{'error' : 'Empty credientals'}) 
        else:
           return render(request, 'signup.html',{'error' : 'Passwords are not same'}) 
    else:
        return render(request, 'signup.html')



def logout(request):
    return  redirect(login)
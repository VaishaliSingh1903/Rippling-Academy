from django.shortcuts import redirect, render
from rest_framework.response import Response
from .serializer import UserSerializer
from .models import User
from django.contrib.auth.hashers import make_password, check_password
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse



# Create your views here.

@csrf_exempt
def login(request):
    if request.method == 'POST': 
        password = request.POST['password']
        email = request.POST['email']
        if email and password:
            user1 = User.objects(email = email)
            if len(user1) and check_password(password,make_password(password)):
                return HttpResponse(user1[0].id)
            else:
                return HttpResponse("User doen't exist / Invalid password")
        else:
            return HttpResponse("empty creditals")
    else:
        return HttpResponse("Try again")


@csrf_exempt
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
                    return HttpResponse("User already exist")
                else:
                    user = User()
                    user.username = username
                    user.email = email2
                    user.password = (make_password(password))
                    # user.save()
                    serializer = UserSerializer(user.save(), many=False)
                    return JsonResponse(serializer.data)
                    
            else:
                return HttpResponse("empty creditals")
        else:
           return HttpResponse("Password not same")
    else:
        return HttpResponse("Try again")


@csrf_exempt
def logout(request):
    return  HttpResponse("<h1>Logout</h1>")
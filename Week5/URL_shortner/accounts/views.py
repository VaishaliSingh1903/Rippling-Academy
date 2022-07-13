from django.shortcuts import render
from django.contrib.auth.models import User

# Create your views here.
def home(request):
    #  return HttpResponse("<h1>Ramesh</h1>")
    return render(request, 'home.html')

def signup(request):
    return render(request, 'signup.html')

def login(request):
    return render(request, 'login.html')

# def logout(request):
#     return render(request, 'signup.html')
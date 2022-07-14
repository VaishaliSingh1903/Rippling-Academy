import random, string
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse  
from .models import Query_Shortner
from accounts.models import User
from datetime import datetime

@csrf_exempt
def home(request, query = None):
    if not query or query is None:
        return HttpResponse("Try again")
    else:
        check = Query_Shortner.objects(short_url = query)
        if len(check):
            check.visit = check.visit + 1
            check.time = datetime.now()
            check.save()
            return HttpResponse(check)
        else:
            return HttpResponse("Invalid URL ")

@csrf_exempt
def dashboard(request):
    if request.method == 'POST': 
        email_pk = request.POST['email']
        email_user = User.objects(email = email_pk)
        urls = Query_Shortner.objects(user = email_user)
        return HttpResponse(urls)
    else:
        return HttpResponse("Try again")

@csrf_exempt
def randomgen():
    return ''.join(random.choice(string.ascii_lowercase) for _ in range(6))


@csrf_exempt
def generate(request):
    if request.method == 'POST': 
        original = request.POST['original_url']
        short = request.POST['short_url']
        email_pk = request.POST['email']
        if original and short and email_pk: 
            check = Query_Shortner.objects(short_url = short)
            email_user = User.objects(email = email_pk)
            if not len(check):
                query = Query_Shortner()
                query.original_url = original
                query.short_url = "http://localhost:8000/"+str(short)
                query.user = email_user
                query.save()
                return HttpResponse("Submitted")
            else:
                return HttpResponse("Already exists")  
        elif original and email_pk:
            flag = False
            while not flag:
                short = randomgen()
                check = Query_Shortner.objects(short_url = short)
                email_user = User.objects(email = email_pk)
                if not len(check):
                    query = Query_Shortner()
                    query.original_url = original
                    query.short_url = "http://localhost:8000/"+str(short)
                    query.user = email_user
                    query.save() 
                    return HttpResponse("Submitted")
                else:
                    continue  
        else:
            return HttpResponse("Empty fields")
    else:
        return HttpResponse("Try again")
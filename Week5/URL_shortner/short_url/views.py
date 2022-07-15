import random, string
from .serializer import QuerySerializer
from django.shortcuts import render,redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse  
from .models import Query_Shortner
from accounts.models import User
from datetime import datetime

@csrf_exempt
def home(request):
    if request.method == 'POST':
        query = request.POST['query']
        if not query or query is None:
            return HttpResponse("No query")
        else:
            check = Query_Shortner.objects(short_url = query)[0]
            if len(check):
                check.visit = check.visit + 1
                check.time = datetime.now()
                check.save()
                return redirect(check.original_url)
            else:
                return HttpResponse("Invalid URL ")
    else:
        return HttpResponse("Try again ")


@csrf_exempt
def dashboard(request):
    if request.method == 'POST': 
        email_pk = request.POST['email']
        email_user = User.objects(email = email_pk)
        urls = Query_Shortner.objects(user = email_user[0])
        serializer = QuerySerializer(urls, many=True)
        return JsonResponse(serializer.data, safe = False)
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
                query = Query_Shortner(
                    original_url = original,
                    short_url = short,
                    user = email_user[0],
                )
                serializer = QuerySerializer(query.save(), many = False)
                return JsonResponse(serializer.data, safe = False)
            else:
                return HttpResponse("Already exists")  
        elif original and email_pk:
            flag = False
            while not flag:
                short = randomgen()
                check = Query_Shortner.objects(short_url = short)
                email_user = User.objects(email = email_pk)
                if not len(check):
                    query = Query_Shortner(
                        original_url = original,
                        short_url = short,
                        user = email_user[0],
                        )
                    serializer = QuerySerializer(query.save(), many = False)
                    return JsonResponse(serializer.data, safe = False)
                else:
                    continue  
        else:
            return HttpResponse("Empty fields")
    else:
        return HttpResponse("Try again")
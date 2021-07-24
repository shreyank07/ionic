from django.shortcuts import render
import json
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
import utils
from rest_framework.decorators import api_view
import hashlib
import jwt
import datetime
# Create your views here.

db = settings.DB
collection2 = settings.USER_DETAILS
men = settings.MEN_PRODUCTS
women = settings.WOMEN_PRODUCTS
watch = settings.WATCHES_PRODUCTS


@csrf_exempt
def cart(request):
    if request.method == 'GET':
        name = request.GET.get('name')
        data = collection2.find_one({"name": name})
        return JsonResponse({"status": True, 'data': data["cart"]})

    if request.method == 'POST':
        data = json.loads(request.body)
        name = request.GET.get('name')
        print(data)
        try:
            print(collection2.find_one({'name': name})["cart"])
        except:
            collection2.update_one({"name": name}, {"$push": {"cart": []}})
        if cartCheck(data, name):
            data = collection2.update_one(
                {'name': name}, {"$push": {"cart": data}})
            return JsonResponse({"status": True})
        return HttpResponse("Already Exists", status=401)


@csrf_exempt
def details(request):
    print("runinnnnnnnnnnnadsgdag")
    token = json.loads(request.headers)['token']
    print("token is ",token)
    data = jwt.decode(token, settings.SECRET_KEY, algorithms='HS256')
    print("data is",data)
    col =  collection2.find_one({'email' : data['email']})
    return JsonResponse({'name' : col['name'],'email' : col['email']})

def cartCheck(data, name):
    for item in collection2.find_one({'name': name})["cart"]:
        if data['group'] == item['group'] and data['category'] == item['category'] and data['id'] == item['id']:
            return False
    return True


@csrf_exempt
def detailedCart(request):
    name = request.GET.get("name")
    catAindex = collection2.find_one({'name': name})["cart"]
    data = []
    for item in catAindex:
        if item['group'] == 'women':
            col = women.find_one({"category": item["category"]})[
                "entries"][item["id"]]
        elif item['group'] == 'men':
            col = men.find_one({"category": item["category"]})[
                "entries"][item["id"]]
        else:
            col = watch.find_one({"category": item["category"]})[
                "entries"][item["id"]]
        data.append(col)
    return JsonResponse({"status": True, 'data': data})


@csrf_exempt
def updateQty(request):
    name = request.GET.get("name")
    index = request.GET.get("index")
    quantity = json.loads(request.body)["quantity"]
    data = collection2.update_one(
        {"name": name}, {"$set": {f"cart.{str(index)}.qty": quantity}})
    return JsonResponse({"status": True})


@csrf_exempt
def removeItem(request):
    name = request.GET.get("name")
    index = request.GET.get("index")
    data = collection2.update_one(
        {"name": name}, {"$unset": {f"cart.{str(index)}": 1}})
    data = collection2.update_one({"name": name}, {"$pull": {"cart": None}})
    return JsonResponse({"status": True})

@csrf_exempt
@api_view(['POST'])
def login(request):
    req_user = json.loads(request.body)
    userid = collection2.find_one({'email': req_user['email']})
    print(req_user['password'])
    if not userid:
        return HttpResponse('Please enter a valid email', status=401)
    if hashlib.sha384(req_user['password'].encode()).hexdigest() != userid['password']:
        return HttpResponse('Invalid password', status=401)

    token = jwt.encode(
        {'email': req_user['email'],
         'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=24 * 60 * 60)
         },
        settings.SECRET_KEY,
        algorithm="HS256")

    return JsonResponse({'status': True, 'token': token})


@csrf_exempt
@api_view(['POST'])
def register(request):
    data = json.loads(request.body)
    data['password'] = hashlib.sha384(data['password'].encode()).hexdigest()
    try:
        if collection2.find_one({"email": data["email"]}) or collection2.find_one({"number": data["number"]}):
            return HttpResponse("Email or Number already exists", status=401)
        else:
            collection2.insert_one(data)
            return HttpResponse("Signup Successful!", status=200)
    except:
        collection2.insert_one(data)
        return HttpResponse("Signup Successful!", status=200)




@utils.requireLogin
def verify(request):
    return JsonResponse({"status": True})


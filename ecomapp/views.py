from django.http import JsonResponse, HttpResponse
import json
from rest_framework.decorators import api_view
from django.conf import settings
import jwt
import datetime

from pymongo import MongoClient
from django.views.decorators.csrf import csrf_exempt

from ecomapp import utils

client = MongoClient('mongodb://localhost:27017')
db = client['Product_Info']
collection = db['Details']
popular = db['popularWears']
userobj = db['user']
cartitem = db['cart']


def idconverter():
    product = [i for i in collection.find()]
    for u in product:
        u['_id'] = str(u['_id'])
    return product


def idconverter2():
    wear = [i for i in popular.find()]
    for u in wear:
        u['_id'] = str(u['_id'])
    return wear


def idconverter3():
    userdetail = [i for i in userobj.find()]
    for u in userdetail:
        u['_id'] = str(u['_id'])
    return userdetail


def idconverter4():
    cart = [i for i in cartitem.find()]
    for u in cart:
        u['_id'] = str(u['_id'])
    return cart

def register(request):
    with open('src/db.json', 'r') as f:
        users = json.load(f)
    userdata = json.loads(request.body)
    for user in users:
        if user['email'] == userdata['email']:
            return JsonResponse({'status': False, 'message': 'Email already Exist'})
    for user in users:
        if user['email'] == " ":
            return JsonResponse({'status': False, 'message': 'fill in the required detail'})

    users.append(userdata)

    with open('src/db.json', 'w') as f:
        json.dump(users, f)

    # here we know about the json data which we wrote in body of postman and get displayed on terminal
    return JsonResponse({'status': True, 'message': 'SignUp Successfull'})


def fetchusers(request):
    with open('src/db.json', 'r') as f:
        users = json.load(f)

    return JsonResponse({'status': True, 'users': users})


def insertusers(request):
    userdetail = idconverter3()
    if request.method == 'POST':
        data = json.loads(request.body)
        # userdetail = userobj.insert_one(data)
        for u in userdetail:
            if u['email'] == data["email"]:
                return JsonResponse({'status': False, 'message': 'Email already Exist'})
            else:
                userdetail = userobj.insert_one(data)
                return JsonResponse({'status': True, 'message': 'Login Successfull'})


def users(request):
    userdetail = idconverter3()
    return JsonResponse({'status': True, 'userdetail': userdetail})


@api_view(['POST'])
def login(request):
    req_user = json.loads(request.body)
    userid = userobj.find_one({'email': req_user['email']})
    if userid['password'] != req_user['password']:
        return HttpResponse('Unauthorized', status=401)

    token = jwt.encode(
        {'email': req_user['email'],
         'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=24 * 60 * 60)
         },
        settings.SECRET_KEY,
        algorithm="HS256").decode('utf-8')

    return JsonResponse({'status': True, 'token': token})


@utils.requireLogin
@api_view(['GET'])
def getdata(request, **kwargs):
    data = 'some data'
    return JsonResponse({'status': True, 'data': data})


def insert(request):
    product = idconverter()
    if request.method == 'POST':
        data = json.loads(request.body)
        product = collection.insert_one(data)
        return JsonResponse({'status': True})


def mens(request):
    product = idconverter()
    return JsonResponse({'status': True, 'product': product})


def mensproduct(request):
    product = idconverter()
    data = json.loads(request.body)
    for pro in product:
        if (pro['_id'] == data['_id']):
            return JsonResponse({'status': True, 'picture': pro['picture'], 'price': pro['price'],
                                 'warranty': pro['warranty'], 'dimension': pro['dimension'], 'color': pro['color'],
                                 'weight': pro['weight'], 'productname': pro['productname']})


def w(request):
    wears = idconverter2()
    if request.method == 'POST':
        data2 = json.loads(request.body)
        product = popular.insert_one(data2)
        return JsonResponse({'status': True})


def home(request):
    wears = idconverter2()
    return JsonResponse({'status': True, 'wears': wears})


def homeproduct(request):
    wears = idconverter2()
    data = json.loads(request.body)
    for pro in wears:
        if (pro['_id'] == data['_id']):
            return JsonResponse({'status': True, 'picture': pro['picture'], 'price': pro['price'],
                                 'warranty': pro['warranty'], 'dimension': pro['dimension'], 'color': pro['color'],
                                 'weight': pro['weight'], 'product': pro['product']})


def insertitem(request):
    cart = idconverter4()
    if request.method == 'POST':
        data3 = json.loads(request.body)
        cart = cartitem.insert_one(data3)
        return JsonResponse({'status': True,'message':'Item Succesfully Added'})


def citem(request):
    cart = idconverter4()
    return JsonResponse({'status': True, 'cart': cart})

from django.http import JsonResponse
import json

from pymongo import MongoClient
from django.views.decorators.csrf import csrf_exempt

client = MongoClient('mongodb://localhost:27017')
db = client['Product_Info']
collection = db['Details']
popular = db['popularWears']


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


def login(request):
    with open('src/db.json', 'r') as f:
        users = json.load(f)
    userdata = json.loads(request.body)
    for user in users:
        if user['email'] == userdata['email']:
            return JsonResponse({'status': True, 'message': 'Login Successfull'})
        else:
            return JsonResponse({'status': False, 'message': 'Account not exist'})
    for user in users:
        if user['email'] == " ":
            return JsonResponse({'status': False, 'message': 'fill in the required detail'})
        if user['password'] == " ":
            return JsonResponse({'status': False, 'message': 'fill in the required detail'})


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
                                 'weight': pro['weight'],'product': pro['product']})

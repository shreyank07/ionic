from django.shortcuts import render
import json
from django.http import HttpResponse , JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
# Create your views here.

db = settings.DB
collection = settings.WOMEN_PRODUCTS
collection2 = settings.USER_DETAILS

@csrf_exempt
def data(request):
    if request.method == "GET":
        cate = request.GET.get('category')
        data = collection.find_one({'category' : cate})
        return JsonResponse({"status" : True, "data" : data["entries"]})
    elif request.method == "POST":
        data = json.loads(request.body)
        collection.insert_one(data)
        return JsonResponse({"Status" : True})

@csrf_exempt
def product(request):
    if request.method == 'GET':
        cate = request.GET.get('category')
        pass

@csrf_exempt
def data2(request):
    if request.method == "GET":
        name = request.GET.get('name')
        data = collection2.find_one({'name' : name})
        data["_id"] = str(data["_id"])
        return JsonResponse({"status" : True, "data" : data})
    elif request.method == "POST":
        data = json.loads(request.body)
        collection2.insert_one(data)
        return JsonResponse({"Status" : True})

@csrf_exempt
def cart(request):
    if request.method=='GET':
        name = request.GET.get('name')
        data = collection2.find_one({"name":name})
        return JsonResponse({"status" : True , 'data' : data["cart"]})

    if request.method == 'POST':
        data = json.loads(request.body)
        name = request.GET.get('name')
        print(data)
        if cartCheck(data, name):
            data = collection2.update_one({'name' : name},{"$push" : {"cart" : data }})
            return JsonResponse({"status" : True})
        return HttpResponse("Already Exists" , status = 401)

def cartCheck(data,name):
    for item in collection2.find_one({'name' : name})["cart"]:
        print(item)
        if data == item:
            return False
    return True

@csrf_exempt
def detailedCart(request):
    name = request.GET.get("name")
    catAindex = collection2.find_one({'name' : name})["cart"]
    data = []
    for item in catAindex:
        col = collection.find_one({"category" : item["category"]})["entries"][item["id"]]
        data.append(col)
    return JsonResponse({"status" : True , 'data' : data})


@csrf_exempt
def updateQty(request):
    name = request.GET.get("name")
    index = request.GET.get("index")
    quantity = json.loads(request.body)["quantity"]
    data = collection2.update_one({"name" : name},{"$set" : {f"cart.{str(index)}.qty" : quantity }})
    return JsonResponse({"status" : True})

@csrf_exempt
def removeItem(request):
    name = request.GET.get("name")
    index = request.GET.get("index")
    data = collection2.update_one({"name" : name},{"$unset" : {f"cart.{str(index)}" : 1}})
    data = collection2.update_one({"name" : name},{"$pull" : {"cart" : None}})
    return JsonResponse({"status" : True})
from django.shortcuts import render
import json
from django.http import HttpResponse , JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
# Create your views here.

db = settings.DB
collection = settings.WOMEN_PRODUCTS

@csrf_exempt
def data(request):
    if request.method == "GET":
        data = []
        for item in collection.find():
            item["_id"] = str(item["_id"])
            data.append(item)
        return JsonResponse({"status" : True, "data" : data})
    elif request.method == "POST":
        data = json.loads(request.body)
        collection.insert_one(data)
        return JsonResponse({"Status" : True})

@csrf_exempt
def product(request):
    if request.method == 'GET':
        cate = request.GET.get('category')
        pass


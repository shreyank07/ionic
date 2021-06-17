from django.http import HttpResponse, JsonResponse
import json


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

# return JsonResponse({'message': 'this is linked in'})
# you can open this in the firefox to view the json file


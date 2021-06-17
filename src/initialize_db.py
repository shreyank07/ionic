import json

userdata = [
    {
        "name": "shreyank",
        "email": "shreyank@autonise.com",
        "password": "autonise1"
    },
    {
        "name": "vanshil",
        "email": "vanshil@autonise.com",
        "password": "autonise2"
    }

]

with open('db.json', 'w') as f:
    json.dump(userdata, f, indent=10)

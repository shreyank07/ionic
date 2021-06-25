import json
from E_Com import settings

collection = settings.WOMEN_PRODUCTS

def readDB ( filename="db.json" ) :
    with open ( filename , mode='r' ) as jsonFile :
        data = json.load ( jsonFile )
    return data

print(collection.find_one({'category' : 'SAREES'}))
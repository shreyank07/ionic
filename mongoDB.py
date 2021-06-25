from pymongo import MongoClient
import json
client = MongoClient('mongodb://localhost:27017/')
print(client)


db = client["myDatabase"]
print(db)
print("--------------------------")
collection = db["myCollection"]
print("-------------------------------")

print(collection,type(collection))
print("----------------------------")


import datetime

status = collection.insert_one({
    'string' : 'String Value',
    "integer" : 1 ,
    "boolean" : True ,
    "double" : 1.45 ,
    'array' : [1,2,3],
    'object' : {'string' : 'String Value' , 'hello' : 'tata'},
    'date' : datetime.datetime.now(),
    'null' : None
})
print(status.inserted_id , "this is the inserted id")
print("-----------------------------")
print(status)

## Reading a Document

from bson import  ObjectId

insertedID = str(status.inserted_id)
insertedDoc =  collection.find_one()
print("Below is the colllection  *********************")
print(collection)
print(insertedDoc,type(insertedDoc))

from pymongo import MongoClient


def insert(collection, data):
    return collection.insert_one(data).inserted_id


client = MongoClient('mongodb://localhost:27017/')
db = client['Product_details']
collections = db['details']

product = {
    'product': 'T-shirts',
    'price': 200,
    'color': 'blue',
    'weight': 20,
    'dimension': '10x20',
    'warranty': '7-months'

}

print(insert(collections, product))

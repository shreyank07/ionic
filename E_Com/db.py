import json
import random
from E_Com import settings

collection = settings.WOMEN_PRODUCTS

def readDB ( filename="db.json" ) :
    with open ( filename , mode='r' ) as jsonFile :
        data = json.load ( jsonFile )
    return data

def addIMGsrc(collec,category,index,arr):
    collec.update_one({"category" : category},{"$set" : {f"entries.{str(index)}.img" : arr}})

# imgSrc = ["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2076229/2017/8/30/11504083411490-Vishudh-Women-Kurtas-9821504083411232-2.jpg",
#           "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2076229/2017/8/30/11504083411460-Vishudh-Women-Kurtas-9821504083411232-3.jpg",
#           "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2076229/2017/8/30/11504083411522-Vishudh-Women-Kurtas-9821504083411232-1.jpg",
#           "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2076229/2017/8/30/11504083411425-Vishudh-Women-Kurtas-9821504083411232-4.jpg"]
# addIMGsrc(collection,"KURTAS",1,imgSrc)

def updateOffer(collec,category,index,offer):
    collec.update_one({"category" : category},{"$set" : {f"entries.{str(index)}.offer" : offer }})  

i=0
x = collection.find_one({"category" : "SAREES"})
for item in x["entries"]:    
    print("hello")
    a =random.randrange(10,40)
    print(a)
    updateOffer(collection, "SAREES", i , a)
    i+=1

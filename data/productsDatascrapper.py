# import requests
# import json
# headers = {
#     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
# }

# response = requests.get("https://www.zara.com/dz/en/category/2426193/products?ajax=true",headers=headers)
# id = 0
# productList = []
# if(response.status_code == 200):
#     data = response.json()
#     for product in data.get("productGroups",[]):
#         for element in product.get("elements",[]):
#             for component in element.get("commercialComponents",[]):
#                 id = id +1
#                 oldPrice = component.get("price")
#                 if oldPrice is not None:
#                     oldPrice = float(oldPrice)
#                 else:
#                     oldPrice = 0.0
#                 newPrice = oldPrice - oldPrice / 10.0
#                 myElement = {"id":id,"name":component.get("name",{}),"oldPrice":oldPrice,"newPrice":newPrice,"category": "kids"}
#                 detail = component.get("detail",{})
#                 color = detail.get("colors",[])[0]
#                 x = color.get("xmedia",[])[0]
#                 extra = x.get("extraInfo",{})
#                 myElement.update({"imagePath":extra.get("deliveryUrl","")})
#                 productList.append(myElement)
#     with open("data/categories.json","a") as file:
#         json.dump(productList,file,indent=4) 
#     # print(productList)   
# else:
#     print("Fieled to retreive data !",response.status_code)




# ///////////////////////////////




import requests
import json
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
}

response = requests.get("https://www.zara.com/dz/en/category/2436316/products?ajax=true",headers=headers)
id = 0
productList = []
if(response.status_code == 200):
    data = response.json()
    for product in data.get("productGroups",[]):
        for element in product.get("elements",[]):
            for component in element.get("commercialComponents",[]):
                id = id +1
                oldPrice = component.get("price")
                if oldPrice is not None:
                    oldPrice = float(oldPrice)
                else:
                    oldPrice = 0.0
                newPrice = oldPrice - oldPrice / 10.0
                myElement = {"id":id,"name":component.get("name",{}),"oldPrice":oldPrice,"newPrice":newPrice,"category": "men"}
                detail = component.get("detail",{})
                color = detail.get("colors",[])[0]
                x = color.get("xmedia",[])[0]
                extra = x.get("extraInfo",{})
                myElement.update({"imagePath":extra.get("deliveryUrl","")})
                productList.append(myElement)
    with open("data/categories.json","a") as file:
        json.dump(productList,file,indent=4) 
    # print(productList)   
else:
    print("Fieled to retreive data !",response.status_code)





# //////////////////////////////////////////






# import requests
# import json
# headers = {
#     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
# }

# response = requests.get("https://www.zara.com/dz/en/category/2462844/products?ajax=true",headers=headers)
# id = 0
# productList = []
# if(response.status_code == 200):
#     data = response.json()
#     for product in data.get("productGroups",[]):
#         for element in product.get("elements",[]):
#             for component in element.get("commercialComponents",[]):
#                 id = id +1
#                 oldPrice = component.get("price")
#                 if oldPrice is not None:
#                     oldPrice = float(oldPrice)
#                 else:
#                     oldPrice = 0.0
#                 newPrice = oldPrice - oldPrice / 10.0
#                 myElement = {"id":id,"name":component.get("name",{}),"oldPrice":oldPrice,"newPrice":newPrice,"category": "women"}
#                 detail = component.get("detail",{})
#                 color = detail.get("colors",[])[0]
#                 x = color.get("xmedia",[])[0]
#                 extra = x.get("extraInfo",{})
#                 myElement.update({"imagePath":extra.get("deliveryUrl","")})
#                 productList.append(myElement)
#     with open("data/categories.json","w") as file:
#         json.dump(productList,file,indent=4) 
#     # print(productList)   
# else:
#     print("Fieled to retreive data !",response.status_code)


    #for men jakets :
# import requests
# import json
# headers = {
#     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
# }

# response = requests.get("https://www.zara.com/dz/en/category/2467336/products?ajax=true",headers=headers)
# id = 0
# productList = []
# if(response.status_code == 200):
#     data = response.json()
#     for product in data.get("productGroups",[]):
#         for element in product.get("elements",[]):
#             for component in element.get("commercialComponents",[]):
#                 id = id +1
#                 oldPrice = component.get("price")
#                 if oldPrice is not None:
#                     oldPrice = float(oldPrice)
#                 else:
#                     oldPrice = 0.0
#                 newPrice = oldPrice - oldPrice / 10.0
#                 myElement = {"id":id,"name":component.get("name",{}),"oldPrice":oldPrice,"newPrice":newPrice}
#                 detail = component.get("detail",{})
#                 color = detail.get("colors",[])[0]
#                 x = color.get("xmedia",[])[0]
#                 extra = x.get("extraInfo",{})
#                 myElement.update({"imagePath":extra.get("deliveryUrl","")})
#                 productList.append(myElement)
#     with open("data/products.json","w") as file:
#         json.dump(productList,file,indent=4) 
#     # print(productList)   
# else:
#     print("Fieled to retreive data !",response.status_code)
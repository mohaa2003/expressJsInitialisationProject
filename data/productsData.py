import requests
import csv
from bs4 import BeautifulSoup

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
}

for i in range(4):
  data = requests.get(f"https://www.zara.com/dz/en/man-outerwear-l715.html?v1=2467336&page={i+1}",headers=headers)
  src = data.content
  soup = BeautifulSoup(src,"lxml")
  productContainers = soup.find_all("li",{"class" : "products-category-grid-block products-category-grid-block--is-template product-grid-block-dynamic product-grid-block-dynamic__container product-grid-block-dynamic__container--1A"})
  for j in range(len(productContainers)):
    image = productContainers[j].find("img",{"class" : "media-image__image media__wrapper--media"})["src"]
    print(image)
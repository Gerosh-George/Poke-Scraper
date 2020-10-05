import requests
from bs4 import BeautifulSoup as bs


def type_to_list(words):
    if(words==''):
        return []        
    if(words[-1]!=' '):
        words=words+' '
    pokemon_type=[]
    word=""
    for ch in words:
        if(ch!=' '):
            if(ch==','):
                continue
            word=word+ch
        else:
            pokemon_type.append(word)
            word=''
    return(pokemon_type)


url='https://www.eurogamer.net/articles/2018-12-21-pokemon-go-type-chart-effectiveness-weaknesses'

page=requests.get(url)

doc=page.content

soup=bs(doc,'html.parser')

table=soup.table

headers=table.findAll('th')

col=[]

for title in headers:
    name=title.get_text()    
    col.append(name)

rows=table.findAll('tr')

types={}

for row in rows:
    i=1
    data=row.findAll('td')
    type_name=(data[0].get_text())   
   
    types[type_name]={}   
    
    for point in data[1:]:
        data_point=point.get_text()
        types[type_name][col[i]]=type_to_list(data_point)        
        i=i+1    

def pokemon_types():
    return types




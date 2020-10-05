import pandas as pd
from bs4 import BeautifulSoup as bs
import requests

def type_to_list(words):
    if(words[-1]!=' '):
        words=words+' '
    pokemon_type=[]
    word=""
    for ch in words:
        if(ch!=' '):
            word=word+ch
        else:
            pokemon_type.append(word)
            word=''
    return(pokemon_type)
    

url='https://pokemondb.net/pokedex/all'

page=requests.get(url)

doc=page.content

soup=bs(doc,'html.parser')

table=soup.table

rows=table.findAll('tr')

col=[]
headers=rows[0].findAll('th')

for title in headers:
    name=title.get_text()    
    col.append(name)


pokemons={}

pokemon_count=151
count=0

for row in rows[1:]:
    i=1
    data=row.findAll('td')
    number=int(data[0].get_text())    
    if(count==pokemon_count):
        break
    if number in pokemons:
        continue
    count+=1
    pokemons[number]={}   
    
    for point in data[1:]:
        data_point=""
        try:
            data_point=int(point.get_text())
        except:
            data_point=point.get_text()
        if(col[i]=='Type'):
            pokemons[number][col[i]]=type_to_list(data_point)
        else:
            pokemons[number][col[i]]=data_point
        i=i+1

def pokemon():
    return pokemons

        
    
    

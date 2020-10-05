import requests
from bs4 import BeautifulSoup as bs
import re
from scrapper import pokemon

def number_filter(original_string):
    return original_string.replace('\\xa0',' ')

def list_maker(words):
    final_list=[]
    word=""
    flag=False
    count=0
    for ch in words:
        if(ch.isalpha() or ch in [')','(',' ']):            
            if(ch.isupper() and not flag):
                count=count+1
                if(count==2):
                    flag=True
                if(word not in ['',' ']):
                    final_list.append(word.strip())
                    word=''
                word=word+ch
            else:
                word=word+ch
    final_list.append(word)
    return final_list
        

#print(list_maker('1. OvergrowChlorophyll (hidden ability)'))
#print(number_filter('1.0\xa0m (3′03″)'))
        

endpoint="https://pokemondb.net/pokedex/"

col=['Species','Height','Weight','Abilities']

pokemons={}

values=[4, 7, 8, 12]

pokemon_data=pokemon()



for pokemon in pokemon_data:
    pokemon_name=pokemon_data[pokemon]['Name'].lower()
    
    if(pokemon==29):
        pokemon_name='nidoran-f'
    elif(pokemon==32):
        pokemon_name='nidoran-m'
    elif(pokemon==122):
        pokemon_name='mr-mime'
    url=endpoint+pokemon_name

    page=requests.get(url)
    doc=page.content

    soup=bs(doc,'html.parser')

    tables=soup.findAll(class_='vitals-table')   
    
    data_table=tables[0]
    

    rows=data_table.findAll('tr')


    for row in rows:
        data_name=row.th.get_text()
        if(data_name in col):
            # if(data_name in ['Height','Weight']):
            #     pokemon_data[pokemon][data_name]=number_filter(row.td.get_text())           
            if(data_name=='Abilities'):
                pokemon_data[pokemon][data_name]=list_maker(row.td.get_text())
            else:
                pokemon_data[pokemon][data_name]=row.td.get_text()   


    entries_table=""
    for value in values:
        entries_table=tables[value]
        row_title=entries_table.th.get_text()
        if(row_title=='RedBlue'):
            break;

    row=entries_table.tr
    pokemon_data[pokemon]['Entry']=row.td.get_text()




def final_pokemons():
    return pokemon_data



#TODO:change list_maker to adapt new changes 
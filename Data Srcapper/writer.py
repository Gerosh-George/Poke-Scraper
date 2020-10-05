import json
from data_scrapper import final_pokemons
from type_scrap import pokemon_types
from image import pokemon_images

dataset={}
dataset['Pokemons']=final_pokemons()
dataset['Types']= pokemon_types()
dataset['Images']= pokemon_images()


def map_pokemon():
     types=dataset['Types']
     pokemons=dataset['Pokemons']
     for pokemon_type in types:
          types[pokemon_type]['#']=[]
          for pokemon in pokemons:
               if(pokemon_type in pokemons[pokemon]['Type']):
                    types[pokemon_type]['#'].append(str(pokemon))
         
map_pokemon()
with open ('PokemonData.json','w') as outfile:     
     json.dump(dataset,outfile)


   

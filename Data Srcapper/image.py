from scrapper import pokemon

extenstion=['.png','.gif','.jpg']
home="https://img.pokemondb.net/sprites/home/normal/" 
sprite="https://img.pokemondb.net/sprites/black-white/anim/normal/"
big="https://img.pokemondb.net/artwork/"


def home_url(pokemon):
    name=pokemon.lower()
    url=home+name+extenstion[0]
    return url

def sprite_url(pokemon):
    name=pokemon.lower()
    url=sprite+name+extenstion[1]
    return url

def big_url(pokemon):
    name=pokemon.lower()
    url=big+name+extenstion[2]
    return url


    

images={}
pokemons=pokemon()


for pokemon in pokemons:
    images[pokemon]={}
    images[pokemon]['Home']=home_url(pokemons[pokemon]['Name'])
    images[pokemon]['Sprite']=sprite_url(pokemons[pokemon]['Name'])  
    images[pokemon]['Big']=big_url(pokemons[pokemon]['Name'])    
 

def pokemon_images():
    return images
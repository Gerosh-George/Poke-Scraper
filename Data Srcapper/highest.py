import json

f=open('PokemonData.json')
pokemon_dataset=json.load(f)
pokemons=pokemon_dataset['Pokemons']

max_hp=0
max_total=0
max_attack=0
max_defense=0
max_spattck=0
max_spdefense=0
max_speed=0

for pokemon in pokemons:
    pokemon=pokemons[pokemon]
    if(int(pokemon['Total'])>max_total):
        max_total=int(pokemon['Total'])
    
    if(int(pokemon['HP'])>max_hp):
        max_hp=pokemon['HP']
    
    if(int(pokemon['Attack'])>max_attack):
        max_attack=int(pokemon['Attack'])
    
    if(int(pokemon['Defense'])>max_defense):
        max_defense=int(pokemon['Defense'])
    
    if(int(pokemon['Sp. Atk'])>max_spattck):
        max_spattck=int(pokemon['Sp. Atk'])        
    
    if(int(pokemon['Sp. Def'])>max_spdefense):
        max_spdefense=int(pokemon['Sp. Def'])
    
    if(int(pokemon['Speed'])>max_speed):
        max_speed=int(pokemon['Speed'])
        
print("Total:%d"%max_total)
print("HP:%d"%max_hp)
print("Attack:%d"%max_attack)
print("Defense:%d"%max_defense)
print("Sp Atk:%d"%max_spattck)
print("Sp Def:%d"%max_spdefense)
print("Speed:%d"%max_speed)


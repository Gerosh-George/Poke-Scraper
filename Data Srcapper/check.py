import json

f=open('PokemonData.json')

data=json.load(f)
pokemon=data['Pokemons']['144']
print(144)
print(pokemon['Name'])
print(pokemon['Type'])
print(pokemon['Total'])
print(pokemon['HP'])
print(pokemon['Attack'])
print(pokemon['Defense'])
print(pokemon['Sp. Atk'])
print(pokemon['Sp. Def'])
print(pokemon['Speed'])
print(pokemon['Species'])
print(pokemon['Height'])
print(pokemon['Weight'])
print(pokemon['Abilities'])
print(pokemon['Entry'])

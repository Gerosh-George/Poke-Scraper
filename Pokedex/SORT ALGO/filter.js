var pokemons = {};

var arr=[];

async function filter_pokemon_type(Types) {
	const response = await fetch("PokemonData.json");
	const data = await response.json();
    pokemon_number = data["Types"]['Bug']['#'];
    type_details=data["Types"]['Bug'];
    pokemons=data['Pokemons'];
    
    console.log(type_details)
    console.log(arr)
    
    
    
    
    
        for(var i=0;i<pokemon_number.length;i++){
        arr.push(pokemons[pokemon_number[i]]['Name']);
    }
    
      
    
}

/*async function display_name() {
	const response = await fetch("PokemonData.json");
	const data = await response.json();
    pokemons = data["Pokemons"];
    
    arr=range(1,151)

     for(var i=0;i<151;i++){
        console.log(pokemons[arr[i]],":",pokemons[arr[i]]['Name'])
    }

    
}
    //arr=range(1,151);
   // display_pokemon(Types);
    



/*function display_pokemon(Types){
    console.log("Type:",Types)
    for(var i=0;i<151;i++){
        console.log(pokemons[arr[i]]['Types'],":",pokemons[arr[i]]['#']['Strong Against']['Weak Against']['Resistant To']['Vulnerable To'])
    }
}*/


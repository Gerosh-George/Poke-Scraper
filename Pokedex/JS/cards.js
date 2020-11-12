var pokes = [];
var pokes2 = [];
var names = [];
var images = [];

async function getData() {
    const response = await fetch('../Pokedex/JSON/PokemonData.json');
    const data = await response.json();
    pokes = data["Pokemons"];
    pokes2 = data["Images"];
    var i;
    for(i=1; i<=151; i++){
        names.push(pokes[i]["Name"]);
    }
    for(i=1; i<=151; i++){
        images.push(pokes2[i]["Home"]);
    }
    display1(names);
}

function display1(pokemon){
    
    document.getElementById('pokemon-container').innerHTML = "";
    var poke = document.getElementById('pokemon-container');
    var div;
    
    for(var i in pokemon)
        {
            var count = names.indexOf(pokemon[i]);
            div = document.createElement('div');
            div.innerHTML = `<div class="display" onclick="choose(${count+1});" >${pokemon[i]}
            <img class="image" src=${images[count]} weight = "240" height = "240" />
            </div>`;
            poke.appendChild(div);
        }
}





async function choose(choice){
    
    const response = await fetch('../Pokedex/JSON/PokemonData.json');
    const data = await response.json();
                
    localStorage.setItem("name",data['Pokemons'][choice]['Name']);
    localStorage.setItem("id",choice);
    localStorage.setItem("entry",data['Pokemons'][choice]['Entry']);
    localStorage.setItem("img",data['Images'][choice]['Big']);
    localStorage.setItem("height",data['Pokemons'][choice]['Height']);
    localStorage.setItem("weight",data['Pokemons'][choice]['Weight']);
    localStorage.setItem("species",data['Pokemons'][choice]['Species']);
    localStorage.setItem("category",data['Pokemons'][choice]['Type']);
    localStorage.setItem("abilities",data['Pokemons'][choice]['Abilities']);
    
    localStorage.setItem("total",data['Pokemons'][choice]['Total']);
    localStorage.setItem("hp",data['Pokemons'][choice]['HP']);
    localStorage.setItem("attack",data['Pokemons'][choice]['Attack']);
    localStorage.setItem("defense",data['Pokemons'][choice]['Defense']);
    localStorage.setItem("spatk",data['Pokemons'][choice]['Sp. Atk']);
    localStorage.setItem("spdef",data['Pokemons'][choice]['Sp. Def']);
    localStorage.setItem("speed",data['Pokemons'][choice]['Speed']);
    
    var pokemon_types = [];
    for(var i=0;i<Object.keys(data["Types"]).length;i++){
        pokemon_types.push(Object.keys(data["Types"])[i]);
    }
    
    localStorage.setItem('pokemon_types', pokemon_types);
    
    var types = data['Pokemons'][choice]['Type'];
    var strong = [];
    var weak = [];
    var resistant = [];
    var vulnerable = [];
    
    for(var i in types){
        strong.push(data['Types'][types[i]]["Strong Against"]);
    }
    strong = strong.toString();
    localStorage.setItem("strong",strong);
    
    for(var i in types){
        weak.push(data['Types'][types[i]]["Weak Against"]);
    }
    weak = weak.toString();
    localStorage.setItem("weak",weak);
    
    for(var i in types){
        resistant.push(data['Types'][types[i]]["Resistant To"]);
    }
    resistant = resistant.toString();
    localStorage.setItem("resistant",resistant);
    
    for(var i in types){
        vulnerable.push(data['Types'][types[i]]["Vulnerable To"]);
    }
    vulnerable = vulnerable.toString();
    localStorage.setItem("vulnerable",vulnerable);
    
    window.location = "pokemon.html";
}








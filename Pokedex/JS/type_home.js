var pokes = [];
var pokes2 = [];
var names = [];
var images = [];

async function getData() {
    const response = await fetch('../Pokedex/JSON/PokemonData.json');
    const data = await response.json();
    pokes = data["Types"];
    pokes2 = data["Pokemons"];
    images = data["Images"];
    names = Object.keys(pokes);
    display1(names);
}

function display1(type){
    
    document.getElementById('types-container').innerHTML = "";
    var poke = document.getElementById('types-container');
    var div;
    
    for(var i in type)
        {
            var count = names.indexOf(type[i]);
            div = document.createElement('div');
            div.innerHTML = `<div class="display" onclick="choose_type(${count});">${type[i]}
            <img class="image" src="../Pokedex/Images/Types/${count}.png" weight = "240" height = "240" />
            </div>`;
            poke.appendChild(div);
        }
}



async function choose_type(choice){
    
    const response = await fetch('../Pokedex/JSON/PokemonData.json');
    const data = await response.json();
    pokes = data["Types"];
    pokes2 = data["Pokemons"];
    images = data["Images"];
    names = Object.keys(pokes);
    
    localStorage.setItem('type_name', names[choice]);
    localStorage.setItem('type_img',"<img src='../Pokedex/Images/Types/" + choice + ".png' weight = 130 height = 130 />");
    localStorage.setItem('strong_type', pokes[names[choice]]['Strong Against']);
    localStorage.setItem('weak_type', pokes[names[choice]]['Weak Against']);
    localStorage.setItem('resistant_type', pokes[names[choice]]['Resistant To']);
    localStorage.setItem('vulnerable_type', pokes[names[choice]]['Vulnerable To']);
    localStorage.setItem('ids', pokes[names[choice]]['#']);
    
    localStorage.setItem('choice', choice);
    
    var pokemon_names = [];
    for(var i=0;i<pokes[names[choice]]['#'].length;i++){
        pokemon_names.push(pokes2[pokes[names[choice]]['#'][i]]['Name']);
    }
    
    localStorage.setItem('names', pokemon_names);
    
    var pokemon_sprites = [];
    for(var i=0;i<pokes[names[choice]]['#'].length;i++){
        pokemon_sprites.push(images[pokes[names[choice]]['#'][i]]['Sprite']);
    }
    
    localStorage.setItem('sprites', pokemon_sprites);
    
    var pokemon_types = [];
    for(var i=0;i<names.length;i++){
        pokemon_types.push(names[i]);
    }
    
    localStorage.setItem('types', pokemon_types);
    
    window.location = "type_info.html";
}








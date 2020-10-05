async function getData() {
    
    const response = await fetch('tp.json');
    const data = await response.json();
    
    var poke = document.getElementById('pokemon-container');
    var div;
    for(var i in data['Pokemons'])
        {
            div = document.createElement('div');
            div.innerHTML = `<div class="display" onclick="choose(${i});" >${data['Pokemons'][i]['Name']}
            
            <img class="image" src=${data['Images'][i]['Home']} weight = "240" height = "240" />
            </div>`;
            poke.appendChild(div);
           
        }
}


async function choose(choice){
    
    const response = await fetch('tp.json');
    const data = await response.json();
                
    localStorage.setItem("name",data['Pokemons'][choice]['Name']);
    localStorage.setItem("id",choice);
    localStorage.setItem("entry",data['Pokemons'][choice]['Entry']);
    localStorage.setItem("img",data['Images'][choice]['Home']);
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
    
    
    window.location = "pokemon.html";
}








function def(){
    sort_by_stats('Total');
}

var orderSelected = "desc";

function selection(){
    var e = document.getElementById("stat-select");
    var o = document.getElementById("order-select");
    statSelected = e.options[e.selectedIndex].value;
    orderSelected = o.options[o.selectedIndex].id;
    
    sort_by_stats(statSelected);
}



var pokemons = {};
var sprites = {};
var arr=[]


function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

function copy(b, lb, ub) {
	let k = 0;
	for (var i = lb; i <= ub; i++) {
		arr[i] = b[k];
		k++;
	}
}

function merge(pokemons, lb, mid, ub, stat) {

	let b = [];
	let i = lb;	
	let j = mid + 1;

	while (i <= mid && j <= ub) {        
		if (parseInt(pokemons[arr[i]][stat]) < parseInt(pokemons[arr[j]][stat])) {
			b.push(arr[i]);
			i++;
		} else {
			b.push(arr[j]);
			j++;
		}
	}

	if (i > mid) {
		while (j <= ub) {
			b.push(arr[j]);
			j++;
		}
	} else {
		while (i <= mid) {
			b.push(arr[i]);
			i++;
		}
	}
    copy(b, lb, ub);   
}

function MergeSort(pokemons, lb, ub, stat) {
	if (lb < ub) {
		let mid = Math.floor((lb + ub) / 2);
		MergeSort(pokemons, lb, mid, stat);
		MergeSort(pokemons, mid + 1, ub, stat);
		merge(pokemons, lb, mid, ub, stat);
	}
}

async function sort_by_stats(stat) {
	const response = await fetch("../Pokedex/JSON/PokemonData.json");
	const data = await response.json();
    pokemons = data["Pokemons"];
    sprites = data["Images"];

    arr=range(1,151)

    MergeSort(pokemons, 0, 150, stat);
    display_pokemon(stat)
    
}

function display_pokemon(stat){
    document.getElementById('list-container-sprite').innerHTML = "";
    document.getElementById('list-container-name').innerHTML = "";
    document.getElementById('list-container-stat').innerHTML = "";
    var list_sprite = document.getElementById('list-container-sprite');
    var list_name = document.getElementById('list-container-name');
    var list_stat = document.getElementById('list-container-stat');
    var div;
    var div1;
    var div2;
    
    
    if(orderSelected == "inc"){
        for(var i=0;i<151;i++){
            var count = arr[i];
            div1 = document.createElement('div');
            div1.innerHTML = `<img class="list-item-sprite" src="${sprites[count]['Sprite']}" height="35px" width="35px"><div class="list-item-name" onclick="choose(${count});">${pokemons[arr[i]]['Name']}</div>`;
            list_name.appendChild(div1);
        }
        for(var i=0;i<151;i++){
            var count = arr[i];
            div2 = document.createElement('div');
            div2.innerHTML = `<div class="list-item-stat">${pokemons[arr[i]][stat]}</div>`;
            list_stat.appendChild(div2);
        }
        
    } else {
        for(var i=150;i>=0;i--){
            var count = arr[i];
            div1 = document.createElement('div');
            div1.innerHTML = `<img class="list-item-sprite" src="${sprites[count]['Sprite']}" height="35px" width="35px"><div class="list-item-name" onclick="choose(${count});">${pokemons[arr[i]]['Name']}</div>`;
            list_name.appendChild(div1);
        }
        for(var i=150;i>=0;i--){
            var count = arr[i];
            div2 = document.createElement('div');
            div2.innerHTML = `<div class="list-item-stat">${pokemons[arr[i]][stat]}</div>`;
            list_stat.appendChild(div2);
        }
    }
 
}

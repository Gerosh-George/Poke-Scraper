var pokemons = {};
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
	const response = await fetch("PokemonData.json");
	const data = await response.json();
    pokemons = data["Pokemons"];
    //console.log(pokemons);

    arr=range(1,151)

    MergeSort(pokemons, 0, 150, stat);
    console.log(arr)
    display_pokemon(stat)
    
}

function display_pokemon(stat){
    console.log("Stat:",stat)
    for(var i=0;i<151;i++){
        console.log(pokemons[arr[i]]['Name'],":",pokemons[arr[i]][stat])
    }
}

sort_by_stats("Speed");

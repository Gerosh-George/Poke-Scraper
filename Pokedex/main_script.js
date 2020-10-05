var name = localStorage.getItem("name");
var id = localStorage.getItem("id");
var entry = localStorage.getItem("entry");
var img = localStorage.getItem("img");
var height = localStorage.getItem("height");
var weight = localStorage.getItem("weight");
var species = localStorage.getItem("species");
var category = localStorage.getItem("category");
var abilities = localStorage.getItem("abilities");

var total = localStorage.getItem("total");
var hp = localStorage.getItem("hp");
var attack = localStorage.getItem("attack");
var defense = localStorage.getItem("defense");
var spatk = localStorage.getItem("spatk");
var spdef = localStorage.getItem("spdef");
var speed = localStorage.getItem("speed");

var bar7= (100 * total)/680;
var bar6= (100 * hp)/250;
var bar5= (100 * attack)/134;
var bar4= (100 * defense)/180;
var bar3= (100 * spatk)/154;
var bar2= (100 * spdef)/125;
var bar1= (100 * speed)/150;





window.onload = function() {
    document.getElementById("pokemon_name").innerHTML = name;
    document.getElementById("pokemon_id").innerHTML = "#" + id;
    document.getElementById("entry").innerHTML = entry;
    document.getElementById("image").innerHTML = '<img src="' + img + '" width="300" height = "auto">';
    document.getElementById("height").innerHTML = height;
    document.getElementById("weight").innerHTML = weight;
    document.getElementById("species").innerHTML = species;
    document.getElementById("category").innerHTML = category;
    document.getElementById("ability").innerHTML = abilities;
    
    document.getElementById("total").innerHTML = total;
    document.getElementById("hp").innerHTML = hp;
    document.getElementById("attack").innerHTML = attack;
    document.getElementById("defense").innerHTML = defense;
    document.getElementById("spatk").innerHTML = spatk;
    document.getElementById("spdef").innerHTML = spdef;
    document.getElementById("speed").innerHTML = speed;
    
    document.getElementById("bar-seven").style.width = bar7 + "%";
    document.getElementById("bar-six").style.width = bar6 + "%";
    document.getElementById("bar-five").style.width = bar5 + "%";
    document.getElementById("bar-four").style.width = bar4 + "%";
    document.getElementById("bar-three").style.width = bar3 + "%";
    document.getElementById("bar-two").style.width = bar2 + "%";
    document.getElementById("bar-one").style.width = bar1 + "%";
    
    function color_select(bar_){
    if(bar_ <= 20){
        var col = "#FF8B5A";
    } else if(bar_ <= 40){
        var col = "#FFB234";
    } else if(bar_ <= 60){
        var col = "#FFD834";
    } else if(bar_ <= 80){
        var col = "#ADD633";
    } else {
        var col = "#9FC05A";
    }
    return col;
}
    
    document.getElementById("bar-seven").style.backgroundColor = color_select(bar7);
    document.getElementById("bar-six").style.backgroundColor = color_select(bar6);
    document.getElementById("bar-five").style.backgroundColor = color_select(bar5);
    document.getElementById("bar-four").style.backgroundColor = color_select(bar4);
    document.getElementById("bar-three").style.backgroundColor = color_select(bar3);
    document.getElementById("bar-two").style.backgroundColor = color_select(bar2);
    document.getElementById("bar-one").style.backgroundColor = color_select(bar1);
    
}
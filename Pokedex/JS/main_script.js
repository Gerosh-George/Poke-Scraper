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

var strong = localStorage.getItem("strong");
var weak = localStorage.getItem("weak");
var resistant = localStorage.getItem("resistant");
var vulnerable = localStorage.getItem("vulnerable");

var poke_types = localStorage.getItem("pokemon_types");

var bar7= (100 * total)/680;
var bar6= (100 * hp)/250;
var bar5= (100 * attack)/134;
var bar4= (100 * defense)/180;
var bar3= (100 * spatk)/154;
var bar2= (100 * spdef)/125;
var bar1= (100 * speed)/150;

var type_arr = poke_types.split(",");
type_arr = type_arr.filter((value,index) => type_arr.indexOf(value) === index);

var t_arr = category.split(",");
t_arr = t_arr.filter((value,index) => t_arr.indexOf(value) === index);
    var type = document.getElementById('type-container');
    var div1;
    for(var i in t_arr)
        {
            j = type_arr.indexOf(t_arr[i]);
            div1 = document.createElement('div');
            div1.innerHTML = '<div onclick = "choose_type(' + j + ');" >' + t_arr[i] + '</div>';
            div1.className = t_arr[i];
            type.appendChild(div1);
           
        }



var s_arr = strong.split(",");
var j;
s_arr = s_arr.filter((value,index) => s_arr.indexOf(value) === index);
    var str = document.getElementById('strong-container');
    var div2;
    for(var i in s_arr) 
        {
            j = type_arr.indexOf(s_arr[i]);
            div2 = document.createElement('div');
            div2.innerHTML = '<div onclick = "choose_type(' + j + ');" >' + s_arr[i] + '</div>';
            div2.className = s_arr[i];
            str.appendChild(div2);  
        }

var w_arr = weak.split(",");
w_arr = w_arr.filter((value,index) => w_arr.indexOf(value) === index);
    var wea = document.getElementById('weak-container');
    var div3;
    for(var i in w_arr) 
        {
            j = type_arr.indexOf(w_arr[i]);
            div3 = document.createElement('div');
            div3.innerHTML = '<div onclick = "choose_type(' + j + ');" >' + w_arr[i] + '</div>';
            div3.className = w_arr[i];
            wea.appendChild(div3);  
        }

var r_arr = resistant.split(",");
r_arr = r_arr.filter((value,index) => r_arr.indexOf(value) === index);
    var res = document.getElementById('resistant-container');
    var div4;
    for(var i in r_arr) 
        {
            j = type_arr.indexOf(r_arr[i]);
            div4 = document.createElement('div');
            div4.innerHTML = '<div onclick = "choose_type(' + j + ');" >' + r_arr[i] + '</div>';
            div4.className = r_arr[i];
            res.appendChild(div4);  
        }

var v_arr = vulnerable.split(",");
v_arr = v_arr.filter((value,index) => v_arr.indexOf(value) === index);
    var vul = document.getElementById('vulnerable-container');
    var div5;
    for(var i in v_arr) 
        {
            j = type_arr.indexOf(v_arr[i]);
            div5 = document.createElement('div');
            div5.innerHTML = '<div onclick = "choose_type(' + j + ');" >' + v_arr[i] + '</div>';
            div5.className = v_arr[i];
            vul.appendChild(div5);  
        }

window.onload = function() {
    
    document.getElementById("pokemon_name").innerHTML = name;
    document.getElementById("pokemon_id").innerHTML = "# " + id;
    document.getElementById("image").innerHTML = '<img class="image" src="' + img + '" width="300" height = "300">';
    document.getElementById("entry").innerHTML = entry;
    document.getElementById("height").innerHTML = height;
    document.getElementById("weight").innerHTML = weight;
    document.getElementById("species").innerHTML = species;
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
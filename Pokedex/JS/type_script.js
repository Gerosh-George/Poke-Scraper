var name = localStorage.getItem("type_name");
var img = localStorage.getItem("type_img");
var strong = localStorage.getItem("strong_type");
var weak = localStorage.getItem("weak_type");
var resistant = localStorage.getItem("resistant_type");
var vulnerable = localStorage.getItem("vulnerable_type");
var ids = localStorage.getItem("ids");
var poke_names = localStorage.getItem("names");
var poke_sprites = localStorage.getItem("sprites");
var poke_types = localStorage.getItem("types");


var type_arr = poke_types.split(",");
type_arr = type_arr.filter((value,index) => type_arr.indexOf(value) === index);


var s_arr = strong.split(",");
s_arr = s_arr.filter((value,index) => s_arr.indexOf(value) === index);
    var str = document.getElementById('strong-container-type');
    var div2;
    for(var i in s_arr) 
        {
            var j = type_arr.indexOf(s_arr[i]);
            div2 = document.createElement('div');
            div2.innerHTML = '<div onclick = "choose_type(' + j + ');" >' + s_arr[i] + '</div>';
            div2.className = s_arr[i];
            str.appendChild(div2);  
        }

var w_arr = weak.split(",");
w_arr = w_arr.filter((value,index) => w_arr.indexOf(value) === index);
    var wea = document.getElementById('weak-container-type');
    var div3;
    for(var i in w_arr) 
        {
            var j = type_arr.indexOf(w_arr[i]);
            div3 = document.createElement('div');
            div3.innerHTML = '<div onclick = "choose_type(' + j + ');" >' + w_arr[i] + '</div>';
            div3.className = w_arr[i];
            wea.appendChild(div3);  
        }

var r_arr = resistant.split(",");
r_arr = r_arr.filter((value,index) => r_arr.indexOf(value) === index);
    var res = document.getElementById('resistant-container-type');
    var div4;
    for(var i in r_arr) 
        {
            var j = type_arr.indexOf(r_arr[i]);
            div4 = document.createElement('div');
            div4.innerHTML = '<div onclick = "choose_type(' + j + ');" >' + r_arr[i] + '</div>';
            div4.className = r_arr[i];
            res.appendChild(div4);  
        }

var v_arr = vulnerable.split(",");
v_arr = v_arr.filter((value,index) => v_arr.indexOf(value) === index);
    var vul = document.getElementById('vulnerable-container-type');
    var div5;
    for(var i in v_arr) 
        {
            var j = type_arr.indexOf(v_arr[i]);
            div5 = document.createElement('div');
            div5.innerHTML = '<div onclick = "choose_type(' + j + ');" >' + v_arr[i] + '</div>';
            div5.className = v_arr[i];
            vul.appendChild(div5);  
        }

var id_arr = ids.split(",");
id_arr = id_arr.filter((value,index) => id_arr.indexOf(value) === index);
    var id = document.getElementById('list-container-id');
    var div6;
    for(var i in id_arr) 
        {
            div6 = document.createElement('div');
            div6.innerHTML = "#" + id_arr[i];
//            div6.className = id_arr[i];
            id.appendChild(div6);  
        }

var name_arr = poke_names.split(",");
name_arr = name_arr.filter((value,index) => name_arr.indexOf(value) === index);
    var n = document.getElementById('list-container-name');
    var div7;
    for(var i in name_arr) 
        {
            div7 = document.createElement('div');
            div7.innerHTML = '<div onclick = "choose(' + id_arr[i] +');">' + name_arr[i] + '</div>';
            div7.className = "list-item-name";
            n.appendChild(div7);  
        }

var sprite_arr = poke_sprites.split(",");
sprite_arr = sprite_arr.filter((value,index) => sprite_arr.indexOf(value) === index);
    var s = document.getElementById('list-container-sprite');
    var div8;
    for(var i in sprite_arr) 
        {
            div8 = document.createElement('div');
            div8.innerHTML = '<img class="sprites" src="' + sprite_arr[i] + '" width = "35px" height = "35px" />';
//            div6.className = id_arr[i];
            s.appendChild(div8);  
        }

window.onload = function() {
    
    document.getElementById("type_name").innerHTML = name;
    document.getElementById("type_image").innerHTML = img;
    
}
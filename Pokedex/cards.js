var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);

      
    var names = document.getElementById('name-container');
    var name; 
    for(var i in myObj['Pokemons'])
    {
        name = document.createElement('div');
        name.innerHTML = `<div class="displayName">${myObj['Pokemons'][i]['Name']}</div>`;
        names.appendChild(name);
        
        
    }
      
    
      
    
  }
};
xmlhttp.open("GET", "tp.json", true);
xmlhttp.send();
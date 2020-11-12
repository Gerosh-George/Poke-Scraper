const searchbar = document.getElementById('searchbar');

searchbar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase(); 
    const filtered = names.filter((character) => {
        character = character.toLowerCase();
        return (character.includes(searchString)); 
    });
    
    if(filtered.length == 0){
        document.getElementById('pokemon-container').innerHTML = '';
        var dne = document.getElementById('pokemon-container');
        var divdne = document.createElement('div');
            divdne.innerHTML = `
            <div>
               <div class="dne">
               <span id="number">4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
               <span id="number">4</span>
               </div>
               <img class="pokeball" src="Images/pokeball.png" width="100px" height="auto">
               <h2>Uh-Oh!</h2>
               <h3>You look lost on your journey!</h3>
           </div>
            `;
            dne.appendChild(divdne);
    } else {
        display1(filtered);
    }
    
});
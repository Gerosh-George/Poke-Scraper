function expandSearch(){
    var searchBox = document.getElementById('search-box');
    var searchTxt = document.getElementById('searchbar');
    var searchBtn = document.getElementById('search-btn');

    searchTxt.style.width = '240px';
    searchTxt.style.padding = '0 10px';
    searchBtn.style.color = '#262626';
    searchBtn.style.backgroundColor = 'whitesmoke';
    
}

function collapseSearch(){
    var searchBox = document.getElementById('search-box');
    var searchTxt = document.getElementById('searchbar');
    var searchBtn = document.getElementById('search-btn');

    searchTxt.style.width = '0';
    searchTxt.style.padding = '0';
    searchBtn.style.color = 'whitesmoke';
    searchBtn.style.backgroundColor = '#262626';
}
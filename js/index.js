
let url2="https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists"
let artistasSection= document.querySelector(".artistasSection")
fetch(url2)
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data)
    let artists= data.data.slice(4,10)
    let artistasHTML=''

    for(let i=0;i<artists.length;i++){
        let artistas= artists[i];
        artistasHTML += `
        <article class="artist">
        <a class="albumesA" href="detail-artistas.html?id=${artistas.id}">
        <img class="art" src="${artistas.picture_medium}" alt="${artistas.name} Cover">
        

        <h2 class="centered">${artistas.name}</h2>
        </a>
</article>
`;
    }
    artistasSection.innerHTML += artistasHTML;
    
})
.catch(function(error){
    console.log("error:" + error)
})




let url="https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums"
let albumesSection= document.querySelector(".albumesSection")
fetch(url)
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data)
    let albums= data.data.slice(4,10)
    let albumsHTML=''

    for(let i=0;i<albums.length;i++){
        let album= albums[i];
        albumsHTML += `
        <article class="artist">
        <a class="albumesA" href="./detail-album.html?id=${album.id}">
        <img class="art" src="${album.cover_medium}" alt="${album.title} Cover">
        

        <h2 class="centered">${album.title}</h2>
        </a>
</article>
`;
    }
    albumesSection.innerHTML += albumsHTML;
    
})
.catch(function(error){
    console.log("error:" + error)
})



let url1="https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"
let cancionesSection= document.querySelector(".cancionesSection")
fetch(url1)
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data)
    let canciones= data.data.slice(0,6)
    let cancionesHTML=''

    for(let i=0;i<canciones.length;i++){
        let song= canciones[i];
        cancionesHTML += `
        <article class="artist">
        <a class="albumesA" href="detail-canciones.html?id=${song.id}">
        <img class="art" src="${song.album.cover_medium}" alt="${song.title} Cover">
        <h2 class="centered1">${song.title}</h2>
        <h3 class="down">${song.artist.name}</h3>
  
        </a>
</article>
`;
    }
    cancionesSection.innerHTML += cancionesHTML;
    
})
.catch(function(error){
    console.log("error:" + error)
})

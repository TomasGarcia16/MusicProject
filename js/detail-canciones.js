let urlDetalles = new URLSearchParams(window.location.search);
let dataId = urlDetalles.get("id"); //querystring

let detailUrl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${dataId}`;


fetch(detailUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data)
    let songTitle = data.title;
    let albumTitle= data.album.title;
    let artistName = data.artist.name;
    let albumCover = data.album.cover_big;
let album=data.album.id;
let albumLink=`detail-album.html?id=${album}`;
let artistas= data.artist.id;
let artistLink=`detail-artistas.html?id=${artistas}`;
let audioPreviewUrl= data.preview
console.log(audioPreviewUrl)
//.textcontent=funciona como innerHtml o innerText
    document.querySelector(".songTitle").textContent = songTitle;
    document.querySelector(".albumTitle").textContent= albumTitle;
    document.querySelector(".artistName").textContent = artistName;
    document.querySelector(".albumCover").setAttribute("src", albumCover);
    document.querySelector(".detalles-detail-alb").setAttribute("href", albumLink )
    document.querySelector(".detalles-detail-art").setAttribute("href", artistLink )
    document.querySelector(".audio").setAttribute("src",audioPreviewUrl)
    document.querySelector(".audio").setAttribute("controls", true);
   
    document.querySelector(".addToFavoritesButton").addEventListener("click", function() {
      let songId = dataId; 
    
      let song = {
        id: songId,
        title: songTitle,
        album: albumTitle,
        artist: artistName,
        cover: albumCover
      };
    
      addToFavorites(song); 
    });
    function addToFavorites(item) {
      if (localStorage.getItem(item.id)) {
        alert("El elemento ya está en favoritos.");
        return;
      }
    
      localStorage.setItem(item.id, JSON.stringify(item));
      alert("Elemento agregado a favoritos.");
    }

})
.catch(function(error) {
  console.log("error:" + error);
});


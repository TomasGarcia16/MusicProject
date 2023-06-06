
let urlDetalles = new URLSearchParams(window.location.search);
let albumId = urlDetalles.get("id");

let detailUrl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${albumId}`;

fetch(detailUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(album) {
    let albumTitle = album.title;
    let artistName = album.artist.name;
    let albumCover = album.cover_big;

    document.querySelector(".albumTitle").textContent = albumTitle;
    document.querySelector(".artistName").textContent = artistName;
    document.querySelector(".albumCover").setAttribute("src", albumCover);
    document.querySelector(".albumGenero").textContent =albumGenero ;

  
  })
  .catch(function(error) {
    console.log("error:" + error);
  });

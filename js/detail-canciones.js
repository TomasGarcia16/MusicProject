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
//.textcontent=funciona como innerHtml o innerText
    document.querySelector(".songTitle").textContent = songTitle;
    document.querySelector(".albumTitle").textContent= albumTitle;
    document.querySelector(".artistName").textContent = artistName;
    document.querySelector(".albumCover").setAttribute("src", albumCover);
    document.querySelector(".detalles-detail-alb").setAttribute("href", albumLink )
    document.querySelector(".detalles-detail-art").setAttribute("href", artistLink )

})
.catch(function(error) {
  console.log("error:" + error);
});
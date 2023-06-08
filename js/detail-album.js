
let urlDetalles = new URLSearchParams(window.location.search);
let albumId = urlDetalles.get("id"); //querystring

let detailUrl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${albumId}`;


fetch(detailUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(album) {
    console.log(album)
    let albumTitle = album.title;
    let artistName = album.artist.name;
    let albumCover = album.cover_big;
    let albumGenero= album.genres.data[0].name;
    let albumReleaseDate= album.release_date;
    let artista= album.artist.id;
    let artistLink=`detail-artistas.html?id=${artista}`;
    let genero= album.genres.data[0].id;
    let genreLink=`detail-genres.html?id=${genero}`;

//.textcontent=funciona como innerHtml o innerText
    document.querySelector(".albumTitle").textContent = albumTitle;
    document.querySelector(".artistName").textContent = artistName;
    document.querySelector(".albumCover").setAttribute("src", albumCover);
    document.querySelector(".albumGenero").textContent =albumGenero ;
    document.querySelector(".albumDate").textContent=albumReleaseDate;
    document.querySelector(".detalles-detail-art").setAttribute("href", artistLink )
    document.querySelector(".detalles-detail-gen").setAttribute("href", genreLink )
    
    let trackList=""
    let albumSongs=document.querySelector(".albumSongs")
    for (let i = 0; i < album.tracks.data.length ; i++) {
        let track = album.tracks.data[i];
        trackList += `<li class="canciones" ><a class="cancionest" href="detail-canciones.html?id=${track.id}">${track.title}</a></li>`;
      }
      albumSongs.innerHTML += `<ul class="tracklistt" >${trackList}</ul>`

  })
  .catch(function(error) {
    console.log("error:" + error);
  });

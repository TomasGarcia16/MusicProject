let urlDetalles = new URLSearchParams(window.location.search);
let dataId = urlDetalles.get("id"); // querystring

let detailUrl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${dataId}`;

fetch(detailUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let artistName = data.name;
    let fotoArtista = data.picture_medium;
    document.querySelector(".artistName").textContent = artistName;
    document.querySelector(".artistFoto").setAttribute("src", fotoArtista);

    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${dataId}/top`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data)
        let htmlTrackList = "";
        let array = data.data;
        for (let i = 0; i < array.length; i++) {
          htmlTrackList += `<li class="canciones"><a class="cancionest" href="detail-album.html?id=${array[i].album.id}">${array[i].album.title}</a></li>`;
        }
        document.querySelector(".artistAlbums").innerHTML = htmlTrackList;
      })
      .catch(function(error) {
        console.log("error: " + error);
      });
  })
  .catch(function(error) {
    console.log("error: " + error);
  });
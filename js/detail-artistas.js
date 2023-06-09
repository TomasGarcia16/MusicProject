let urlDetalles = new URLSearchParams(window.location.search);
let dataId = urlDetalles.get("id"); //querystring

let detailUrl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${dataId}`;

fetch(detailUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data)
    let artistName = data.name;
    let fotoArtista = data.picture_medium;
//.textcontent=funciona como innerHtml o innerText
    document.querySelector(".artistName").textContent = artistName;
    document.querySelector(".artistFoto").setAttribute("src", fotoArtista);

})
.catch(function(error) {
  console.log("error:" + error);
});
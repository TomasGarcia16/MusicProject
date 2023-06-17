let string = location.search;
let data = new URLSearchParams(string);
let busqueda = data.get("buscador");
let endpointbusqueda = `https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${busqueda}`;

if (busqueda === "") {
    alert("Parece que no escribiste nada, inténtalo nuevamente escribiendo algo.");
} else if (busqueda.length < 3) {
    alert("Tu búsqueda debe contener al menos 3 caracteres.");
} else {
    fetch(endpointbusqueda)
        .then(function(response) {
            return response.json();
        })
        .then(function(datos) {
            console.log(datos);
            if (datos.data.length === 0) {
                let noresult = document.querySelector(".centered");
                noresult.innerHTML = "No se encontraron coincidencias con el término buscado";
                noresult.style.color = "red";
            } else {
                let resultados = document.querySelector(".resultados-busqueda");
                let busqul = "";
                for (let i = 0; i < datos.data.length; i++) {
                  busqul += `
                        <li class="resultadosdebusqueda">
                        <a href="detail-canciones.html?id=${datos.data[i].id}">  <h2 class="centered3">${datos.data[i].title}</h2></a>
                        <a href="detail-canciones.html?id=${datos.data[i].id}">  <img class="imgbusqueda" src="${datos.data[i].album.cover_medium}" alt=""/></a>
                            <a href="detail-artistas.html?id=${datos.data[i].artist.id}"><h2 class="centered3">Artist: ${datos.data[i].artist.name}</h2></a>
                            <a href="detail-album.html?id=${datos.data[i].album.id}"><h2 class="centered2">Album: ${datos.data[i].album.title}</h2></a>
                        </li>`;
                }
                resultados.innerHTML = busqul;
                let term = document.querySelector(".centered4");
                term.innerHTML += busqueda;
                term.style.color = "white";
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}
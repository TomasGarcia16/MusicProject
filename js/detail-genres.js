let genreDetail = document.querySelector('#genre-detail');
let queryStringObj = new URLSearchParams(window.location.search);
let id = queryStringObj.get('id');
let genreUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + id;
let artistsUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + id + '/artists';

fetch(genreUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        let genreName = document.querySelector('#genre-name');
        genreName.innerText = data.name;
    })
    .catch(function(error) {
        console.log(error);
    });

fetch(artistsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        let genreArtists = document.querySelector('.genre-artists');
        let artistsHTML = '';

        for (let i = 0; i < data.data.length; i++) {
            let artist = data.data[i];
            artistsHTML += `
                <li>
                    <a href="detail-artistas.html?id=${artist.id}">
                    <img src="${artist.picture_medium}" alt="${artist.name}">
                    <h2 class='h2-artist'>${artist.name}</h2>
                   
                    </a>
                </li>
            `;
        }

        genreArtists.innerHTML = artistsHTML;
    })
    .catch(function(error) {
        console.log(error);
    });









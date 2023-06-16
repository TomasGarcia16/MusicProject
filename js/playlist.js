function loadPlaylist() {
    let playlistSection = document.querySelector(".playlistSection");
    let playlist = document.querySelector(".playlist");
  

    playlist.innerHTML = "";
  
    
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let item = JSON.parse(localStorage.getItem(key));
  

      let listItem = document.createElement("li");
      listItem.textContent = item.title;
      let deleteButton = document.createElement("button");


      deleteButton.textContent = "Eliminar";
      deleteButton.addEventListener("click", function() {
        removeFromFavorites(item.id);
      });
  
   
      listItem.appendChild(deleteButton);

 
      playlist.appendChild(listItem);
    }
  
   
    if (localStorage.length > 0) {
      playlistSection.style.display = "block";
    } else {
      playlistSection.style.display = "none";
    }
  }
  

  loadPlaylist();
  function addToFavorites(item) {
   
    if (localStorage.getItem(item.id)) {
      console.log("El elemento ya está en favoritos.");
      return;
    }
  

    localStorage.setItem(item.id, JSON.stringify(item));
    console.log("Elemento agregado a favoritos.");
  
    loadPlaylist(); 
  }  

  function removeFromFavorites(itemId) {
    localStorage.removeItem(itemId);
    console.log("Elemento eliminado de favoritos.");
    loadPlaylist();
  }
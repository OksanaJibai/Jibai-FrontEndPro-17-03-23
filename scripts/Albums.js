class Album {

    #albumLink = 'https://jsonplaceholder.typicode.com/albums';
    albumList = document.querySelector('.albums-list');


    constructor() {
        this.setEvents();
        fetch(this.#albumLink)
            .then(promise => promise.json())
            .then(value =>{
                value.forEach(album =>{
                    this.albumList.append(this.renderAlbum(album));
                })
            })
            .catch(error => console.error(error));
    }

    renderAlbum({id, title}){

        const album = document.createElement('div');
        album.className = 'list-group-item';
        album.setAttribute('data-album-id', id);

        album.innerHTML = `<div class="card shadow-sm">
                            <div class="card-body">
                             <h5 class="card-title gallery--card-title">${title}</h5>
                             <a href ="#" class="btn btn-outline-secondary">Go to photos</a>
                            </div>
                          </div>
        `
        return album;
    }

    setEvents () {
        this.albumList.addEventListener('click', this.clickHandler);
    }

     clickHandler = event =>{
        event.stopPropagation();
        if(event.target.nodeName !== 'A') return;
        const currentAlbum = event.target.closest('div.list-group-item');
        const currentAlbumId = +currentAlbum.getAttribute('data-album-id');
        window.open(`photo.html?albumId=${currentAlbumId}`, '_blank');
    }
}
const albums = new Album();
// console.log(albums);
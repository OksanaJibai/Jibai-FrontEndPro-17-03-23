class Photos {
    #photoLink = 'https://jsonplaceholder.typicode.com/photos';
    photoWrapperEl = document.querySelector('.photo__content');

    constructor() {
        const query = window.location.search;
        const urlParam = new URLSearchParams(query);
        const albumID = +urlParam.get('albumId');
        fetch(this.#photoLink + '?albumId=' + albumID)
            .then(response => response.json())
            .then(value => {
                value.forEach(photo => this.photoWrapperEl.append(this.renderPhoto(photo)));
            })
            .catch(error => console.error(error));
    }

    renderPhoto(photo){
        const wrap = document.createElement('div');
        wrap.className = 'col-sm-4 mb-4';
        wrap.innerHTML = `<div class="card shadow-sm">
                            <div class="card-body">
                             <h5 class="card-title gallery--card-title">${photo.title}</h5>
                             <img src="${photo.thumbnailUrl}" alt="${photo.title}">
                            </div>
                          </div>`;
        return wrap;
    }

}
const photos = new Photos();
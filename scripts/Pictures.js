class Pictures {
    #photoLink = 'https://jsonplaceholder.typicode.com/photos?albumID=';
    pictureWrapperEl = document.querySelector('.pictures__content');

    async fetchPhoto(albumID){
        try {
            const response = await fetch( `${this.#photoLink}${albumID}`);
            const data = await response.json();
            return data
        }catch (e){
            console.error(e);
        }
    }

    renderPicture(data){
        const wrap = document.createElement('div');
        wrap.localName = 'list-group-item';

        data.forEach(picture =>{
            const pictureItem = document.createElement('a');
            pictureItem.className = 'list-group-item';
            pictureItem.href = picture.url;
            const img = document.createElement('img');
            img.src = picture.thumbnailUrl;
            img.alt = picture.title;
            pictureItem.prepend('img');
            wrap.appendChild(pictureItem);
        })
        return wrap;
    }

    async fillPictures(id){
        await this.fetchPhoto(id)
            .then(pictures => this.pictureWrapperEl.append(this.renderPicture(pictures)))
            .catch(error => console.error(error))
    }

}
const pictures = new Pictures();
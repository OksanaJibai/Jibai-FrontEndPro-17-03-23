class Album {

    #albumsLink = 'https://jsonplaceholder.typicode.com/albums';
    albumList = document.querySelector('.albums-list');


    constructor() {
        this.setEvents();
        this.fillAlbums()
    }
    async fetchAlbums(){
        try{
            const response = await fetch(this.#albumsLink);
            const data = await response.json();
            // console.log(data)
            return data;
        }catch (error){
            console.error(error);
        }
    }

    renderAlbum(data){

        const wrapper = document.createElement('div');
        wrapper.className = 'list-group-item';

        data.forEach(album => {
            const albumItem = document.createElement('a');
            albumItem.className = 'list-group-item list-group-item-action';
            albumItem.href = '/Pictures.html';
            albumItem.dataset.id = album.id;
            albumItem.textContent = album.title;
            wrapper.appendChild(albumItem);

        })
        return wrapper;
    }
    async fillAlbums(){
        await this.fetchAlbums()
            .then(albums => {
                this.albumList.append(this.renderAlbum(albums));
            })
            .catch(e => console.error(e));
    }


    setEvents () {
        this.albumList.addEventListener('click', this.clickHandler);
    }

    async clickHandler (event){
        if(event.target.nodeName === 'A'){
            try{
                await pictures.fillPictures(event.target.dataset.id);
            }catch (e){
                console.error(e);
            }
        }

    }
}
const albums = new Album();
// console.log(albums);
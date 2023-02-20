class CarteVideo {
    constructor(media) {
        // this._movie = movie
        this.media = media;  // xxxxxxxxxxxxxxxxx
        // console.log(this.media);
    }

    creationCarte() {
        console.log("media",this.media);
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('media');
        const movieCard = `
        <a href=photographe.html?id=${this.media.photographeID}&media=${this.media.id} >
            <div>
                <video class=imgMedia controls width="350">
                    <source src="images/Sample Photos/Mimi/Animals_Wild_Horses_in_the_mountains.mp4">
                </video>
            </div>
            <div class="infoMedia">
                <div class=titreMedia>${this.media.titre}</div>
                <div class="likeMedia">${this.media.like}</div>
            </div>
        </a>
        `;
        
        $wrapper.innerHTML = movieCard
        return $wrapper

    }
}
class CartePhoto {
    constructor(media) {
        // this._movie = movie
        this.media = media;  // xxxxxxxxxxxxxxxxx
        // console.log(this.media);
    }

    creationCarte() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('media');
        const movieCard = `
        <a href=photographe.html?id=${this.media.photographeID}&media=${this.media.id} >
            <div>
                <img class=imgMedia src='${this.media.image}'>
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
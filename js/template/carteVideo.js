class CarteVideo {
    constructor(media) {
        // this._movie = movie
        this.media = media;  // xxxxxxxxxxxxxxxxx
        // console.log(this.media);
    }

    creationCarte() {
        //console.log("media",this.media);
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('media');
        const movieCard = `
        <a href=photographe.html?id=${this.media.photographeID}&media=${this.media.id} >
            <div>
                <video class=imgMedia controls width="350">
                    <source src="${this.media.video}">
                </video>
            </div>
            <div class="infoMedia">
                <div class=titreMedia>${this.media.titre}</div>
                <div class="likeMedia"><span class=numberLike>${this.media.like}</span><i class="fa-sharp fa-solid fa-heart" aria-label="likes"></i></div>
            </div>
        </a>
        `;
        
        $wrapper.innerHTML = movieCard
        return $wrapper

    }
}
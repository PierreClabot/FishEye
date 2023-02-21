class CartePhotographe {
    constructor(photographe) {
        // this._movie = movie
        this.photographe = photographe;
    }

    creationCarte() {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('photographe')

        const movieCard = `
        <div class="photo">
            <a href="photographe.html?id=${this.photographe.id}">
                <img src="images/Sample Photos/Photographers ID Photos/${this.photographe.image}" alt="">
                <h2>${this.photographe.nom}</h2>
            </a>
        </div>
        <div class="information">
            <div class="localisation">${this.photographe.localisation}</div>
            <div class="slogan">${this.photographe.slogan}</div>
            <div class="tarif">${this.photographe.tarif}</div>
        </div>
                            `;
        
        $wrapper.innerHTML = movieCard


        return $wrapper
    }
}
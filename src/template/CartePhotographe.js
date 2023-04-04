class CartePhotographe {
    constructor(photographe) {
        // this._movie = movie
        this.photographe = photographe;
    }

    creationCarte() {
        const $wrapper = document.createElement("div");
        $wrapper.classList.add("photographe");

        const movieCard = `
            <div class="photo" role="Link + image" aria-label="${this.photographe.nom}">
                <a href="photographe.html?id=${this.photographe.id}">
                    <img src="./assets/images/Sample Photos/${this.photographe.image}" alt="portrait">
                    <h2>${this.photographe.nom}</h2>
                </a>
            </div>
            <div class="information" role="Text paragraph">
                <div class="localisation">${this.photographe.localisation}</div>
                <div class="slogan">${this.photographe.slogan}</div>
                <div class="tarif">${this.photographe.tarif}</div>
            </div>
                                `;

        $wrapper.innerHTML = movieCard;

        return $wrapper;
    }
}

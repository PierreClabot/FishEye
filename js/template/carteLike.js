class CarteLike {
    constructor(photographe,likes) {

        this.photographe = photographe;
        this.likes = likes;
    }

    creationCarte() {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('recap-photographe')
        console.log(this.photographe);
        const movieCard = `
            <div class=recap-photographe>
            <div class="recap-like">${this.likes} <i class="fa-sharp fa-solid fa-heart like"  aria-label="likes"></i></div>
            <div class="recap-tarif">${this.photographe.price}€ / jour</div>
            </div>`;
        
        document.body.innerHTML += movieCard

        return $wrapper
    }

}
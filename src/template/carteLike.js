class CarteLike {
    constructor(photographe, likes) {
        this.photographe = photographe;
        this.likes = likes;
        this.likesInteractif = 0;
    }

    creationCarte() {
        // carte compteur global
        const $wrapper = document.createElement("div");
        $wrapper.classList.add("recap-photographe");
        const movieCard = `
                <div class=recap-photographe>
                <div class="recap-like">${this.likes} <i class="fa-sharp fa-solid fa-heart like"  aria-label="likes"></i></div>
                <div class="recap-tarif">${this.photographe.price}€ / jour</div>
                </div>`;

        document.body.innerHTML += movieCard;

        return $wrapper;
    }

    likeMedia(evt) {
        if (evt === "like") { // on reçoit l'info like des cartes medias
            this.likesInteractif += 1;
            this.updateAffichage();
            return;
        }
        if (evt === "dislike") { // on reçoit l'info dislike des cartes medias
            this.likesInteractif -= 1;
            this.updateAffichage();
        }
    }

    updateAffichage() {
        document.querySelector(".recap-like").innerHTML = `${this.likes + this.likesInteractif}<i class="fa-sharp fa-solid fa-heart like"  aria-label="likes">`;
    }
}
export default CarteLike;
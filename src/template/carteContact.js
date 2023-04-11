import Modal from "../utilitaires/modal.js"

class CarteContact {
    constructor(photographe) {
        this.photographe = photographe;
        this.wrapper = document.querySelector(".carte-contact");
    }

    creationCarte() {
        // carte contact page photographe.html
        const $wrapper = document.createElement("div");
        $wrapper.classList.add("carte-contact");
        const contactCard = `
            <div>
                <h1 role="header">${this.photographe.name}</h1>
                <p>
                    <span class="localisation">${this.photographe.city}, ${this.photographe.country}</span>
                    <span class="slogan">${this.photographe.tagline}</span>
                </p>
            </div>
            <div>
                <div role="button" class="bouton" aria-label="Contact Me">
                    Contactez-moi
                </div>
            </div>
            <div>
                <img src="./assets/images/Sample Photos/${this.photographe.portrait}" alt="${this.photographe.name}">
            </div>
            `;

        this.wrapper.innerHTML = contactCard;

        setTimeout(() => {
            console.log(document.querySelector(".bouton"));
            document.querySelector(".bouton").addEventListener("click", () => { // ajout evenement ouverture modale au clic du btn,
                console.log("CREATE MODAL");
                const modal = new Modal(this.photographe);
                return modal;
            });
        }, 500);

    }
}
export default CarteContact;
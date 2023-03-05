class CarteContact {
    constructor(photographe) {
        // this._movie = movie
        this.photographe = photographe;  // xxxxxxxxxxxxxxxxx
        // console.log(this.media);
        this.wrapper = document.querySelector(".carte-contact");
    }

    creationCarte() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('carte-contact');
        const contactCard = `
        <div>
            <h1>${this.photographe.name}</h1>
            <p>
                <span class="localisation">${this.photographe.city}, ${this.photographe.country}</span>
                <span class="slogan">${this.photographe.tagline}</span>
            </p>
        </div>
        <div>
            <div class="bouton">
                Contactez-moi
            </div>
        </div>
        <div>
            <img src="images/Sample Photos/${this.photographe.portrait}" alt="">
        </div>
        `;
        
        this.wrapper.innerHTML = contactCard

        document.querySelector(".bouton").addEventListener("click",()=>{
            const modal = new Modal(this.photographe);
        })
        return $wrapper

    }
}
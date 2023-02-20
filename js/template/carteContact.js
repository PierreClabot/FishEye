class CarteContact {
    constructor(photographe) {
        // this._movie = movie
        this.photographe = photographe;  // xxxxxxxxxxxxxxxxx
        // console.log(this.media);
    }

    creationCarte() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('carte-contact');
        const contactCard = `
        <div>
            <h1>Mimi Keel</h1>
            <p>
                <span class="localisation">London, UK</span>
                <span class="slogan">Voir le beau quand le quotidien</span>
            </p>
        </div>
        <div>
            <div class="bouton">
                Contactez-moi
            </div>
        </div>
        <div>
            <img src="images/Sample Photos/Photographers ID Photos/MimiKeel.jpg" alt="">
        </div>
        `;
        
        $wrapper.innerHTML = contactCard
        return $wrapper

    }
}
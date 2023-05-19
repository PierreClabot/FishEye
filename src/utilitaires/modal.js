// export default
class Modal {
    constructor(photographe) {
        this.photographe = photographe;
        this.wrapper = document.querySelector(".conteneur-modal");
        this.creationModal();
        this.data = "";
        document.querySelector(".fermeture-modal").addEventListener("click", () => {
            this.closeModal();
        });
        document.querySelector(".submitForm").addEventListener("click", () => {
            this.getData();
        });

    }

    creationModal() {
        this.wrapper.style.display = "flex";
        // const modal = document.createElement("div");
        const modal = ` <div class="fenetre-modal" role="dialog" aria-label="Contact me ${this.photographe.name}">
                                <div role="button" class="fermeture-modal" arial-label="Close Contact form"><i class="fa-solid fa-xmark"></i></div>
                                <h1>Contactez-moi <span>${this.photographe.name}</span></h1>
                                <label for="prenom" >Prénom</label>
                                <input role="Text field" aria-label="First name" type="text" id="prenom" required>
                                <label for="nom" >Nom</label>
                                <input role="Text field" aria-label="Last name" type="text" id="nom" required>
                                <label for="email" >Email</label>
                                <input role="Text field" aria-label="Email" type="text" id="email" required>
                                <label for="message" >Votre message</label>
                                <textarea role="Text field" aria-label="Your message" type="text" id="message" required></textarea>
                                <button role="button" type="button"  class=submitForm aria-label="Send">Envoyer</button>
                            </div>`;
        this.wrapper.innerHTML = modal;


        const firstInput = document.querySelector('#prenom');
        const submitBtn = document.querySelector('.submitForm');
        submitBtn.addEventListener('keydown', (event) => {
            if (event.key === 'Tab' ) {
                event.preventDefault();
                firstInput.focus();
            }
        });

        return modal;
    }

    closeModal() {
        this.wrapper.innerHTML = "";
        this.wrapper.style.display = "none";
    }

    getData() {
        const saisieNom = document.querySelector("#nom").value;
        const saisiePrenom = document.querySelector("#prenom").value;
        const saisieEmail = document.querySelector("#email").value;
        const saisieMessage = document.querySelector("#message").value;

        if(saisieNom != "" && saisiePrenom != "" && saisieEmail != "" && saisieMessage != "")
        {
            const dataUserForm = {
                nom: saisieNom,
                prenom: saisiePrenom,
                email: saisieEmail,
                message: saisieMessage,
            };
            this.data = dataUserForm;
            console.log(dataUserForm);
            this.closeModal();
        }
        else{
            console.log("Veuillez vérifier vos champs");
        }
        
    }
}
export default Modal;
class Modal{
    constructor(photographe)
    {
        this.photographe = photographe;
        this.wrapper = document.querySelector(".conteneur-modal");
        this.creationModal();
        document.querySelector(".fermeture-modal").addEventListener("click",()=>{
            this.closeModal();
        })
        document.querySelector(".submitForm").addEventListener("click",()=>{
            this.getData();
        })
    }

    creationModal(){
        this.wrapper.style.display = "flex";
        // const modal = document.createElement("div");
        const modal = ` <div class="fenetre-modal" role="dialog" aria-label="Contact me ${this.photographe.name}">
                            <div role="button" class="fermeture-modal" arial-label="Close Contact form"><i class="fa-solid fa-xmark"></i></div>
                            <h1>Contactez-moi <span>${this.photographe.name}</span></h1>
                            <label for="prenom" >Prénom</label>
                            <input role="Text field" aria-label="First name" type="text" id="prenom">
                            <label for="nom" >Nom</label>
                            <input role="Text field" aria-label="Last name" type="text" id="nom">
                            <label for="email" >Email</label>
                            <input role="Text field" aria-label="Email" type="text" id="email">
                            <label for="message" >Votre message</label>
                            <input role="Text field" aria-label="Your message" type="text" id="message">
                            <input role="button" type="button"  class=submitForm value="Envoyer" aria-label="Send">
                        </div>`;
        this.wrapper.innerHTML = modal;
        return modal;
    }

    closeModal(){
        this.wrapper.innerHTML = "";
        this.wrapper.style.display = "none";
    }
    getData(){
        var saisieNom = document.querySelector("#nom").value;
        var saisiePrenom = document.querySelector("#prenom").value;
        var saisieEmail = document.querySelector("#email").value;
        var saisieMessage = document.querySelector("#message").value;

        let dataUserForm = {
            nom : saisieNom,
            prenom : saisiePrenom,
            email : saisieEmail,
            message : saisieMessage
        }
        console.log(dataUserForm);
    }
    verification(){
        // A faire
    }
}
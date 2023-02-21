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
        const modal = ` <div class="fenetre-modal">
                            <div class="fermeture-modal">X</div>
                            <h1>Contactez-moi <span>${this.photographe.name}</span></h1>
                            <label for="prenom" >Prénom</label>
                            <input type="text" id="prenom">
                            <label for="nom" >Nom</label>
                            <input type="text" id="nom">
                            <label for="email" >Email</label>
                            <input type="text" id="email">
                            <label for="message" >Votre message</label>
                            <input type="text" id="message">
                            <input type="button" class=submitForm value="Envoyer">
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
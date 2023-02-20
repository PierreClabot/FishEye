const btnContact = document.querySelector(".bouton");
const conteneurFormulaire = document.querySelector(".conteneur-modal");
const fermetureModal = document.querySelector(".fermeture-modal");
const btnSubmitForm = document.querySelector(".submitForm");

btnContact.addEventListener("click",()=>{
    conteneurFormulaire.style.display = "flex";
})

fermetureModal.addEventListener("click",()=>{
    conteneurFormulaire.style.display = "none";
})

btnSubmitForm.addEventListener("click",()=>{
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
})
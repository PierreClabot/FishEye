const btnContact = document.querySelector(".bouton");
const conteneurFormulaire = document.querySelector(".conteneur-modal");
const fermetureModal = document.querySelector(".fermeture-modal");

btnContact.addEventListener("click",()=>{
    conteneurFormulaire.style.display = "flex";
})

fermetureModal.addEventListener("click",()=>{
    conteneurFormulaire.style.display = "none";
})
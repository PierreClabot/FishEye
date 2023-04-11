import MediaApi from "../api/mediaApi.js"
import MediaFactory from "../factories/mediaFactory.js";

class CarteFiltre {
    constructor(photographe) {
        this.photographe = photographe;
        this.wrapper = document.querySelector(".carte-filter");
        this.mediaApi = new MediaApi("../data/data.json");
        this.wrapperMedia = document.querySelector(".media-wrapper");
    }

    creationCarte() {
        // carte filtre
        const contactCard = `
            <div class="container-menu" role="select menu" >
                <button class='btn-filter' role=”button” aria-expanded="false" aria-haspopup=”listbox” aria-controls="widget1">Popularité</button>
                <div class="menu">
                    <div class="sousMenu">Date</div>
                    <div class="sousMenu">Titre</div>
                </div>
            </div>
            `;

        this.wrapper.innerHTML = `<div class=libelleFilter role="input label">Trier par </div>${contactCard}`;

        setTimeout(() => {
            document.querySelector(".btn-filter").addEventListener("click", (e) => { // open/close menu
                let oldAriaExpanded = e.target.getAttribute("aria-expanded");
                oldAriaExpanded = (oldAriaExpanded === "true");
                e.target.setAttribute("aria-expanded", !oldAriaExpanded);
                const open = e.target.getAttribute("aria-expanded");
                const menu = document.querySelector(".menu");
                console.log(open);
                if (open == "true") { // Si déjà affiché on le cache
                    console.log("open");
                    menu.style.display = "block";
                    return;
                }// sinon on l'affiche
                menu.style.display = "none";
            });

            document.querySelectorAll(".sousMenu").forEach((item) => item.addEventListener("click", async (e) => { // update btn affichage
                const btn = document.querySelector(".btn-filter");
                const libelleBtn = btn.innerText;
                btn.innerHTML = e.target.innerText;
                e.target.innerHTML = libelleBtn;
                document.querySelector(".menu").style.display = "none";
                document.querySelector(".btn-filter").setAttribute("aria-expanded", false);
                if (btn.innerText == "Popularité") { // On clique sur le filtre Popularité,
                    const mediaFiltre = await this.mediaApi.filtrerParPopularite(this.photographe.id);// medias filtrés par popularité

                    document.querySelectorAll(".media").forEach((media) => { // supprimer les medias non filtrés
                        media.remove();
                    });

                    for (const media of mediaFiltre) { // on crée les médias filtrés,
                        new MediaFactory(media, "media");
                    }
                } else if (btn.innerText == "Date") { // On clique sur le filtre Date,
                    const mediaFiltre = await this.mediaApi.filtrerParDate(this.photographe.id);// medias filtrés par date

                    document.querySelectorAll(".media").forEach((media) => { // supprimer les medias non filtrés
                        media.remove();
                    });

                    for (const media of mediaFiltre) { // on crée les médias filtrés,
                        new MediaFactory(media, "media");
                    }
                } else if (btn.innerText == "Titre") { // On clique sur le filtre Titre,
                    console.log("Filtrer par titre");
                    const mediaFiltre = await this.mediaApi.filtrerParTitre(this.photographe.id);// medias filtrés par titre
                    console.log(mediaFiltre);

                    document.querySelectorAll(".media").forEach((media) => { // supprimer les medias non filtrés
                        media.remove();
                    });

                    for (const media of mediaFiltre) {
                        new MediaFactory(media, "media");
                    }
                }
            }));
        }, 500);
    }
}
export default CarteFiltre;
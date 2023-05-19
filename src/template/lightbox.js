import MediaApi from "../api/mediaApi.js";

class LightBox {
    constructor(media) {
        this.media = media;
        this.wrapper = document.querySelector(".popUp-media");
        this.wrapper.style.display = "flex";
        this.mediaApi = new MediaApi("../data/data.json");
        this.creationTemplate();
        this.onKeyUp = this.onKeyUp.bind(this);
        // document.addEventListener("keyup", (e) => { // on ajoute l'évènement pour l'accessibilité ;
        //     this.onKeyUp(e);
        // });
        document.addEventListener("keyup", this.onKeyUp);
        document.addEventListener("keyup", this.onKeyUp);
        document.addEventListener("keyup", this.onKeyUp);
    }

    creationTemplate() {
        let affichage;
        // console.log(this.media);
        if (this.media.image) {
            affichage = `<img src="${this.media.image}" alt="Lilac breasted roller">`;
        } else if (this.media.video) {
            affichage = `<video class=imgMedia controls width="350" alt="Lilac breasted roller">
                                <source src="${this.media.video}">
                            </video>`;
        }
        const TemplateMedia = `<div class=container-media role="dialog" aria-label="image closeup view">
            <div class="close" role="button" aria-label="Close dialog"><i class="fa-solid fa-xmark"></i></div>   
            <div class="media">
                <div class="chevron before" role="link" aria-label="Previous Image"><i class="fa-solid fa-chevron-left fa-2xl" style="color:#901C1C;" ></i></div>
                <div class="imgMedia">
                    ${affichage}
                    <div class="detailsMedia" role="text">
                        ${this.media.title}
                    </div>
                </div>
                <div class="chevron after" role="link" aria-label="Next Image" ><i class="fa-solid fa-chevron-right fa-2xl" style="color:#901C1C;" ></i></div>
            </div>
            </div>`;
        this.wrapper.innerHTML = TemplateMedia;
        document.querySelector(".close").addEventListener("click", () => {
            this.closePopUp();
        });
        const chevrons = document.querySelectorAll(".chevron");
        chevrons.forEach((chevron) => chevron.addEventListener("click", (e) => {
            let target = e.target.classList.value;
            if (target.search("chevron") > 0) { // on récupère le chevron pour avoir le sens,
                target = e.target.parentNode.classList.value;
            }

            if (target.search("after") > 0) { // clic chevron right
                console.log(this.media);
                this.mediaApi.changeMedia(this.media, 1);
            } else if (target.search("before") > 0) { // clic chevron left
                console.log(this.media);
                this.mediaApi.changeMedia(this.media, -1);
            }
            document.removeEventListener("keyup", this.onKeyUp);
        }));
    }

    onKeyUp(e) {
        console.log("e.key", e.key);
        if (e.key === "ArrowRight") { // After
            this.mediaApi.changeMedia(this.media, 1);// retourne lightbox
        } else if (e.key === "ArrowLeft") { // Before
            this.mediaApi.changeMedia(this.media, -1);
        } else if (e.key === "Escape") { // close
            this.closePopUp();
        }
        document.removeEventListener("keyup", this.onKeyUp);
    }

    closePopUp() {
        this.wrapper.style.display = "none";
    }
}
export default LightBox;

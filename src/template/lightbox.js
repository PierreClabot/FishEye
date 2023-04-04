//  import MediaApi from "../api/mediaApi";

class LightBox {
    constructor(media) {
        this.media = media;
        this.wrapper = document.querySelector(".popUp-media");
        this.wrapper.style.display = "flex";
        this.mediaApi = new MediaApi("../data/data.json");
        this.creationTemplate();
        this.cpt = 1;
        this.onKeyUp = this.onKeyUp.bind(this);
        // console.log(this.onKeyUp);
        // document.addEventListener("keyup", this.onKeyUp);
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
                <div class="chevron before" role="link" aria-label="Previous Image"><i class="fa-solid fa-chevron-left fa-2xl"></i></div>
                <div class="imgMedia">
                    ${affichage}
                    <div class="detailsMedia" role="text">
                        ${this.media.title}
                    </div>
                </div>
                <div class="chevron after" role="link" aria-label="Next Image" ><i class="fa-solid fa-chevron-right fa-2xl"></i></div>
            </div>
            </div>`;
        this.wrapper.innerHTML = TemplateMedia;
        document.querySelector(".close").addEventListener("click", () => {
            this.closePopUp();
        });
        const chevrons = document.querySelectorAll(".chevron");
        chevrons.forEach((chevron) => chevron.addEventListener("click", (e) => {
            let target = e.target.classList.value;
            if (target.search("chevron") > 0) {
                target = e.target.parentNode.classList.value;
            }

            if (target.search("after") > 0) { // clic chevron right
                console.log(this.media);
                this.mediaApi.changeMedia(this.media, 1);
            } else if (target.search("before") > 0) { // clic chevron left
                console.log(this.media);
                this.mediaApi.changeMedia(this.media, -1);
            }
        }));
        document.removeEventListener(
            "keyup",
            this.onKeyUp,
        );
        document.addEventListener("keyup", (e) => {
            this.onKeyUp(e);
        });
    }

    onKeyUp(e) {
        console.log("e.key", e.key);
        if (e.key === "ArrowRight") { // Next
            this.mediaApi.changeMedia(this.media, 1);
            //  document.removeEventListener("keyup", this.onKeyUp);
            // console.log(this.onKeyUp);
            this.cpt += 1;
        } else if (e.key === "ArrowLeft") {
            this.mediaApi.changeMedia(this.media, -1);
            // console.log(this.media);
        }
        // Rajouter bouton échap
    }

    closePopUp() {
        this.wrapper.style.display = "none";
    }
}
//  export default LightBox;
//  module.exports = { LightBox };

import LightBox from "../template/lightbox.js"
import MediaApi from "../api/mediaApi.js";

class CarteVideo {
    constructor(media) {
        this.media = media;
        this.like = false;
        this.observers = [];// fire event like
        this.mediaApi = new MediaApi("../data/data.json");
    }

    creationCarte() {
        // Création de la carte
        const $wrapper = document.createElement("div");
        $wrapper.classList.add("media");
        $wrapper.setAttribute("role", "Image link");
        $wrapper.setAttribute("aria-label", "Lilac breasted roller, closeup view");
        const movieCard = `
                <div id="media-${this.media.id}" tabindex="0">
                    <video class="imgMedia" controls width="350" alt="Lilac breasted roller, closeup view" tabindex="0">
                        <source src="${this.media.video}">
                    </video>
                </div>
                <div class="infoMedia" tabindex="0">
                    <div class="titreMedia" role="text">${this.media.title}</div>
                    <div class="likeMedia"><span class="numberLike">${this.media.like}</span><i class="fa-sharp fa-solid fa-heart like" id="like-${this.media.id}" aria-label="likes"></i></div>
                </div>

            `;

        $wrapper.innerHTML = movieCard;
        setTimeout(() => { // delay pour ajouter les évènements
            document.getElementById(`like-${this.media.id}`).addEventListener("click", (e) => {
                let { like } = this.media;// like = this.media.like

                const nodeParent = e.target.parentNode;

                if (this.like === false) { // Si le boolLike est à faux et qu'on clique.
                    like += 1;
                    this.like = true;
                    this.fire("like");// envoyer l'info "like" au compteur global
                } else { // On a déjà like et on reclique
                    like = this.media.like;
                    this.like = false;
                    this.fire("dislike"); // envoyer l'info "dislike" au compteur global
                }

                nodeParent.querySelector(".numberLike").innerHTML = like;
            });

            document.querySelector(`#media-${this.media.id}`).addEventListener("click", () => {
                new LightBox(this.media);// On crée la lightbox au clic du media
            });
            document.querySelector(`#media-${this.media.id}`).addEventListener("keyup",async (e)=>{
                console.log(e);
                
                if(e.code === "Space" || e.code ==="Enter") // Accessibilité lightbox et like au clavier
                {
                    let idMedia=e.target.parentNode.id;
                    idMedia = idMedia.replace("media-","") 
                    if(e.target.classList.value.search("containerImgMedia")>=0){ // Lorsqu'on est sur la div container de l'imgMedia
                        let media = await this.mediaApi.getMedia(idMedia)
                        new LightBox(media);
                    }
                    if(e.target.classList.value.search("infoMedia")>=0) // Div en dessous l'imgMedia (like)
                    {
                        let currentLike = this.media.like;
                        if(this.like === false){ // Pas de like de l'utilisateur, alors on like
                            this.fire("like");
                            this.like = true;
                            currentLike += 1;
                        }
                        else{ // on a déjà like, on l'enlève
                            this.fire("dislike");
                            this.like = false;
                            currentLike = this.media.like;
                        }
                        document.querySelector(`#media-${idMedia} .numberLike`).innerHTML = currentLike;
                    }
                }
            })
        }, 500);

        return $wrapper;
    }

    subscribe(obj) {
        this.observers.push(obj);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(
            (item) => {
                if (item !== fn) {
                    return item;
                }
            },
        );
    }

    fire(evt) { // envoyer l'event like au compteur global
        this.observers.forEach((item) => {
            item.likeMedia(evt);
        });
    }
}
export default CarteVideo;
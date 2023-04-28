import MediaApi from "../api/mediaApi.js"
import PhotographeApi from "../api/photographeApi.js"
import PagePhotographeFactory from "../factories/pagePhotographeFactory.js"
import PhotographeFactory from "../factories/photographeFactory.js"
import MediaFactory from "../factories/mediaFactory.js"
import CarteLike from "../template/carteLike.js"

import LightBox from "../template/lightbox.js"

class AppPhotographe {
    constructor() {
        this.$photographesWrapper = document.querySelector(".photographes-wrapper");
        this.$mediaWrapper = document.querySelector(".media-wrapper");

        this.photographesApi = new PhotographeApi("../data/data.json");
        this.mediaApi = new MediaApi("../data/data.json");
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    async main() {
        // On récupère l'idPhotographe dans l'url,
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const idPhotographe = urlParams.get("id");

        if (idPhotographe) {
            // on crée les composants de la page
            
            const photographeData = await this.photographesApi.getPhotographe(idPhotographe);

            new PagePhotographeFactory(photographeData);

            const likes = await this.mediaApi.getLikes(idPhotographe);

            const recapPhotographe = new CarteLike(photographeData, likes);// carte like global
            recapPhotographe.creationCarte();

            new PhotographeFactory(photographeData);
            // on affiche ses medias
            const mediaData = await this.mediaApi.getMedias(idPhotographe);
            mediaData.map((media) => {
                    const objMedia = new MediaFactory(media, "media");
                    // **************** ************
                    // document.querySelector(`media-${media.id}`).addEventListener(`keyup`,this.eventLike.bind(objMedia))
                    //document.addEventListener(`keyup`,this.eventLike.bind(objMedia))
                    //console.log(`media-${media.id}`)
                    return objMedia.subscribe(recapPhotographe);
                });

            //document.addEventListener("keyup",this.onKeyUp);
        }
    }

    async onKeyUp(e)
    {
        // console.log(e);
        if(e.code === "Space" || e.code === "Enter"){
            let idMedia=e.target.parentNode.id;
            idMedia = idMedia.replace("media-","")
            if(e.target.classList.value.search("containerImgMedia")>=0)
            { 
                let media = await this.mediaApi.getMedia(idMedia)
                new LightBox(media);
            }
            
        }
    }

    eventLike(e){
        e.stopImmediatePropagation();
        
    }
}

const appPhotographe = new AppPhotographe();
appPhotographe.main();

export default AppPhotographe;
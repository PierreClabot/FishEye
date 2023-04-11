// export default
import Api from "./api.js";
import LightBox from "../template/lightbox.js";

class MediaApi extends Api {
    constructor(url) {
        super(url);
        this.medias = "";
    }

    async getMedia(idMedia) {
        const res = await this.get()
            .then((result) => result.media) // récupérer uniquement les photographes
            .then((medias) => {
                for (const media of medias) {
                    if (media.id == idMedia) {
                        var dataMedia = this.cheminMedia(media); // Récupère media avec chemin exact
                    }
                }
                return dataMedia;
            });
        return res;
    }

    async filtrerParPopularite(idPhotographe) {
        const medias = await this.getMedias(idPhotographe);
        medias.sort((a, b) => {
            if (a.likes > b.likes) {
                return -1;
            }
            if (a.likes < b.likes) {
                return 1;
            }
            return 0;
        });

        return medias;
    }

    async filtrerParDate(idPhotographe) {
        const medias = await this.getMedias(idPhotographe);
        medias.sort((a, b) => {
            const date1 = this.versDateJS(a.date);
            const date2 = this.versDateJS(b.date);
            if (date1 > date2) {
                return -1;
            }
            if (date1 < date2) {
                return 1;
            }
            return 0;
        });

        return medias;
    }

    async filtrerParTitre(idPhotographe) {
        const medias = await this.getMedias(idPhotographe);
        medias.sort((a, b) => {
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
            return 0;
        });

        return medias;
    }

    versDateJS(date) {
        // date au format YYYYMMDD,la convertit en date js
        const dateSepare = date.split("-");
        return new Date(dateSepare[0], (parseInt(dateSepare[1], 10) - 1), dateSepare[2]);
    }

    cheminMedia(media) {
        const copyMedia = media;
        const chemin = "./assets/images/Sample Photos/";
        if (copyMedia.image) {
            copyMedia.image = chemin + copyMedia.image;
        } else if (copyMedia.video) {
            copyMedia.video = chemin + copyMedia.video;
        }
        return copyMedia;
    }

    async changeMedia(currentMedia, sens) {
        const idPhotographe = currentMedia.photographerId;
        const medias = await this.getMedias(idPhotographe);
        let cpt = 0;
        let indiceNextMedia;
        for (const media of medias) {
            if (media.id === currentMedia.id) {
                indiceNextMedia = cpt + sens; // sens prend la valeur 1 ou -1 selon le chevron cliqué
            }
            cpt += 1;
        }

        if (indiceNextMedia === medias.length) {
            indiceNextMedia = 0;
        }
        if (indiceNextMedia < 0) {
            indiceNextMedia = medias.length - 1;
        }

        const nextMedia = medias[indiceNextMedia];

        const lightbox = new LightBox(nextMedia);
        return lightbox;
    }

    async getMedias(idPhotographe) { // idPhotographe en paramatre
        const mediaPhotographe = this.get()
            .then((res) => {
                const mediaPhotographe = [];
                const chemin = "./assets/images/Sample Photos/";
                for (const media of res.media) {
                    if (media.photographerId == idPhotographe) {
                        if (media.image) {
                            media.image = chemin + media.image;
                        } else if (media.video) {
                            media.video = chemin + media.video;
                        }
                        mediaPhotographe.push(media);
                    }
                }
                return mediaPhotographe;
            });
        return mediaPhotographe;
    }

    async getLikes(idPhotographe) { // idPhotographe en paramatre
        const cptLikes = this.get()
            .then((res) => {
                let like = 0;
                for (const media of res.media) {
                    if (media.photographerId == idPhotographe) {
                        like += media.likes;
                    }
                }
                return like;
            });
        return cptLikes;
    }
}
//  MediaApi;
export default MediaApi;
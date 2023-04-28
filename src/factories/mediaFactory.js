import Media from "../modeles/media.js"
import CartePhoto from "../template/cartePhoto.js"
import CarteVideo from "../template/carteVideo.js"

class MediaFactory {
    constructor(data, type) {
        this.$mediaWrapper = document.querySelector(".media-wrapper");
        if (type === "media") { // type media -> photo ou video
            const media = new Media(data);
            let TemplateMedia;
            if (data.image) { // photo
                TemplateMedia = new CartePhoto(media);
                this.$mediaWrapper.appendChild(
                    TemplateMedia.creationCarte(), // créeation carte image (<img>)
                );
            } else if (data.video) { // video
                TemplateMedia = new CarteVideo(media);
                this.$mediaWrapper.appendChild(
                    TemplateMedia.creationCarte(), // créeation carte vidéo (<video></video>)
                );
            }
            return TemplateMedia;
        }

        throw "Format inconnu";
    }
}
export default MediaFactory;
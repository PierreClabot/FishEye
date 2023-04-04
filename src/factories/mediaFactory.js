class MediaFactory {
    constructor(data, type) {
        this.$mediaWrapper = document.querySelector(".media-wrapper");
        if (type === "media") {
            const media = new Media(data);
            let TemplateMedia;
            if (data.image) {
                TemplateMedia = new CartePhoto(media);
                this.$mediaWrapper.appendChild(
                    TemplateMedia.creationCarte(),
                );
            } else if (data.video) {
                TemplateMedia = new CarteVideo(media);
                this.$mediaWrapper.appendChild(
                    TemplateMedia.creationCarte(),
                );
            }

            return TemplateMedia;
        }

        throw "Format inconnu";
    }
}

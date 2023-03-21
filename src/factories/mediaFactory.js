class MediaFactory{
    constructor(data,type){

        this.$mediaWrapper = document.querySelector('.media-wrapper')
        console.log("MEDIA FACTORY")
        if(type === "media"){

            const media = new Media(data);
            var TemplateMedia ;
            if(data.image){
                TemplateMedia = new CartePhoto(media);
                this.$mediaWrapper.appendChild(
                    TemplateMedia.creationCarte()
                )

            }
            else if(data.video)
            {
                TemplateMedia = new CarteVideo(media);
                this.$mediaWrapper.appendChild(
                    TemplateMedia.creationCarte()
                )
            }
            
            return TemplateMedia;

        }
        else
        {
            throw "Format inconnu";
        }
    }
}
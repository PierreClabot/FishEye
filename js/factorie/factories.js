class PhotographeFactory{
    constructor(data,type){

        this.$mediaWrapper = document.querySelector('.media-wrapper')

        if(type === "photographe")
        {
            this.$photographesWrapper = document.querySelector('.photographes-wrapper')

            const photographe = new Photographe(data);
            const TemplatePhotographe = new CartePhotographe(photographe)
            if(this.$photographesWrapper)
            {
                this.$photographesWrapper.appendChild(
                    TemplatePhotographe.creationCarte()
                )
            }

            return new Photographe(data)
            
        }
        else if(type === "media"){

            const media = new Media(data);
            if(data.image){
                const TemplateMedia = new CartePhoto(media);
                this.$mediaWrapper.appendChild(
                    TemplateMedia.creationCarte()
                )

            }
            else if(data.video)
            {
                const TemplateMedia = new CarteVideo(media);
                this.$mediaWrapper.appendChild(
                    TemplateMedia.creationCarte()
                )
            }
            


            // return media
        }
        else
        {
            throw "Format inconnu";
        }
    }
}
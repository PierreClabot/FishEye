class PhotographeFactory{
    constructor(data,type){
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

            this.$mediaWrapper = document.querySelector('.media-wrapper')

            const media = new Media(data);
            const TemplateMedia = new CarteMedia(media)

            this.$mediaWrapper.appendChild(
                TemplateMedia.creationCarte()
            )
            return media
        }
        else
        {
            throw "Format inconnu";
        }
    }
}
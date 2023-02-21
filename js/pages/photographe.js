class AppPhotographe {
    constructor() {
        this.$photographesWrapper = document.querySelector('.photographes-wrapper')
        this.$mediaWrapper = document.querySelector('.media-wrapper');

        this.photographesApi = new PhotographeApi('./data/data.json')
        this.mediaApi = new MediaApi('./data/data.json');
    }

    async main() {
            const url = window.location.search;
            const urlParams = new URLSearchParams(url);
            const idPhotographe = urlParams.get("id");
            const idMedia = urlParams.get("media");

            if(idPhotographe)
            {
                const photographesData = await this.photographesApi.getPhotographes(idPhotographe) // récupère les photographes
                const photographes = photographesData
                    .map(photographe => new PhotographeFactory(photographe, 'photographe'))
                const photographeData = await this.photographesApi.getPhotographe(idPhotographe) // récupère les medias du photographe
                const TemplateContact = new CarteContact(photographeData);
                TemplateContact.creationCarte();
            }
            if(idMedia)
            {
                const media = await this.mediaApi.getMedia(idMedia);
                const TemplateMedia = new PopUpMedia(media);
                TemplateMedia.creationTemplate();
            }
    }
}

const appPhotographe = new AppPhotographe()
appPhotographe.main()
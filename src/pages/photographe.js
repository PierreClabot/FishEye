class AppPhotographe {
    constructor() {
        this.$photographesWrapper = document.querySelector(".photographes-wrapper");
        this.$mediaWrapper = document.querySelector(".media-wrapper");

        this.photographesApi = new PhotographeApi("../data/data.json");
        this.mediaApi = new MediaApi("../data/data.json");
    }

    async main() {
        // On récupère l'idPhotographe dans l'url,
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const idPhotographe = urlParams.get("id");

        if (idPhotographe) {
            // on crée les composants de la page
            const photographeData = await this.photographesApi.getPhotographe(idPhotographe);

            const pagePhotographe = new PagePhotographeFactory(photographeData);

            const likes = await this.mediaApi.getLikes(idPhotographe);

            const recapPhotographe = new CarteLike(photographeData, likes);// carte like global
            recapPhotographe.creationCarte();

            new PhotographeFactory(photographeData, "photographe");
            // on affiche ses medias
            const mediaData = await this.mediaApi.getMedias(idPhotographe);
            const medias = mediaData
                .map((media) => {
                    const objMedia = new MediaFactory(media, "media");
                    return objMedia.subscribe(recapPhotographe);
                });
        }
    }
}

const appPhotographe = new AppPhotographe();
appPhotographe.main();

export default AppPhotographe;
class AppPhotographe {
  constructor() {
    this.$photographesWrapper = document.querySelector('.photographes-wrapper');
    this.$mediaWrapper = document.querySelector('.media-wrapper');

    this.photographesApi = new PhotographeApi('../data/data.json');
    this.mediaApi = new MediaApi('../data/data.json');
  }

  async main() {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const idPhotographe = urlParams.get('id');
    const idMedia = urlParams.get('media');

    if (idPhotographe) {
      const photographeData = await this.photographesApi.getPhotographe(idPhotographe); // récupère les data du photographe

      const pagePhotographe = new PagePhotographeFactory(photographeData);

      const likes = await this.mediaApi.getLikes(idPhotographe);

      const recapPhotographe = new CarteLike(photographeData, likes);
      recapPhotographe.creationCarte();

      const photographesData = await this.photographesApi.getPhotographes(idPhotographe); // récupère les photographes
      const photographes = photographesData
        .map((photographe) => new PhotographeFactory(photographe, 'photographe'));

      const mediaData = await this.mediaApi.getMedias(idPhotographe); // récupère les medias du photographe
      const medias = mediaData
        .map((media) => {
          const objMedia = new MediaFactory(media, 'media');
          objMedia.subscribe(recapPhotographe);
        });
    }
    if (idMedia) {
      const media = await this.mediaApi.getMedia(idMedia);
      const TemplateMedia = new LightBox(media);
      TemplateMedia.creationTemplate();
    }
  }
}

const appPhotographe = new AppPhotographe();
appPhotographe.main();

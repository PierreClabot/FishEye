class Media {
    constructor(media) {
        this.id = media.id;
        this.photographerId = media.photographerId;
        this.title = media.title;
        if (media.image) {
            this.image = media.image;
        }
        if (media.video) {
            this.video = media.video;
        }
        this.like = media.likes;
        this.date = media.date;
        this.prix = media.price;
    }
}
export default Media;
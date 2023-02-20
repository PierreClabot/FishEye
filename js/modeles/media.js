class Media {

    constructor(media)
    {
        this.id = media.id;
        this.photographeID = media.photographerId;
        this.titre = media.title;
        if(media.image)
        {
            this.image = media.image;
        }
        if(media.video)
        {
            this.video = media.video;
        }
        
        this.like = media.likes;
        this.date = media.date;
        this.prix = media.price;
    }

    getPhotos(){

    }

    // ??
    // creationCarte(){
        
    // }
}
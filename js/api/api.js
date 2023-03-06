class Api{
    constructor(url){
        this.url = url;
    }

    async get(){
        return await fetch(this.url)
        .then(res=>res.json()) // transforme la requête en json
        //.then(res=>res.photographers) // récupère uniquement les photographes du fichier json
        .catch(err => console.log("Une erreur",err)) // Si y a une erreur
    }
}

class PhotographeApi extends Api{
    constructor(url)
    {
        super(url);
    }

    async getPhotographe(idPhotographe){

        return await this.get()
        .then(res=>res.photographers) // récupérer uniquement les photographes
        .then(photographes=>{
            for(const photographe of photographes)
            {
                if(photographe.id == idPhotographe){
                    var dataPhotographe = photographe;
                }
            }
            return dataPhotographe;
        })
        
    }


    async getPhotographes(){

        return await this.get()
        .then(res=>res.photographers);
        
    }
}

class MediaApi extends Api{
    constructor(url)
    {
        super(url);
        this.medias = "";
    }

    async getMedia(idMedia){

        return await this.get()
        .then(res=>res.media) // récupérer uniquement les photographes
        .then(medias=>{
            for(const media of medias)
            {
                if(media.id == idMedia){
                    var dataMedia = this.cheminMedia(media); // Récupère media avec chemin exact
                }
            }
            return dataMedia;
        })
        
    }
    cheminMedia(media){
        const copyMedia = media;
        let chemin = "./images/Sample Photos/";
        if(copyMedia.image)
        {
            copyMedia.image = chemin+copyMedia.image;
        }
        else if(copyMedia.video)
        {
            copyMedia.video = chemin+copyMedia.video;
        }
        return copyMedia;
    }
    async changeMedia(currentMedia,sens)
    {
        var idPhotographe = currentMedia.photographerId;
        
        var medias = await this.getMedias(idPhotographe)
        let cpt=0;
        for(const media of medias)
        {
            if(media.id == currentMedia.id)
            {

                var indiceNextMedia = cpt+sens; // sens prend la valeur 1 ou -1 selon le chevron cliqué
            }
            cpt++;
        }

        if(indiceNextMedia == medias.length)
        {
            indiceNextMedia = 0;
        }
        if(indiceNextMedia < 0)
        {
            indiceNextMedia = medias.length-1;
        }

        var nextMedia = medias[indiceNextMedia];
        var popUpMedia = new PopUpMedia(nextMedia);
    }
    async getMedias(idPhotographe){ // idPhotographe en paramatre
        const mediaPhotographe = this.get()
                                .then(res=>{
                                    var mediaPhotographe = [];
                                    let chemin = "./images/Sample Photos/";
                                    for(var media of res.media)
                                    {
                                        if(media.photographerId == idPhotographe)
                                        {
                                            if(media.image)
                                            {
                                                media.image = chemin+media.image;
                                            }
                                            else if(media.video)
                                            {
                                                media.video = chemin+media.video;
                                            }
                                            mediaPhotographe.push(media);
                                        }
                            
                                    }
                                    return mediaPhotographe;
                                });
        return mediaPhotographe;
    }

    async getLikes(idPhotographe){ // idPhotographe en paramatre
        const cptLikes = this.get()
                                .then(res=>{
                                    let like = 0;
                                    for(var media of res.media)
                                    {
                                        if(media.photographerId == idPhotographe)
                                        {
                                            like += media.likes;
                                        }
                            
                                    }
                                    return like;
                                });
        return cptLikes;
    }
}
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
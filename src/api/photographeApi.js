import Api from "./api.js";

class PhotographeApi extends Api {
    constructor(url)
    {
        super(url)
    }
    async getPhotographe(idPhotographe) {
        const result = await this.get()
            .then((res) => res.photographers) // récupérer uniquement le tableau de photographes
            .then((photographes) => {
                let dataPhotographe;
                for (const photographe of photographes) {
                    if (photographe.id == idPhotographe) {
                        dataPhotographe = photographe;// récupère le photographe avec le même id
                    }
                }

                return dataPhotographe;
            });
        return result;
    }

    async getPhotographes() {
        const result = await this.get()
            .then((res) => res.photographers);
        return result;
    }
}
export default  PhotographeApi ;

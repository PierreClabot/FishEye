class PhotographeApi extends Api {
    async getPhotographe(idPhotographe) {
        const result = await this.get()
            .then((res) => res.photographers) // récupérer uniquement les photographes
            .then((photographes) => {
                for (const photographe of photographes) {
                    if (photographe.id == idPhotographe) {
                        var dataPhotographe = photographe;
                    }
                }
                return dataPhotographe;
            });
        return result;
    }

    async getPhotographes() {
        return await this.get()
            .then((res) => res.photographers);
    }
}

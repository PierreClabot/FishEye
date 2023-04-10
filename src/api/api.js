//   export default  class Api
class Api {
    constructor(url) {
        this.url = url;
    }

    async get() {
        const res = await fetch(this.url)
            .then((result) => result.json()) // transforme la requête en json
            .catch((err) => console.log("Une erreur", err)); // Si y a une erreur
        return res;
    }
}
export default Api;

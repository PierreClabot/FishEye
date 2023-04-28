import PhotographeApi from "../api/photographeApi.js";
// import MediaApi from "../api/mediaApi.js";
import PhotographeFactory from "../factories/photographeFactory.js";

class App {
    constructor() {
        this.$photographesWrapper = document.querySelector(".photographes-wrapper");
        this.$mediaWrapper = document.querySelector(".media-wrapper");

        this.photographesApi = new PhotographeApi("../data/data.json");
        // this.mediaApi = new MediaApi("../data/data.json");
    }

    async main() {
        // Affichage de tous les photographes index.html
        const photographesData = await this.photographesApi.getPhotographes(); // api;
        photographesData.map(photographe=>{
            new PhotographeFactory(photographe, "photographe")
        })

    }
}

const app = new App();
app.main();

export default App;
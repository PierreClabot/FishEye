class App {
    constructor() {
        this.$photographesWrapper = document.querySelector(".photographes-wrapper");
        this.$mediaWrapper = document.querySelector(".media-wrapper");

        this.photographesApi = new PhotographeApi("../data/data.json");
        this.mediaApi = new MediaApi("../data/data.json");
    }

    async main() {
        const photographesData = await this.photographesApi.getPhotographes(); // api
        const photographes = photographesData
            .map((photographe) => new PhotographeFactory(photographe, "photographe"));
    }
}

const app = new App();
app.main();

// class App {
//     constructor() {
//         this.$photographesWrapper = document.querySelector('.photographes-wrapper')
//         this.$mediaWrapper = document.querySelector('.media-wrapper');

//         this.photographesApi = new PhotographeApi('../data/data.json')
//         this.mediaApi = new MediaApi('../data/data.json');
//     }

//     async main() {
        

        
//             const photographesData = await this.photographesApi.getPhotographes() // récupère les photographes
//             const photographes = photographesData
//                 .map(photographe => new PhotographeFactory(photographe, 'photographe'))
    
//             const url = window.location.search;
//             const urlParams = new URLSearchParams(url);
//             const idPhotographe = urlParams.get("id");
//             if(idPhotographe)
//             {

//             }
        
//     }
// }

// const app = new App()
// app.main()
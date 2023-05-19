import Photographe from "../modeles/photographe.js";
import CartePhotographe from "../template/CartePhotographe.js";

class PhotographeFactory {
    constructor(data) {
        // type à supprimer
        this.$mediaWrapper = document.querySelector(".media-wrapper");

            this.$photographesWrapper = document.querySelector(".photographes-wrapper");

            const photographe = new Photographe(data);
            const TemplatePhotographe = new CartePhotographe(photographe);
            if (this.$photographesWrapper) {
                this.$photographesWrapper.appendChild(
                    TemplatePhotographe.creationCarte(),
                );
            }
            console.log(data);
            return new Photographe(data);

    }
}
export default PhotographeFactory;
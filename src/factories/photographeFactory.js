class PhotographeFactory {
    constructor(data, type) {
        // type à supprimer
        this.$mediaWrapper = document.querySelector(".media-wrapper");

        if (type === "photographe") {
            this.$photographesWrapper = document.querySelector(".photographes-wrapper");

            const photographe = new Photographe(data);
            const TemplatePhotographe = new CartePhotographe(photographe);
            if (this.$photographesWrapper) {
                this.$photographesWrapper.appendChild(
                    TemplatePhotographe.creationCarte(),
                );
            }
            
            return new Photographe(data);
        }
        throw "Format inconnu";
    }
}
export default PhotographeFactory;
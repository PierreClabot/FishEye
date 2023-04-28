import CarteContact from "../template/carteContact.js";
import CarteFiltre from "../template/carteFiltre.js"

class PagePhotographeFactory {
    constructor(dataPhotographe) {
        this.photographe = dataPhotographe;

        const TemplateContact = new CarteContact(dataPhotographe);// carte contact photographe
        TemplateContact.creationCarte();
        const TemplateFilter = new CarteFiltre(dataPhotographe);// composant filtre
        TemplateFilter.creationCarte();
    }
}
export default PagePhotographeFactory;
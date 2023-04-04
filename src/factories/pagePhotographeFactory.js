class PagePhotographeFactory {
    constructor(dataPhotographe) {
        this.photographe = dataPhotographe;

        const TemplateContact = new CarteContact(dataPhotographe);
        TemplateContact.creationCarte();

        const TemplateFilter = new CarteFiltre(dataPhotographe);
        TemplateFilter.creationCarte();
    }
}

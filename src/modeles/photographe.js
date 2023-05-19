class Photographe {
    constructor(photographe) {
        this.id = photographe.id;
        this.image = photographe.portrait;
        this.nom = photographe.name;
        this.localisation = `${photographe.city} ${photographe.country}`;
        this.slogan = `${photographe.tagline}`;
        this.tarif = `${photographe.price}€/jour`;
    }
}
export default Photographe;
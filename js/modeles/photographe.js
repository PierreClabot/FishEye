class Photographe {
    // constructor(nom,localisation,slogan,tarif)
    // {
    //     this.nom = nom;
    //     this.localisation = localisation;
    //     this.slogan = slogan;
    //     this.tarif = tarif;
    // }
    constructor(photographe)
    {
        this.id = photographe.id;
        this.image = photographe.portrait;
        this.nom = photographe.name;
        this.localisation = `${photographe.city} ${photographe.country}`;
        this.slogan = `${photographe.tagline}`;
        this.tarif = `${photographe.price}€/jour`;
    }


    // ??
    // creationCarte(){
        
    // }
}
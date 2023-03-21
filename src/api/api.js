class Api {
  constructor(url) {
    this.url = url;
  }

  async get() {
    return await fetch(this.url)
      .then((res) => res.json()) // transforme la requête en json
      .catch((err) => console.log('Une erreur', err)); // Si y a une erreur
  }
}

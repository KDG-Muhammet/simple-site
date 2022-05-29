window.addEventListener("load", init)

let producten = [];
class Product {

    constructor(naam, prijs , image , alt) {
        this.naam = naam;
        this.prijs = prijs;
        this.image = image;
        this.alt = alt;

    }

    maakHtml() {
        return `<h4>${this.naam}</h4>` + `<p>${this.prijs}</p>` + `<img src=${this.image}  alt=${this.alt}/>` ;

    }

}
class Categorie {
    constructor(naam) {
        this.naam = naam;
        this.producten = [];
    }

    add(product) {
        this.producten.push(product);
    }

    maakHtml() {
        let html = `<h3>${this.naam}</h3>`;
        for (let prob of this.producten) {
            html += prob.maakHtml();
        }
        return html;
    }
}

function showCategorieen() {
    let body = document.querySelector('body');
    for (let categorie of categorieen) {
        body.innerHTML += categorie.maakHtml();
    }
}

let categorieen = [];

function init() {
    let categorie = "";
    for (let i = 0; i < producten_data.length; i++) {
        let product = new Product(producten_data[i][1], producten_data[i][6],producten_data[i][3],producten_data[i][5]);
        if (categorie !== producten_data[i][0]) {
            categorie = producten_data[i][0];
            categorieen.push(new Categorie(categorie));
        }
        categorieen[categorieen.length - 1].add(product);
    }

    console.log(categorieen);
    showCategorieen();
}




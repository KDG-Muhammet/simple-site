window.addEventListener("load", init)

let producten = [];
class Product {

    constructor(naam, prijs , image , alt , C) {
        this.naam = naam;
        this.prijs = prijs;
        this.image = image;
        this.alt = alt;
        this.C = C;
    }

    maakHtml() {
        return  `<section class="${this.C}" >  <img src=${this.image}  alt="${this.alt}"> <h4>${this.naam}</h4>  <p>${this.prijs}</p> </section> `  ;

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
        let html = `<section class="row">` + `<h3>${this.naam}</h3>`;
        for (let prob of this.producten) {
            html += prob.maakHtml();
        }
        return html;
    }
}


function showCategorieen() {
    let body = document.querySelector('body');
    body.setAttribute("class", "grid")

    let main = document.createElement("main")
    main.setAttribute("class", "panel grid-main");

    let producten = document.createElement("section");
    producten.setAttribute("class", "producten");
    let h2 =document.createElement("h2")
    h2.setAttribute("class","verborgen")
    let h2titel = document.createTextNode("Overzicht")

    // voor de filter te maken
    let filter = document.createElement("section");
    filter.setAttribute("id", "filter");
    let h3 =document.createElement("h3")
    let h3titel = document.createTextNode("filter")

    let Type = document.createElement("section");
    let h4Type =document.createElement("h4")
    h4Type.setAttribute("class", "filterType");
    let typeTitel = document.createTextNode("type")

    let Grootte = document.createElement("section");
    let h4grootte =document.createElement("h4")
    h4grootte.setAttribute("class", "filtergrootte");
    let grootteTitel = document.createTextNode("grootte")

    let Lichten = document.createElement("section");
    let h4Lichten =document.createElement("h4")
    h4Lichten.setAttribute("class", "filterLichten");
    let lichtenTitel = document.createTextNode("Lichten")

    body.appendChild(main);
    main.appendChild(producten);
    producten.appendChild(h2)
    h2.appendChild(h2titel)

    producten.appendChild(filter)
    filter.appendChild(h3)
    h3.appendChild(h3titel)

    filter.appendChild(Type)
    Type.appendChild(h4Type)
    h4Type.appendChild(typeTitel)

    filter.appendChild(Grootte)
    Grootte.appendChild(h4grootte)
    h4grootte.appendChild(grootteTitel)

    filter.appendChild(Lichten)
    Lichten.appendChild(h4Lichten)
    h4Lichten.appendChild(lichtenTitel)


    for (let categorie of categorieen) {
        producten.innerHTML +=  categorie.maakHtml();
    }

}

let categorieen = [];

function init() {
    let categorie = "";
    for (let i = 0; i < producten_data.length; i++) {
        let product = new Product(producten_data[i][1], producten_data[i][6],producten_data[i][3],producten_data[i][5],producten_data[i][2]);
        if (categorie !== producten_data[i][0]) {
            categorie = producten_data[i][0];
            categorieen.push(new Categorie(categorie));
        }
        categorieen[categorieen.length - 1].add(product);
    }

    console.log(categorieen);
    showCategorieen();

}



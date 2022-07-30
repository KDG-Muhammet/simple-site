window.addEventListener("load", init)

let reversed = true;
let producten = [];

class Product {

    constructor(naam, prijs, image, alt, C, link) {
        this.naam = naam;
        this.prijs = prijs;
        this.image = image;
        this.alt = alt;
        this.C = C;
        this.link = link;
    }

    maakHtml() {

        if (this.link === "") {
            return `<section class="${this.C}">  <img src=${this.image}  alt="${this.alt}"> <h4>${this.naam}</h4>  <p>${this.prijs}</p> </section> `;
        }

        return `<section class="${this.C}"> <a href="${this.link}"> <img src="${this.image}"  alt="${this.alt}"></a> <h4>${this.naam}</h4>  <p>${this.prijs}</p> </section> `;
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
    let h2 = document.createElement("h2")
    h2.setAttribute("class", "verborgen")
    let h2titel = document.createTextNode("Overzicht")

    // voor de filter te maken
    let filter = document.createElement("section");
    filter.setAttribute("id", "filter");
    let h3 = document.createElement("h3")
    let h3titel = document.createTextNode("filter")

    // voor filter type
    let Type = document.createElement("section");
    let h4Type = document.createElement("h4")
    h4Type.setAttribute("class", "filterType");
    let typeTitel = document.createTextNode("type")

    //labels van de filter type
    let ergonomic = document.createElement("label")
    ergonomic.setAttribute("for", "ergonomic")
    ergonomic.setAttribute("class", "ergonomicLabel")
    let ergonomicLabel = document.createTextNode("ergonomic")

    let opvouwbaar = document.createElement("label")
    opvouwbaar.setAttribute("for", "opvouwbaar")
    opvouwbaar.setAttribute("class", "opvouwbaarLabel")
    let opvouwbaarLabel = document.createTextNode("opvouwbaar")

    let normaal = document.createElement("label")
    normaal.setAttribute("for", "normaal")
    normaal.setAttribute("class", "normaalLabel")
    let normaalLabel = document.createTextNode("normaal")

    let resetType = document.createElement("label")
    resetType.setAttribute("for", "resetType")
    resetType.setAttribute("class", "resetTypeLabel")
    let resetTypeLabel = document.createTextNode("reset type")

    //voor fiter grootte
    let Grootte = document.createElement("section");
    let h4grootte = document.createElement("h4")
    h4grootte.setAttribute("class", "filtergrootte");
    let grootteTitel = document.createTextNode("grootte")

    //labels van de filter grootte
    let compact = document.createElement("label")
    compact.setAttribute("for", "compact")
    compact.setAttribute("class", "compactLabel")
    compact.style.marginRight = "4.8px";
    let compactLabel = document.createTextNode("compact")

    let FullSize = document.createElement("label")
    FullSize.setAttribute("for", "FullSize")
    FullSize.setAttribute("class", "fullSizeLabel")
    FullSize.style.marginRight = "4.8px";
    let FullSizeLabel = document.createTextNode("full size")

    let resetGrootte = document.createElement("label")
    resetGrootte.setAttribute("for", "resetGrootte")
    resetGrootte.setAttribute("class", "resetGrootteLabel")
    resetGrootte.style.marginRight = "4.8px";
    let resetGrootteLabel = document.createTextNode("reset grootte")

    //voor filter lichten
    let Lichten = document.createElement("section");
    let h4Lichten = document.createElement("h4")
    h4Lichten.setAttribute("class", "filterLichten");
    let lichtenTitel = document.createTextNode("Lichten")

    //labels van de filter lichten

    let RBG = document.createElement("label")
    RBG.setAttribute("for", "RBG")
    RBG.setAttribute("class", "RBGlabel")
    let RBGLabel = document.createTextNode("RBG")

    let blauwe = document.createElement("label")
    blauwe.setAttribute("for", "blauwe")
    blauwe.setAttribute("class", "blauweLabel")
    let blauweLabel = document.createTextNode("blauwe")

    let groene = document.createElement("label")
    groene.setAttribute("for", "groene")
    groene.setAttribute("class", "groeneLabel")
    let groeneLabel = document.createTextNode("groene")

    let rode = document.createElement("label")
    rode.setAttribute("for", "rode")
    rode.setAttribute("class", "rodeLabel")
    let rodeLabel = document.createTextNode("rode")

    let geenLichten = document.createElement("label")
    geenLichten.setAttribute("for", "geenLichten")
    geenLichten.setAttribute("class", "geenLichtenLabel")
    let geenLichtenLabel = document.createTextNode("geenLichten")

    let resetLichten = document.createElement("label")
    resetLichten.setAttribute("for", "resetLichten")
    resetLichten.setAttribute("class", "resetLichtenLabel")
    let resetLichtenLabel = document.createTextNode("reset lichten")

    // alle inputs van filter

    let ergonomicInput = document.createElement("input")
    ergonomicInput.setAttribute("type", "radio")
    ergonomicInput.setAttribute("id", "ergonomic")
    ergonomicInput.setAttribute("name", "type")
    ergonomicInput.setAttribute("value", "ergonomic")
    ergonomicInput.setAttribute("class", "ergonomic")

    let opvouwbaarInput = document.createElement("input")
    opvouwbaarInput.setAttribute("type", "radio")
    opvouwbaarInput.setAttribute("id", "opvouwbaar")
    opvouwbaarInput.setAttribute("name", "type")
    opvouwbaarInput.setAttribute("value", "opvouwbaar")
    opvouwbaarInput.setAttribute("class", "opvouwbaar")

    let normaalInput = document.createElement("input")
    normaalInput.setAttribute("type", "radio")
    normaalInput.setAttribute("id", "normaal")
    normaalInput.setAttribute("name", "type")
    normaalInput.setAttribute("value", "normaal")
    normaalInput.setAttribute("class", "normaal")

    let compactInput = document.createElement("input")
    compactInput.setAttribute("type", "radio")
    compactInput.setAttribute("id", "compact")
    compactInput.setAttribute("name", "grootte")
    compactInput.setAttribute("value", "compact")
    compactInput.setAttribute("class", "compact")

    let FullSizeInput = document.createElement("input")
    FullSizeInput.setAttribute("type", "radio")
    FullSizeInput.setAttribute("id", "FullSize")
    FullSizeInput.setAttribute("name", "grootte")
    FullSizeInput.setAttribute("value", "full size")
    FullSizeInput.setAttribute("class", "fullSize")

    let RBGInput = document.createElement("input")
    RBGInput.setAttribute("type", "radio")
    RBGInput.setAttribute("id", "RBG")
    RBGInput.setAttribute("name", "Lichten")
    RBGInput.setAttribute("value", "RBG")
    RBGInput.setAttribute("class", "RBG")

    let blauweInput = document.createElement("input")
    blauweInput.setAttribute("type", "radio")
    blauweInput.setAttribute("id", "blauwe")
    blauweInput.setAttribute("name", "Lichten")
    blauweInput.setAttribute("value", "blauwe")
    blauweInput.setAttribute("class", "blauwe")

    let groeneInput = document.createElement("input")
    groeneInput.setAttribute("type", "radio")
    groeneInput.setAttribute("id", "groene")
    groeneInput.setAttribute("name", "Lichten")
    groeneInput.setAttribute("value", "groene")
    groeneInput.setAttribute("class", "groene")

    let rodeInput = document.createElement("input")
    rodeInput.setAttribute("type", "radio")
    rodeInput.setAttribute("id", "rode")
    rodeInput.setAttribute("name", "Lichten")
    rodeInput.setAttribute("value", "rode")
    rodeInput.setAttribute("class", "rode")

    let geenLichtenInput = document.createElement("input")
    geenLichtenInput.setAttribute("type", "radio")
    geenLichtenInput.setAttribute("id", "geenLichten")
    geenLichtenInput.setAttribute("name", "Lichten")
    geenLichtenInput.setAttribute("value", "geen lichten")
    geenLichtenInput.setAttribute("class", "geenLichten")

    let resetTypeInput = document.createElement("input")
    resetTypeInput.setAttribute("type", "radio")
    resetTypeInput.setAttribute("id", "resetType")
    resetTypeInput.setAttribute("name", "type")
    resetTypeInput.setAttribute("value", "resetType")
    resetTypeInput.setAttribute("class", "resetType")
    resetTypeInput.setAttribute("checked", "")

    let resetGrootteInput = document.createElement("input")
    resetGrootteInput.setAttribute("type", "radio")
    resetGrootteInput.setAttribute("id", "resetGrootte")
    resetGrootteInput.setAttribute("name", "grootte")
    resetGrootteInput.setAttribute("value", "resetGrootte")
    resetGrootteInput.setAttribute("class", "resetGrootte")
    resetGrootteInput.setAttribute("checked", "")

    let resetLichtenInput = document.createElement("input")
    resetLichtenInput.setAttribute("type", "radio")
    resetLichtenInput.setAttribute("id", "resetLichten")
    resetLichtenInput.setAttribute("name", "Lichten")
    resetLichtenInput.setAttribute("value", "resetLichten")
    resetLichtenInput.setAttribute("class", "resetLichten")
    resetLichtenInput.setAttribute("checked", "")

    let reverse_label = document.createElement('button');
    let reverse_text = document.createTextNode("reverse");

    let Knop = document.createElement('a');
    Knop.setAttribute("id","Dynamische")
    Knop.setAttribute('href', "Producten.html");
    let statische_label = document.createTextNode("Statische pagina");

    body.appendChild(main);
    main.appendChild(producten);
    producten.appendChild(h2)
    h2.appendChild(h2titel)

    // alle inputs van filter
    producten.appendChild(ergonomicInput)
    producten.appendChild(opvouwbaarInput)
    producten.appendChild(normaalInput)
    producten.appendChild(compactInput)
    producten.appendChild(FullSizeInput)
    producten.appendChild(RBGInput)
    producten.appendChild(blauweInput)
    producten.appendChild(groeneInput)
    producten.appendChild(rodeInput)
    producten.appendChild(geenLichtenInput)
    producten.appendChild(resetTypeInput)
    producten.appendChild(resetGrootteInput)
    producten.appendChild(resetLichtenInput)

    // voor de filter te maken
    main.appendChild(reverse_label);
    reverse_label.appendChild(reverse_text);
    reverse_label.addEventListener("click", reverse);

    producten.appendChild(Knop);
    Knop.appendChild(statische_label);

    producten.appendChild(filter)
    filter.appendChild(h3)
    h3.appendChild(h3titel)


    // voor filter type
    filter.appendChild(Type)
    Type.appendChild(h4Type)
    h4Type.appendChild(typeTitel)

    //labels van de filter type
    Type.appendChild(ergonomic)
    ergonomic.appendChild(ergonomicLabel)
    Type.appendChild(opvouwbaar)
    opvouwbaar.appendChild(opvouwbaarLabel)
    Type.appendChild(normaal)
    normaal.appendChild(normaalLabel)
    Type.appendChild(resetType)
    resetType.appendChild(resetTypeLabel)

    //voor filter grootte
    filter.appendChild(Grootte)
    Grootte.appendChild(h4grootte)
    h4grootte.appendChild(grootteTitel)

    //labels van de filter grootte
    Grootte.appendChild(compact)
    compact.appendChild(compactLabel)
    Grootte.appendChild(FullSize)
    FullSize.appendChild(FullSizeLabel)
    Grootte.appendChild(resetGrootte)
    resetGrootte.appendChild(resetGrootteLabel)

    //voor filter lichten
    filter.appendChild(Lichten)
    Lichten.appendChild(h4Lichten)
    h4Lichten.appendChild(lichtenTitel)

    //labels van de filter lichten
    Lichten.appendChild(RBG)
    RBG.appendChild(RBGLabel)
    Lichten.appendChild(blauwe)
    blauwe.appendChild(blauweLabel)
    Lichten.appendChild(groene)
    groene.appendChild(groeneLabel)
    Lichten.appendChild(rode)
    rode.appendChild(rodeLabel)
    Lichten.appendChild(geenLichten)
    geenLichten.appendChild(geenLichtenLabel)
    Lichten.appendChild(resetLichten)
    resetLichten.appendChild(resetLichtenLabel)


    for (let categorie of categorieen) {
        producten.innerHTML += categorie.maakHtml();
    }

}

let categorieen = [];

function init() {

    if (reversed === false) {

        let j;
        let categorie = "";
        for (let i = 0; i < producten_data.length; i++) {
            j = (producten_data.length - 1) - i
            let product = new Product(producten_data[j][1], producten_data[j][6], producten_data[j][3], producten_data[j][5], producten_data[j][2], producten_data[j][4]);
            if (categorie !== producten_data[j][0]) {
                categorie = producten_data[j][0];
                categorieen.push(new Categorie(categorie));
            }
            categorieen[categorieen.length - 1].add(product);
        }
        console.log(categorieen);
        showCategorieen();
    } else {

        let categorie = "";
        for (let i = 0; i < producten_data.length; i++) {
            let product = new Product(producten_data[i][1], producten_data[i][6], producten_data[i][3], producten_data[i][5], producten_data[i][2], producten_data[i][4]);
            if (categorie !== producten_data[i][0]) {
                categorie = producten_data[i][0];
                categorieen.push(new Categorie(categorie));
            }
            categorieen[categorieen.length - 1].add(product);
        }
        console.log(categorieen);
        showCategorieen();
    }
}

function reverse() {
    if (reversed === false){
        reversed = true;

        let body = document.getElementsByClassName('grid')[0];
        let main = document.getElementsByClassName('panel grid-main')[0];
        body.removeChild(main);

        for (let i = 0; i < producten_data.length; i++){
            categorieen.shift()
        }

            init();

    }else if (reversed === true){
        reversed = false;

        let body = document.getElementsByClassName('grid')[0];
        let main = document.getElementsByClassName('panel grid-main')[0];
        body.removeChild(main);

        for (let i = 0; i < producten_data.length; i++){
            categorieen.shift()
        }
        init();

    }
}

function createBtn() {
    let main = document.getElementsByClassName("panel grid-main")
    let Knop = document.createElement('a');
    Knop.setAttribute('href', "Producten.html");
    let statische_label = document.createTextNode("Statische pagina");
    main.appendChild(Knop);
    Knop.appendChild(statische_label);

}

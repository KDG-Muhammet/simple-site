addEventListener("load", init);

function init(){
    let naam = document.querySelector("#ingevuldeNaam")
    let email = document.querySelector("#ingevuldeEmail")
    let telefoon = document.querySelector("#ingevuldeTelefoon")
    let land = document.querySelector("#ingevuldeLand")
    let leveringsadres = document.querySelector("#ingevuldeLeveringsadres")
    let datum = document.querySelector("#ingevuldeDatum")
    let afhalen = document.querySelector("#afhalenAangeduid")
    let product = document.querySelector("#gekozenProduct")
    let personaliering = document.querySelector("#personalisering")
    let kleur = document.querySelector("#gekozenKleur")
    let layout = document.querySelector("#keyboardLayout")

    personaliering.innerHTML = getParam("personaliering");
    naam.innerHTML = getParam("naam");
    email.innerHTML = getParam("email");
    telefoon.innerHTML = getParam("telefoon");
    land.innerHTML = getParam("Land")
    leveringsadres.innerHTML = getParam("leveringsadres");
    datum.innerHTML = getParam("Leveringsdatum");
    afhalen.innerHTML = getParam("Afhalen");
    product.innerHTML = getParam("eigenProduct");
    personaliering.innerHTML = getParam("personalisering")
    kleur.innerHTML = getParam("kleur");
    layout.innerHTML = getParam("layout");

}
function getParam(text){
    let queryString = decodeURIComponent(window.location.search.slice(1)); // (0) = '?'
    let params = queryString.split("&"); // scheidingschar x=y paartjes
    let value = "";
    for (let i = 0; i < params.length; i++) {
        let parts = params[i].split("="); // [0] bevat x  [1] bevat y
        if (parts[0] === text) {  //  doorloop de x'en tot gevonden...
            value = parts[1];
            break;
        }
    }
    return value.replace(/\+/g, " ");  // plussen naar spaties
}



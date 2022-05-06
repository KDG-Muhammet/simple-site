addEventListener("load", init);
function init() {
    let naamVeld = document.querySelector("#naam");
    let form = document.querySelector("#form");
    naamVeld.addEventListener("keyup", validateNaam);
    form.addEventListener("submit", validateForm);
}
function validateNaam() {
    let inhoud = document.querySelector("#naam").value;
    let feedback = document.querySelector("#naamfout");
    if (inhoud.length < 2) {
        feedback.innerHTML = "De naam moet minstens 2 tekens lang zijn!";
        return false;
    } else {
        feedback.innerHTML = "";
    }
    return true;
}
function validateForm(event) {
    if (!validateNaam()) {
        event.preventDefault();
    }
}

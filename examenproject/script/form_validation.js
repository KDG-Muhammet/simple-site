addEventListener("load", init);

function init() {
    let naamVeld = document.querySelector("#naamID");
    let form = document.querySelector("#form");
    let emailVeld = document.querySelector("#emailID")

    naamVeld.style.backgroundColor = "yellow";
    emailVeld.style.backgroundColor = "orange";

    emailVeld.addEventListener("keyup" , validatieEmail)
    naamVeld.addEventListener("change", validatieNaam);
    form.addEventListener("submit", validateForm1);
    form.addEventListener("submit", validateForm2);

}
function validatieNaam() {
    let inhoud = document.querySelector("#naamID").value;
    let feedback = document.querySelector("#naamfout");
    if (inhoud.length < 5) {
        feedback.innerHTML = "De naam moet minstens 5 tekens lang zijn!";
        return false;
    } else {
        feedback.innerHTML = "";
    }
    return true;
}

function validateForm1(event) {
    let feedback = document.querySelector("#verzendenfout");
    if (!validatieNaam()) {
        event.preventDefault();
        feedback.innerHTML = "Niet alle velden zijn correct ingevuld";
    }
}
function validateForm2(event) {
    let feedback = document.querySelector("#verzendenfout");
    if (!validatieEmail()) {
        event.preventDefault();
        feedback.innerHTML = "Niet alle velden zijn correct ingevuld";
    }
}

function validatieEmail() {
    let inhoud = document.querySelector("#emailID").value;
    let feedback = document.querySelector("#emailfout");
    const regex = new RegExp("^([a-zA-Z1-9]+\\.[a-zA-Z1-9]+)*@(student.)?kdg.be$");
    if (regex.exec(inhoud) == null) {
        feedback.innerHTML = "Je ingevoerde e-mail behoort niet tot het KdG domein";
        return false;
    } else {
        feedback.innerHTML = "";
    }
    return true;
}



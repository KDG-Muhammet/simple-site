addEventListener("load", init);

function init() {
    let naamVeld = document.querySelector("#naamID");
    let form = document.querySelector("#form");
    let emailVeld = document.querySelector("#emailID")

    naamVeld.style.backgroundColor = "yellow";
    emailVeld.style.backgroundColor = "orange";

    emailVeld.addEventListener("click" , validatieEmail)
    naamVeld.addEventListener("click", validateNaam);
    form.addEventListener("submit", validateForm);
}
function validateNaam() {
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

function validateForm(event) {
    let feedback = document.querySelector("#verzendenfout");
    if (!validateNaam() || !validatieEmail()) {
        event.preventDefault();
        feedback.innerHTML = "Niet alle velden zijn correct ingevuld";
    }
}

function validatieEmail() {
    let inhoud = document.querySelector("#emailID").value;
    let feedback = document.querySelector("#emailfout");
    const regex = new RegExp("[a-zA-Z0-9]+\.+[a-zA-Z0-9]+@(student.)?kdg.be");
    if (regex.exec(inhoud) == null) {
        feedback.innerHTML = "Je ingevoerde e-mail behoort niet tot het KdG domein";
        return false;
    } else {
        feedback.innerHTML = "";
    }
    return true;
}


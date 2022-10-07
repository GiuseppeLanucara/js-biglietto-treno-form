const firstNameInput = document.getElementById("nome");

const lastNameInput = document.getElementById("cognome");

const kmInput = parseInt (document.getElementById("km"));

const etaInput = (document.getElementById("eta"));

const button = document.getElementById("submit");

console.log(firstNameInput, lastNameInput,kmInput,etaInput,button, typeof(firstNameInput, lastNameInput,kmInput,etaInput,button));

const bigliettoBase = 0.21;
console.log(bigliettoBase, typeof(bigliettoBase));

const bigliettoKm = (bigliettoBase * km);
console.log(bigliettoKm, typeof (bigliettoKm));

let bigliettoScontato = bigliettoKm 
if (eta <= 18 ) {
    bigliettoScontato = bigliettoKm * 20 / 100; 
} else if (eta >65) {
    bigliettoScontato = bigliettoKm * 40 / 100;
    }
    console.log(bigliettoScontato, typeof(bigliettoScontato));

    button.addEventListener("click", function () {
        // Prendo il valore dell'input
        const firstName = FirsNameInput.value;
        console.log(firstName);
        const lastName = lastNameInput.value;
        console.log(lastName);
        const km = kmInput.value;
        console.log(km);
        const eta = etaInput.value;
        console.log(eta)});

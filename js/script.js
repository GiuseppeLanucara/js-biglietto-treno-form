const firstName = document.getElementById("nome");

const lastName = document.getElementById("cognome");

const km = parseInt (document.getElementById("km"));

const eta = parseInt (document.getElementById("eta"));

const button = document.getElementById("submit");

console.log(firstName, lastName,km,eta,button, typeof(firstName, lastName,km,eta,button));

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
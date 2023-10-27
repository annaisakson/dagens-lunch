const mittFormulär = document.getElementById("mittFormulär");
const lunch = document.getElementById("lunch");
const lunchText = document.getElementById("lunchText");
const pris = document.getElementById("pris");
const lunchPris = document.getElementById("lunchPris");

mittFormulär.addEventListener('submit', printLunch);

function printLunch(event){
    event.preventDefault();

    const lunchValue = lunch.value;
    lunchText.textContent = lunchValue;

    const prisValue = pris.value;
    lunchPris.textContent = prisValue + "kr";

    
}
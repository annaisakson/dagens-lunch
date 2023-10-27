const mittFormulär = document.querySelector("form");
const lunch = document.getElementById("lunch");
const lunchText = document.getElementById("lunchText");

mittFormulär.addEventListener('submit', printLunch);

function printLunch(event){
    event.preventDefault();

    const lunchValue = lunch.value;
    
    lunchText.textContent = lunchValue;
}
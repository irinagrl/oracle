//consts
const button = document.getElementById('button');
const oracleText = document.querySelector(".text");

//functions
function oracleEventHandler(event) {
    event.preventDefault();
    oracleText.value = '';
    return createOracle(oracle);
}

let createOracle = function(oracle) {
    oracleText.textContent = oracle[Math.floor(Math.random() * oracle.length)];
}

//listeners
button.addEventListener('click', oracleEventHandler);
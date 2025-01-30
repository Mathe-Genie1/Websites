function calculateGross(){
    let net = Number(document.getElementById("net").value);
    let gross = net * 1.19;
    gross = Math.floor(gross * 100.0)/100.0;
    document.getElementById("gross").innerHTML = gross;
}

function onLoaded(){
    document.getElementById("calculate").addEventListener("click", calculateGross);
}

window.addEventListener("load", onLoaded);
function calculateDurchmesser() {
    let umfang = document.getElementById('umfang').value;
    let versprochenerDurchmesser = document.getElementById('versprochenerDurchmesser').value;
    const pi = Math.PI;
    let durchmesser = umfang / pi;
    durchmesser = Math.round(durchmesser)

    if (durchmesser < versprochenerDurchmesser) {
        feedback = `Versprochen wurden <strong>${versprochenerDurchmesser}</strong> cm,
        erhalten habe ich nur <strong>${durchmesser}</strong>. Dies ist ein Betrug!`;
    } else {
        feedback = `Die Bestellung passt schonmal. Danke!`;
    }
    document.getElementById("output").innerHTML = feedback;
}

function onPageLoaded(){
    document.getElementById("calculate-btn").addEventListener("click", calculateDurchmesser);
}

window.addEventListener("load", onPageLoaded);
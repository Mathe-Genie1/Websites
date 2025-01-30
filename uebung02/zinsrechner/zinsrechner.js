function calculateCapital(){
    let capital = Number(document.getElementById("capital").value);
    let percentage = Number(document.getElementById("percentage").value) / 100.0;
    let years = Number(document.getElementById("years").value);


    for(let i=0; i<years; i++){
        capital += capital * percentage;
    }
    capital = Math.round(capital*100) / 100;
    feedback = `Sie haben dann ein Kapital von <strong>${capital}</strong> Euro`
    document.getElementById("output").innerHTML= feedback;
}

function onPageLoaded(){
    document.getElementById("Zinsen-btn").addEventListener("click", calculateCapital);
}

window.addEventListener("load", onPageLoaded)
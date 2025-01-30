function suche() {
    let text = document.getElementById("textarea").value;
    let suchbegriff = document.getElementById("suchfeld").value;
    let funde = [];

    let woerter = text.split(" ");
    let frequency = 0; 

    for (let i = 0; i < woerter.length; i++) {
        if (woerter[i].includes(suchbegriff)) {
            funde.push(woerter[i]);
            frequency++; 
        }
    }

    let feedback = "Gesuchte Zeichenfolge: " + suchbegriff + "<br>";
    feedback += "Funde: " + funde.join(", ") + "<br>";
    feedback += "Häufigkeit: " + frequency;
    document.getElementById("feedback").innerHTML = feedback;
}

function onPageLoaded(){
    document.getElementById("suchenButton").addEventListener("click", suche)
}

window.addEventListener("click", onPageLoaded);
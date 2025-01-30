function calculateTime() {
    let capital = Number(document.getElementById("capital").value);
    let percentage = Number(document.getElementById("percentage").value) / 100.0;
    let target = Number(document.getElementById("targetCapital").value);
    let years = 0;

    while (capital < target) {
        capital += capital * percentage;
        years++;
    }
    feedback = `Sie müssen <strong>${years}</strong> Jahre lang darauf warten`;
    document.getElementById('output').innerHTML = feedback;
}

function onPageLoaded() {
    document.getElementById("Warten-btn").addEventListener("click", calculateTime);
}

window.addEventListener("load", onPageLoaded);
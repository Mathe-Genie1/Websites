function drawPyramid() {
    let height = Number(document.getElementById("height").value);
    let output = "";

    if (height > 0) {
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < height - 1 - i; j++) {
                output += "&nbsp;";
            }
            for (let j = 0; j <= i; j++) {
                output += "*&nbsp;";
            }
            output += "<br>";
        }
    } else if (height < 0) {
        for (let i = 1; i <= -height; i++) { 
            for (let j = 0; j < i - 1; j++) { 
                output += "&nbsp;";
            }
            for (let j = 0; j < -height - i + 1; j++) { 
                output += "*&nbsp;";
            }
            output += "<br>";
        }
    }
    output += "<br>";
    document.getElementById("pyramid").innerHTML = output;
}

function onPageLoaded() {
    document.getElementById("draw-btn").addEventListener("click", drawPyramid);
}

window.addEventListener("load", onPageLoaded);
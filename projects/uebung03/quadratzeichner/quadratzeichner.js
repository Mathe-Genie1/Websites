function drawSquare(){
    let height = Number(document.getElementById("height").value);
    let output = "";

    if(height < 0){
        output = "Bitte nur positive Zahlen.";
    } else {
        for (let i = 0; i < height; i++){
            for (let j = 0; j < height; j++){
                output += "*&nbsp;";
            }
            output += "<br>";
        }
    }

    output += "<br>";
    document.getElementById("square").innerHTML = output;
}

function onPageLoaded(){
    document.getElementById("square-btn").addEventListener("click", drawSquare);
}

window.addEventListener("click", onPageLoaded);
function invertString() {
    let input = document.getElementById("inputString").value;
    let output = document.getElementById("output");
    
    let invertedString = "";
    for (let i = input.length - 1; i >= 0; i--) {
        invertedString += input[i];
    }
    
    let feedback = ` <strong>${input}</strong> umgeschrieben lautet <strong>${invertedString}</strong> `;
    document.getElementById("output").innerHTML = feedback;
}

function onPageLoaded(){
    document.getElementById("invert-btn").addEventListener("click", invertString)
}
    window.addEventListener("click", onPageLoaded); 
function checkYear(){
    let year = Number(document.getElementById("year").value);
    let feedback = "Kein Schaltjahr";

    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        feedback = "Schaltjahr";}
    document.getElementById("Feedback").innerHTML = feedback;
}


function onPageLoaded(){
    document.getElementById("sbmt-btn").addEventListener("click", checkYear);
}

window.addEventListener("load", onPageLoaded)
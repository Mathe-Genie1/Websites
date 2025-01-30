
function checkAge(){
    let age = Number(document.getElementById("age").value);
    let output = "";
    if(age > 99){
        output = "Du hast ein ganzes Jahrhundert geschafft, weiter so!";
    } else if(age > 65){
        output = "Hey, Boomer!";
    } else if(age > 40){
        output = "Du bist ein Millennial! Wie läuft das Leben bei dir?";
    } else if(age > 18){
        output = "Du bist volljährig (Wenn auch noch lange nicht erwachsen!)";
    } else if (age > 13){
        output="Du bist ein Teenager!"
    } else if(age > 0){
        output="Du bist ein (Klein-)Kind"
    } else {
        output = "Du bist noch in Planung!"
    }

    document.getElementById("output").innerHTML = output;
}

function onPageLoaded(){
    document.getElementById("sbmt-btn").addEventListener("click", checkAge);
}

window.addEventListener("load", onPageLoaded)
function checkPalindrom(){
    let input = document.getElementById("pal").value;

    input = input.replaceAll(' ','');
    input = input.toLowerCase();

    let wordLength = input.length;
    let isPalindrome = true;
    for(let i = 0; i < wordLength; i++){
        if(input.charAt(i) != input.charAt(wordLength-1-i)){
            isPalindrome = false;
        }
    }
    let feedback = "Die Eingabe ist kein Palindrom!";
    if(isPalindrome){
        feedback = "Die Eingabe ist ein Palindrom :)";
    }
    document.getElementById("output").innerHTML = feedback;
}

function onPageLoaded(){
    document.getElementById("sbmt-btn").addEventListener("click", checkPalindrom);
}

window.addEventListener("click", onPageLoaded);
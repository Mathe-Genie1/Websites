function greet() {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let gender = document.getElementById('gender').value;
    let age = document.getElementById('age').value;
    let birth = document.getElementById('born').value;

    let output;

        if(gender == "m"){
            output = `Lieber ${name} ${surname}! Ich freue mich, dass du vor ${age} Jahren in ${birth} geboren bist. =)`;
         } else if(gender == "w"){
            output = `Liebe ${name} ${surname}! Ich freue mich, dass du vor ${age} Jahren in ${birth} geboren bist. =)`;
         } else {
            output = `Liebes ${name} ${surname}! Ich freue mich, dass du vor ${age} Jahren in ${birth} geboren bist. =)`;
        }
    
    document.getElementById('output').innerHTML = output;
    };

function onPageloaded(){
    document.getElementById('greetings-btn').addEventListener('click', greet);
}

    window.addEventListener('load', onPageloaded); 

   
    

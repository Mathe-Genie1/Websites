let myAuthors = ["Tad", "Wolfgang", "Bernhard", "Johannes", "Gerhard"]
console.log(myAuthors[0]);
console.log(myAuthors[1]);
console.log(myAuthors[2]);
console.log(myAuthors[3]);

function author(){
    document.getElementById("authors").innerHTML = myAuthors[2];
}

function averageCalc(){
const average = document.getElementById('grades');
let grades = [1.0, 1.3, 2.0, 1.3, 2.7, 3.0, 1.7, 2.3, 2.0, 1.7];
let grade = 0;

for (let i=0; i<grades.length; i++){
    grade += grades[i]
}
grade = Math.round((grade / grades.length)*100) /100;
document.getElementById("average").innerHTML = grade;
}

let myNumbers = [1,2,3,4,5,6,7,8,9];
console.log(myNumbers);

function alternate(){
for (let i = myNumbers.length; i >= 0; i--){
    if(i % 2 != 0) {
        myNumbers.splice(i,1);
    }
}
document.getElementById("numbers").innerHTML = myNumbers;
}

function onPageLoaded(){
    author();
    averageCalc();
    alternate();
}

window.addEventListener("load", onPageLoaded);
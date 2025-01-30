function sayHello(){
        let name = "Najib";
        let age = 18;
        let born = "Reutlingen";
        let output = `Hi! I am ${name}. I am ${age} years old and from ${born}`;
        document.getElementById("output").innerHTML = output;
        }
        window.addEventListener("load", sayHello);
function calculate() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Math.sqrt(a**2 + b**2);
    c = Math.round(100.0*c)/100;

    document.getElementById('c').innerHTML = c;
}
function onPageloaded(){
    document.getElementById('calculate-btn').addEventListener('click', calculate);
}
window.addEventListener('load', onPageloaded);
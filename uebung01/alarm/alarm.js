function checkAlert(){
    let smokeSensor = document.getElementById("smoke-sensor").checked;
    let lightSensor = document.getElementById("light-sensor").checked;
    let light = document.getElementById("light").checked;

    let alarm = smokeSensor || (lightSensor && !light);

    if(alarm){
        document.getElementById("output").innerHTML = "Alarm!";
        document.getElementById("feedback").src = "sirene.png";
        audioPlayer.play();
    } else {
        document.getElementById("output").innerHTML = "Alles ruhig!";
        document.getElementById("feedback").src = "sirene-off.png";
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }
}

function onPageloaded(){
    document.getElementById("check-btn").addEventListener("click",checkAlert);
    audioPlayer = new Audio("fire-alarm.mp3");
}

window.addEventListener("load",onPageloaded);
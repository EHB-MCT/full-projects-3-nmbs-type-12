// Link to the code:
// https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
// Countdown timer that starts from 5 minutes



function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5, // Change the left side to specify the timer
        // var fiveMinutes = 60 * 0.16, 
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

// Attributen laten weergeven op het veld

let iconStoom = document.getElementById("iconStoom");

function placePlayField() {
    if (iconStoom == true) {

    }
}


// Leftmenu treinen toevoegen en weergeven + Aantal treinen gevonden (nummer)

function showTrein() {

    let count = 0;
    /*if(attribuut == attribuut1 && attribuut == attribuut13 && attribuut == attribuut9){
        document.getElementById("trein1").style.cssText = "display:flex; width: 100%;";
        document.getElementById("bottom1").style.display = "none";
        document.getElementById("counttrain").innerHTML = count++;
    }*/
   
    document.getElementById("counttrain").innerHTML = count++;
    document.getElementById("trein1").style.cssText = "display:flex; width: 100%;";
    document.getElementById("trein2").style.cssText = "display:flex; width: 100%;";
    document.getElementById("trein3").style.cssText = "display:flex; width: 100%;";
    document.getElementById("trein4").style.cssText = "display:flex; width: 100%;";
    document.getElementById("trein5").style.cssText = "display:flex; width: 100%;";
    document.getElementById("trein6").style.cssText = "display:flex; width: 100%;";
    document.getElementById("trein7").style.cssText = "display:flex; width: 100%;";
    document.getElementById("trein8").style.cssText = "display:flex; width: 100%;";
    document.getElementById("trein9").style.cssText = "display:flex; width: 100%;";
    document.getElementById("trein10").style.cssText = "display:flex; width: 100%;";

    document.getElementById("bottom1").style.display = "none";
    document.getElementById("bottom2").style.display = "none";
    document.getElementById("bottom3").style.display = "none";
    document.getElementById("bottom4").style.display = "none";
    document.getElementById("bottom5").style.display = "none";
    document.getElementById("bottom6").style.display = "none";
    document.getElementById("bottom7").style.display = "none";
    document.getElementById("bottom8").style.display = "none";
    document.getElementById("bottom9").style.display = "none";
    document.getElementById("bottom10").style.display = "none";
}

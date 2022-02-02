// Link to the code
// https://www.youtube.com/watch?v=FwLMz7jMRac
// Start screen for the game

function startGame() {
    start();
}

function toggleScreen(id, toggle) {
    let element = document.getElementById(id);
    let display = (toggle) ? "block" : "none" ;
    element.style.display = display;
}

function start() {
    this.toggleScreen('start-screen', false);
    this.toggleScreen('canvas', true);
}

// Link to the code:
// https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
// Countdown timer that starts from 5 minutes

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = "";
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
// Link to code
// https://stackoverflow.com/questions/25151339/how-to-display-images-from-a-javascript-array-object-starting-with-the-first-im

var Attributes = [
    "media/icons/blauw.png",
    "media/icons/grijsgeel.png",
    "media/icons/groen.png",
    "media/icons/blawugeel.png",
    "media/icons/stoom.png",
    "media/icons/metaal.png",
    "media/icons/koning.png",
    "media/icons/geit.png",
    "media/icons/diesel.png",
    "media/icons/motor.png",
    "media/icons/ridder.png",
    "media/icons/alstom.png",
    "media/icons/elektriciteit.png",
    "media/icons/stoomtrein.png",
    "media/icons/personeel.png",
    "media/icons/zeetrein.png",
    ""
];

var counter = 1;

var CombinedTrains = [
    "media/images/MicrosoftTeams-image.png"
]

var Train = Attribute1, Attribute2, Attribute3;

function placeOnField() {
    countdown();

    ClearAll();

    placeOnField1();
    placeOnField2();
    placeOnField3();
}

// All of the paint bucket icons
function placeOnField1() {
    // if (document.getElementById("playField1").innerHTML == null) {
    //     playField1.removeChild(playField1.childNodes[0]);
    //     document.getElementById("playField1").appendChild(img);
    // } 
    // else if (document.getElementById("playField2").innerHTML == null) {
    //     playField1.removeChild(playField1.childNodes[0]);
    //     document.getElementById("playField2").appendChild(img);
    // }

    btnIconBlauw.onclick = function() {
        // playField1.removeChild(playField1.childNodes[0]);
        var imageIndex = 0;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
    }

    btnIconGrijsGeel.onclick = function() {
        var imageIndex = 1;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
    }

    btnIconGroen.onclick = function() {
        var imageIndex = 2;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
    }

    btnIconBlauwGeel.onclick = function() {
        var imageIndex = 3;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
    }
}

// All of the available icons in the top row
function placeOnField2() {
    btnIconStoom.onclick = function() {
        var imageIndex = 4;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
    }

    btnIconMetaal.onclick = function() {
        var imageIndex = 5;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
    }

    btnIconKoning.onclick = function() {
        var imageIndex = 6;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
    }

    btnIconGeit.onclick = function() {
        var imageIndex = 7;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
    }

    btnIconDiesel.onclick = function() {
        var imageIndex = 8;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
    }

    btnIconMotorwagen.onclick = function() {
        var imageIndex = 9;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
    }
}

// All of the available icons in the bottom row
function placeOnField3() {
    btnIconRidder.onclick = function() {
        var imageIndex = 10;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
    }

    btnIconAlstom.onclick = function() {
        var imageIndex = 11;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
    }

    btnIconElektriciteit.onclick = function() {
        var imageIndex = 12;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
    }

    btnIconGestroomlijnd.onclick = function() {
        var imageIndex = 13;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++; 
    }

    btnIconPasEnGoed.onclick = function() {
        var imageIndex = 14;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
    }

    btnIconZeetrein.onclick = function() {
        var imageIndex = 15;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
    }
}

// Mix the different attributes with each other to get a train.
function MixAttributes() {
    // if (Attributes[0] && Attributes[4] && Attributes[10]) {
    //     playField2.removeChild(playField2.childNodes[0]);
    //     var imageIndex = 0;
    //     var img = document.createElement("img");
    //     img.src = CombinedTrains[imageIndex];
    //     document.getElementById("playField2").appendChild(img); 
    // } 
    // else if (Attributes[0] && Attributes[5] && Attributes[11]) {
    //     playField2.removeChild(playField2.childNodes[0]);
    //     var imageIndex = 15;
    //     var img = document.createElement("img");
    //     img.src = Attributes[imageIndex];
    //     document.getElementById("playField2").appendChild(img); 
    // }
}

// //Clear play field 1.
// function ClearPlayfield1() {
//     
// }

// //Clear play field 2.
// function ClearPlayfield2() {
//     
// }

// //Clear play field 3.
// function ClearPlayfield3() {
//    
// }

//Clear the whole table.
function ClearAll() {
    document.getElementById("playField1").innerHTML = "";
    document.getElementById("playField2").innerHTML = ""; 
    document.getElementById("playField3").innerHTML = ""; 
    counter = 1;
}


//Usefull links
// Arrays of images => https://www.youtube.com/watch?v=KI9Svonh8I0



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

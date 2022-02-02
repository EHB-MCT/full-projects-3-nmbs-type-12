// Link to the code
// https://www.youtube.com/watch?v=FwLMz7jMRac
// Start screen for the game

function startGame() {
    start();
    var fiveMinutes = 60 * 5, // Change the left side to specify the timer
    // var fiveMinutes = 60 * 0.16, 
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
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
            timer = 0;
            document.getElementById("time").style.color = "red";
            
        }
    }, 1000);
}

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

var AtriLijst = [];

var counter = 1;
var trainCounter = 1;

var CombinedTrains = [
    "media/images/activtype12.png",
    "media/images/activtype13.png",
    "media/images/activtype18.png",
    "media/images/activtype21.png",
    "media/images/activtype51.png",
    "media/images/activtype64.png",
    "media/images/activtype211.png",
    "media/images/activtype551.png",
    "media/images/activtype608.png",
    "media/images/activtypepays.png",
]

var buttonsAttributes = [
    "btnIconBlauw",
    "btnIconGrijsGeel",
    "btnIconGroen",
    "btnIconBlauwGeel",
    "btnIconStoom",
    "btnIconMetaal",
    "btnIconKoning",
    "btnIconGeit",
    "btnIconDiesel",
    "btnIconMotorwagen",
    "btnIconRidder",
    "btnIconAlstom",
    "btnIconElektriciteit",
    "btnIconGestroomlijnd",
    "btnIconPasEnGoed",
    "btnIconZeetrein"
]

function placeOnField() {
    countdown();
    ClearAll();
    placeOnField1();
    placeOnField2();
    placeOnField3();
    buttons();
}

// All of the paint bucket icons
function placeOnField1() {    
    btnIconBlauw.onclick = function() {
        var imageIndex = 0;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;

        document.getElementById("btnIconBlauw").className = "active";
        AtriLijst.push("btnIconBlauw");
        trainChecker();
    }

    btnIconGrijsGeel.onclick = function() {
        var imageIndex = 1;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
                
        document.getElementById("btnIconGrijsGeel").className = "active";
        AtriLijst.push("btnIconGrijsGeel");
     trainChecker();
    }

    btnIconGroen.onclick = function() {
        var imageIndex = 2;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
                
        document.getElementById("btnIconGroen").className = "active";
        AtriLijst.push("btnIconGroen");
        trainChecker();
    }

    btnIconBlauwGeel.onclick = function() {
        var imageIndex = 3;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
                
        document.getElementById("btnIconBlauwGeel").className = "active";
        AtriLijst.push("btnIconGeel");
        trainChecker();
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
                
        document.getElementById("btnIconStoom").className = "active";
        AtriLijst.push("btnIconStoom");
        trainChecker();
    }

    btnIconMetaal.onclick = function() {
        var imageIndex = 5;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
                
        document.getElementById("btnIconMetaal").className = "active";
        AtriLijst.push("btnIconMetaal");
        trainChecker();
    }

    btnIconKoning.onclick = function() {
        var imageIndex = 6;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
                
        document.getElementById("btnIconKoning").className = "active";
        AtriLijst.push("btnIconKoning");
        trainChecker();
    }

    btnIconGeit.onclick = function() {
        var imageIndex = 7;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
                
        document.getElementById("btnIconGeit").className = "active";
        AtriLijst.push("btnIconGeit");
        trainChecker();
    }

    btnIconDiesel.onclick = function() {
        var imageIndex = 8;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
                
        document.getElementById("btnIconDiesel").className = "active";
        AtriLijst.push("btnIconDiesel");
        trainChecker();
    }

    btnIconMotorwagen.onclick = function() {
        var imageIndex = 9;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
                
        document.getElementById("btnIconMotorwagen").className = "active";
        AtriLijst.push("btnIconMotorwagen");
        trainChecker();
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
                
        document.getElementById("btnIconRidder").className = "active";
        AtriLijst.push("btnIconRidder");
        trainChecker();
    }

    btnIconAlstom.onclick = function() {
        var imageIndex = 11;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
                
        document.getElementById("btnIconAlstom").className = "active";
        AtriLijst.push("btnIconAlstom");
        trainChecker();
    }

    btnIconElektriciteit.onclick = function() {
        var imageIndex = 12;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
                
        document.getElementById("btnIconElektriciteit").className = "active";
        AtriLijst.push("btnIconElektriciteit");
        trainChecker();
    }

    btnIconGestroomlijnd.onclick = function() {
        var imageIndex = 13;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++; 
                
        document.getElementById("btnIconGestroomlijnd").className = "active";
        AtriLijst.push("btnIconGestroomlijnd");
        trainChecker();
    }

    btnIconPasEnGoed.onclick = function() {
        var imageIndex = 14;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
                
        document.getElementById("btnIconPasEnGoed").className = "active";
        AtriLijst.push("btnIconPasEnGoed");
        trainChecker();
    }

    btnIconZeetrein.onclick = function() {
        var imageIndex = 15;
        var img = document.createElement("img");
        img.src = Attributes[imageIndex];
        document.getElementById("playField" + counter).appendChild(img);
        counter++;
                
        document.getElementById("btnIconZeetrein").className = "active";
        AtriLijst.push("btnIconZeetrein");
        trainChecker();
    }
}


//Clear the whole table.
function ClearAll() {
    document.getElementById("playField1").innerHTML = "";
    document.getElementById("playField2").innerHTML = ""; 
    document.getElementById("playField3").innerHTML = ""; 
    counter = 1;
    
    for (let i = 0; i < buttonsAttributes.length; i++) {
        document.getElementById(buttonsAttributes[i]).classList.remove("active");
    }
}


//Usefull links
// Arrays of images => https://www.youtube.com/watch?v=KI9Svonh8I0



//Attributen checker
// Leftmenu treinen toevoegen en weergeven + Aantal treinen gevonden (nummer)
// Mix the different attributes with each other to get a train.


function MixAttributes() {
    trainChecker();

    function trainChecker() {
        let count = 1;
        let minus = 9;
        //Type 18
        if(AtriLijst.includes("btnIconStoom")&& AtriLijst.includes("btnIconMetaal")&& AtriLijst.includes("btnIconKoning")){
            document.getElementById("trein3").style.cssText = "display:flex; width:100%;";
            document.getElementById("bottom3").style.display = "none";
            document.getElementById("counttrain").innerHTML = count++;
            document.getElementById("minusTrain").innerHTML = minus--;
        }
        //Type 51
        if(AtriLijst.includes("btnIconStoom")&& AtriLijst.includes("btnIconMetaal")&& AtriLijst.includes("btnIconGeit")){
            document.getElementById("trein5").style.cssText = "display:flex; width:100%;";
            document.getElementById("bottom5").style.display = "none";
            document.getElementById("counttrain").innerHTML = count++;
            document.getElementById("minusTrain").innerHTML = minus--;
        }
         //Type 211
         if(AtriLijst.includes("btnIconDiesel")&& AtriLijst.includes("btnIconGroen")&& AtriLijst.includes("btnIconMetaal")){
            document.getElementById("trein7").style.cssText = "display:flex; width:100%;";
            document.getElementById("bottom7").style.display = "none";
            document.getElementById("counttrain").innerHTML = count++;
            document.getElementById("minusTrain").innerHTML = minus--;
        }
         //Type 608
         if(AtriLijst.includes("btnIconStoom")&& AtriLijst.includes("btnIconGroen")&& AtriLijst.includes("btnIconMetaal")){
            document.getElementById("trein9").style.cssText = "display:flex; width:100%;";
            document.getElementById("bottom9").style.display = "none";
            document.getElementById("counttrain").innerHTML = count++;
            document.getElementById("minusTrain").innerHTML = minus--;
        }
         //Type 64
         if(AtriLijst.includes("btnIconMotorwagen")&& AtriLijst.includes("btnIconMetaal")&& AtriLijst.includes("btnIconGroen")){
            document.getElementById("trein6").style.cssText = "display:flex; width:100%;";
            document.getElementById("bottom6").style.display = "none";
            document.getElementById("counttrain").innerHTML = count++;
            document.getElementById("minusTrain").innerHTML = minus--;
        }
         //Type 551
         if(AtriLijst.includes("btnIconMotorwagen")&& AtriLijst.includes("btnIconMetaal")&& AtriLijst.includes("btnIconBlauw")){
            document.getElementById("trein8").style.cssText = "display:flex; width:100%;";
            document.getElementById("bottom8").style.display = "none";
            document.getElementById("counttrain").innerHTML = count++;
            document.getElementById("minusTrain").innerHTML = minus--;
        }
         //Tenderlocomotief
         if(AtriLijst.includes("btnIconRidder")&& AtriLijst.includes("btnIconMetaal")&& AtriLijst.includes("btnIconStroom")){
            document.getElementById("trein4").style.cssText = "display:flex; width:100%;";
            document.getElementById("bottom4").style.display = "none";
            document.getElementById("counttrain").innerHTML = count++;
            document.getElementById("minusTrain").innerHTML = minus--;
        }
         //Type 12
         if(AtriLijst.includes("btnIconZeetrein")&& AtriLijst.includes("btnIconStoom")&& AtriLijst.includes("btnIconGestroomlijnd")){
            document.getElementById("trein1").style.cssText = "display:flex; width:100%;";
            document.getElementById("bottom1").style.display = "none";
            document.getElementById("counttrain").innerHTML = count++;
            document.getElementById("minusTrain").innerHTML = minus--;
        }
         //Type 13
         if(AtriLijst.includes("btnIconElektriciteit")&& AtriLijst.includes("btnIconGrijsGeel")&& AtriLijst.includes("btnIconAlstom")){
            document.getElementById("trein2").style.cssText = "display:flex; width:100%;";
            document.getElementById("bottom2").style.display = "none";
            document.getElementById("counttrain").innerHTML = count++;
            document.getElementById("minusTrain").innerHTML = minus--;
        }
         //Type 217
         if(AtriLijst.includes("btnIconElektriciteit")&& AtriLijst.includes("btnIconBlauwGeel")&& AtriLijst.includes("btnIconPasEnGoed")){
            document.getElementById("trein10").style.cssText = "display:flex; width:100%;";
            document.getElementById("bottom10").style.display = "none";
            document.getElementById("counttrain").innerHTML = count++;
            document.getElementById("minusTrain").innerHTML = minus--;
        }
    
        console.log(AtriLijst);
    }
}
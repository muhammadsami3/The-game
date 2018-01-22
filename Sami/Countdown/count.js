

var secondsRemaining;
var intervalHandle;
var minutes=1;
startCountdown();//1

function startCountdown() {//2
    // how many seconds?
    secondsRemaining =  minutes * 60;//3
    // every second, call the "tick" function
    intervalHandle = setInterval(tick, 1000);//4
}
function tick() {
    // grab the h1
    var timeDisplay = document.getElementById("time");
    
    // turn seconds into mm:ss
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);
    
    // add a leading zero (as a string value) if seconds less than 10
    if (sec < 10) {
        sec = "0" + sec;
    }
    // concatenate with colon
    var message = min + ":" + sec;
    // now change the display
    timeDisplay.innerHTML = message;
    
    // stop if down to zero
    if (secondsRemaining === 0) {
        alert("Done!");
        clearInterval(intervalHandle);
    }
    // subtract from seconds remaining
    secondsRemaining--;
}



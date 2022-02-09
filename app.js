let hihat = document.getElementById("hihat");
let snare = document.getElementById("snare");
let kick = document.getElementById("kick");
let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let tom = document.getElementById("tom");
let tink = document.getElementById("tink");


window.addEventListener ("keydown", (kp) => {
console.log(kp)
if (kp.which == 68 ) { //play key d -
    hihat.pause()
    hihat.currentTime = 0
    hihat.play();
}
else if (kp.which == 74 ) { //play key j -
    snare.pause()
    snare.currentTime = 0
    snare.play();
}

else if (kp.which == 70 ) { //play key f -
    kick.pause()
    kick.currentTime = 0
    kick.play();
}

else if (kp.which == 65 ) { //play key a -
    boom.pause()
    boom.currentTime = 0
    boom.play();
}

else if (kp.which == 83 ) { //play key s -
    clap.pause()
    clap.currentTime = 0
    clap.play();
}

else if (kp.which == 71 ) { //play key g -
    openhat.pause()
    openhat.currentTime = 0
    openhat.play();
}

else if (kp.which == 72 ) { //play key h -
    ride.pause()
    ride.currentTime = 0
    ride.play();
}

else if (kp.key == 76 ) { //play key l -
    tom.pause()
    tom.currentTime = 0
    tom.play();
}

else if (kp.key == 75 ) { //play key k -
    tink.pause()
    tink.currentTime = 0
    tink.play();
}

});



document.addEventListener("click", (e) => {
    console.log(e)
    if (e.which == 68 ) { //play key d -
        hihat.pause()
        hihat.currentTime = 0
        hihat.play();
    }
    else if (e.which == 74 ) { //play key j -
        snare.pause()
        snare.currentTime = 0
        snare.play();
    }
    
    else if (e.which == 70 ) { //play key f -
        kick.pause()
        kick.currentTime = 0
        kick.play();
    }
    
    else if (e.which == 65 ) { //play key a -
        boom.pause()
        boom.currentTime = 0
        boom.play();
    }
    
    else if (e.which == 83 ) { //play key s -
        clap.pause()
        clap.currentTime = 0
        clap.play();
    }
    
    else if (e.key == 71 ) { //play key g -
        openhat.pause()
        openhat.currentTime = 0
        openhat.play();
    }
    
    else if (e.which == 72 ) { //play key h -
        ride.pause()
        ride.currentTime = 0
        ride.play();
    }
    
    else if (e.which == 76 ) { //play key l -
        tom.pause()
        tom.currentTime = 0
        tom.play();
    }
    
    else if (e.which == 75 ) { //play key k -
        tink.pause()
        tink.currentTime = 0
        tink.play();
    }
    
    });

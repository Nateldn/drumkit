
let openhat = document.getElementById("openhat");
let hihat = document.getElementById("hihat");
let snare = document.getElementById("snare");
let clap = document.getElementById("clap");
let kick = document.getElementById("kick");
let ride = document.getElementById("ride");
let boom = document.getElementById("boom");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");



document.addEventListener ("keydown", (event) => {
if (event.keyCode == 65 ) { //play key a -
    boom.pause()
    boom.currentTime = 0
    boom.play();
}

});

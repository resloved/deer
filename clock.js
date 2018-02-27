var clock = setInterval(function(){

    var time = new Date().toLocaleTimeString('en-US', {hour12: false, hour: "numeric", minute: "numeric", second: "numeric"});

    inner(time);
    orbit(time);

}, 1);

function inner(time) {

    var joes = ["🍑", "🌳", "🐘", "👻", "🍯", "🍒", "🌀", "🐰", "🍰", "🚂"]

    var mins = document.getElementById("mins");
    var secs = document.getElementById("secs");

    mins.innerHTML = joes[time.charAt(3)] + joes[time.charAt(4)];
    secs.innerHTML = joes[time.charAt(6)] + joes[time.charAt(7)];

}

function orbit(time) {

    var day = "🌞"
    var night = "🌝"

    var orbit = document.getElementById("orbit");

    var offset = 135; // 6AM at -45deg;
    var angle = 360*time.substring(0,2)/24-offset;
    orbit.style.MozTransform = "rotate("+angle+"deg)";

    var icon = document.getElementById("icon");

    if (angle > -45 && angle < 135) {
        icon.innerHTML = day;
    } else {
        icon.innerHTML = night;
    }
    
    var dist = 6;
    var shadow = document.getElementById("shadow");

    angle = (angle+45) * Math.PI / 180;
    shadow.style.textShadow = dist * Math.cos(angle) + "px " + dist * Math.sin(angle) + "px 0px rgba(0, 0, 0, 0.1)"

}

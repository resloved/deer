function clock(){

    var time = new Date().toLocaleTimeString('en-US', {hour12: false, hour: "numeric", minute: "numeric", second: "numeric"});

    inner(time);
    orbit(time);

}

function inner(time) {

    var joes = ["🍑", "🌳", "🐘", "👻", "🍯", "🍒", "🌀", "🐰", "🍰", "🚂"]

    var mins = document.getElementById("mins");
    var secs = document.getElementById("secs");

    mins.innerHTML = joes[time[3]] + joes[time[4]];
    secs.innerHTML = joes[time[6]] + joes[time[7]];

}

function orbit(time) {

    var day = "🌞"
    var night = "🌝"

    var orbit = document.getElementById("orbit");

    var secsH = 3600 * Number(time.substring(0,2));
    var secsM = 60 * Number(time.substring(3,5));
    var secs = Number(time.substring(6,8));
    var total = secsH + secsM + secs;

    var offset = 135; // 6AM at -45deg;
    var angle = Math.round(360*total/86400-offset);

    orbit.style.webkitTransform = "rotate("+angle+"deg)";
    orbit.style.MozTransform = "rotate("+angle+"deg)";
    orbit.style.Transform = "rotate("+angle+"deg)";

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

function forecast(total) {

    // Each 3 hours extends 2 character blocks
    // 1/2 + Emoji + 1/2
    // 50px width?

    var start = total % (3600*3);

}

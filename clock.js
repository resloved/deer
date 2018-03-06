function clock(){

    var time = new Date().toLocaleTimeString('en-US', {hour12: false, hour: "numeric", minute: "numeric", second: "numeric"});

    inner(time);

    var hours = Number(time.substring(0,2));
    var mins  = Number(time.substring(3,5));
    var secs  = Number(time.substring(6,8));
    
    orbit(hours, mins);
    forecast(hours, mins);

}

function inner(time) {

    var joes = ["🍑", "🌳", "🐘", "👻", "🍯", "🍒", "🌀", "🐰", "🍰", "🚂"]

    var mins = document.getElementById("mins");
    var secs = document.getElementById("secs");

    mins.innerHTML = joes[time[3]] + joes[time[4]];
    secs.innerHTML = joes[time[6]] + joes[time[7]];

}

function orbit(hours, mins) {

    var total = 3600*hours + 60*mins;

    var offset = 135; // 6AM at -45deg;
    var angle = 360*total/86400-offset;

    var orbiter = document.getElementById("orbit");

    orbiter.style.webkitTransform = "rotate("+angle+"deg)";
    orbiter.style.MozTransform = "rotate("+angle+"deg)";
    orbiter.style.Transform = "rotate("+angle+"deg)";

    var icon = document.getElementById("icon");

    if (angle > -45 && angle < 135) {
        icon.innerHTML = "🌞";
    } else {
        icon.innerHTML = "🌝";
    }
    
    var dist = 6;
    var shadow = document.getElementById("shadow");

    angle = (angle+45) * Math.PI / 180;
    shadow.style.textShadow = dist * Math.cos(angle) + "px " + dist * Math.sin(angle) + "px 1px rgba(0, 0, 0, 0.125)"

}

function forecast(hours, mins) {

    var bar = document.getElementById("weather");
    var total = (hours - 2) % 3 * 3600 + mins*60;
    var pct = total / (3600 * 3);
    bar.style.marginLeft = 45 - 45 * pct;

}

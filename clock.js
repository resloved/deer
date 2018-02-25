var clock = setInterval(function(){

    var joes = ["🍑", "🌳", "🐘", "👻", "🍯", "🍒", "🌀", "🐰", "🍰", "🚂"]

    var time = new Date().toLocaleTimeString('en-US', {hour12: false, hour: "numeric", minute: "numeric", second: "numeric"});

    var mins = document.getElementById("mins");
    var secs = document.getElementById("secs");

    mins.innerHTML = joes[time.charAt(3)] + joes[time.charAt(4)];
    secs.innerHTML = joes[time.charAt(6)] + joes[time.charAt(7)];

    var orbit = document.getElementById("orbit");

    var offset = 135; // 6AM at -45deg;
    var angle = 360*time.substring(0,2)/24-offset;
    orbit.style.MozTransform = "rotate("+angle+"deg)";

    var icon = document.getElementById("weather");

    // [Could have it only show on northern hemisphere]
    if (angle > 0 && angle < 180) {
        icon.innerHTML = "🌞"; // Sun
    } else {
        icon.innerHTML = "🌝"; // Moon
    }

    var dist = 8;
    var shadow = document.getElementById("shadow");

    angle = (angle+45) * Math.PI / 180;
    shadow.style.textShadow = dist * Math.cos(angle) + "px " + dist * Math.sin(angle) + "px 0px rgba(0, 0, 0, 0.1)"

}, 1);

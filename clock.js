var clock = setInterval(function(){

    var joes = ["🍑", "🌳", "🐘", "👻", "🍯", "🍒", "🌀", "🐰", "🍰", "🚂"]

    var time = new Date().toLocaleTimeString('en-US', {hour12: false, hour: "numeric", minute: "numeric", second: "numeric"});

    var mins = document.getElementById("mins");
    var secs = document.getElementById("secs");

    mins.innerHTML = joes[time.charAt(3)] + joes[time.charAt(4)];
    secs.innerHTML = joes[time.charAt(6)] + joes[time.charAt(7)];

    var orbit = document.getElementById("orbit");

    var angle = 360*time.substring(0,2)/24;
    orbit.style.MozTransform = "rotate("+(angle - 45)+"deg)";

    // var shadow = document.getElementById("shadow");
    // shadow.style.textShadow = "5px -1px 0px rgba(0, 0, 0, 0.1)"

    var icon = document.getElementById("weather");

    if (angle > 180) {
        icon.innerHTML = "🌝";
    } else {
        icon.innerHTML = "🌞";
    }

}, 1);

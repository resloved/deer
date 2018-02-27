function getLocation() {

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather);
    }

}

function getWeather(position) {

    var key = "354638e949f50138500211c1ee9abdfc";
    var lon = position.coords.longitude;
    var lat = position.coords.latitude;
    var url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID="+key;

    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.resonseType = 'json';
    req.send();
    req.onload = function() {
        var obj = JSON.parse(req.responseText);
        console.log(obj.weather[0].id);
        code = obj.weather[0].id;
    }

}

function parseID(int id) {

    switch(id) {

    }
    
}


var code = 0;
var idx = 0;
getLocation();

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

    var day   = ["🌞", "DB", "DC", "DD"];
    var night = ["🌝", "NB", "NC", "ND"];

    var orbit = document.getElementById("orbit");

    var offset = 135; // 6AM at -45deg;
    var angle = 360*time.substring(0,2)/24-offset;
    orbit.style.MozTransform = "rotate("+angle+"deg)";

    var icon = document.getElementById("weather");

    if (angle > -45 && angle < 135) {
        icon.innerHTML = day[idx];
    } else {
        icon.innerHTML = night[idx];
    }
    
    var dist = 6;
    var shadow = document.getElementById("shadow");

    angle = (angle+45) * Math.PI / 180;
    shadow.style.textShadow = dist * Math.cos(angle) + "px " + dist * Math.sin(angle) + "px 0px rgba(0, 0, 0, 0.1)"

}


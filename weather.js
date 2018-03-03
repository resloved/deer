function getLocation() {

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather);
    }

}

function getWeather(position) {

    var key = "354638e949f50138500211c1ee9abdfc";
    var lon = position.coords.longitude;
    var lat = position.coords.latitude;
    var url = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&APPID="+key;

    var forecast = document.getElementById("forecast");
    var dom = document.getElementById("weather");

    var req = new XMLHttpRequest();
    var code = 0;
    req.open("GET", url);
    req.resonseType = 'json';
    req.send();
    req.onload = function() {
        var obj = JSON.parse(req.responseText);
        for (var i = 0; i < obj.list.length; i++) {
            parseIcon(obj.list[i].weather[0].icon, dom);
        }
    }

    forecast.style.display = "inline";

}

function parseIcon(id, dom) {

    var icons = ["🌞", "🌤️", "🌧", "🌩", "🌨"];

    id = id.substring(0,2);

    switch (id) {
        case '02':
        case '03':
        case '04':
        case '50':
            dom.innerHTML += icons[1] + " ";
            break;
        case '09':
        case '10':
            dom.innerHTML += icons[2] + " ";
            break;
        case '11':
            dom.innerHTML += icons[3] + " ";
            break;
        case '13':
            dom.innerHTML += icons[4] + " ";
            break;
        default:
            dom.innerHTML += icons[0] + " ";
            break;
    }

}

var reportAcudits = [];
var joke = "";
var contador = 0;
function mostraAcudit() {
    contador++;
    var URL_API = 'https://icanhazdadjoke.com/slack';
    var URL_API_NORRIS = 'https://api.chucknorris.io/jokes/random';
    var acudit = document.querySelector('#acudit');
    if (contador % 2 === 0) {
        fetch(URL_API)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            var ac = data.attachments[0].fallback;
            acudit.innerHTML = "";
            acudit.innerHTML = ac;
            joke = ac;
        })["catch"](function (err) { return console.log(err); });
    }
    else {
        fetch(URL_API_NORRIS)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            var ac = data.value;
            acudit.innerHTML = "";
            acudit.innerHTML = ac;
            joke = ac;
        })["catch"](function (err) { return console.log(err); });
    }
}
function puntuaAcudit(score) {
    var acuditObject = { score: 0, joke: "", date: new Date() };
    acuditObject.score = score;
    acuditObject.joke = joke;
    reportAcudits.push(acuditObject);
    console.log(reportAcudits);
}
function obtenerDatosClima() {
    var climahoy = document.querySelector("#climahoy");
    fetch("https://api.openweathermap.org/data/2.5/weather?q=valencia&appid=16bc05a4558d34887cf433491aa6250e")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var temperatura = (data.main.temp - 273.15).toFixed(1);
        var tiempo = data.weather[0].main;
        if (tiempo === 'Clouds') {
            climahoy.innerHTML = "\n                    <img src=\"../img/cloud.png\" alt=\"\"> \n                    <span>" + temperatura + "\u00B0C</span>\n                    ";
        }
        else if (tiempo === 'Mist') {
            climahoy.innerHTML = "\n                    <img src=\"../img/mist.png\" alt=\"\"> \n                    <span>" + temperatura + "\u00B0C</span>\n                    ";
        }
        else if (tiempo === 'Clear') {
            climahoy.innerHTML = "\n                    <img src=\"../img/sun.png\" alt=\"\"> \n                    <span>" + temperatura + "\u00B0C</span>\n                    ";
        }
        else {
            climahoy.innerHTML = "\n                    <img src=\"../img/rain.png\" alt=\"\"> \n                    <span>" + temperatura + "\u00B0C</span>\n                    ";
        }
    })["catch"](function (err) { return console.log(err); });
}

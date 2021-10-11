type acudit = {joke:string,score:number,date: Date};

let reportAcudits: acudit[] = [];
let joke: string = "";
let contador: number = 0;

function mostraAcudit(){

    contador++;

    const URL_API: string = 'https://icanhazdadjoke.com/slack';

    const URL_API_NORRIS: string = 'https://api.chucknorris.io/jokes/random';
    
    const acudit = document.querySelector('#acudit');

    if (contador % 2 === 0){
        fetch(URL_API)
        .then(response => response.json())
        .then(data => {
            var ac: string = data.attachments[0].fallback;
            acudit.innerHTML = "";
            acudit.innerHTML = ac;
            joke = ac;
        })
    .catch(err => console.log(err))
    }else{
        fetch(URL_API_NORRIS)
        .then(response => response.json())
        .then(data => {
            var ac: string = data.value;
            acudit.innerHTML = "";
                acudit.innerHTML = ac;
                joke = ac;
        })
        .catch(err => console.log(err))
    }
}


function puntuaAcudit(score){
    let acuditObject: acudit = {score:0, joke:"", date:new Date()};

    acuditObject.score = score;
    acuditObject.joke = joke;

    reportAcudits.push(acuditObject);

    console.log(reportAcudits);

}

function obtenerDatosClima(){ 

    const climahoy = document.querySelector("#climahoy");

    fetch("https://api.openweathermap.org/data/2.5/weather?q=valencia&appid=16bc05a4558d34887cf433491aa6250e")
        .then(response => response.json())
        .then(data => {
            let temperatura: string = (data.main.temp - 273.15).toFixed(1); 
            let tiempo: string = data.weather[0].main;

            if (tiempo === 'Clouds'){
                climahoy.innerHTML = `
                    <img src="../img/cloud.png" alt=""> 
                    <span>${temperatura}°C</span>
                    `
            }else if(tiempo === 'Mist'){
                climahoy.innerHTML = `
                    <img src="../img/mist.png" alt=""> 
                    <span>${temperatura}°C</span>
                    `
            }else if(tiempo === 'Clear'){
                climahoy.innerHTML = `
                    <img src="../img/sun.png" alt=""> 
                    <span>${temperatura}°C</span>
                    `
            }else{
                climahoy.innerHTML = `
                    <img src="../img/rain.png" alt=""> 
                    <span>${temperatura}°C</span>
                    `
            }
        })
        .catch(err => console.log(err))
}






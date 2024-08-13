const key = 'e0283766cee7e7e70be7e75409ae8042'

function ColetDado() {
    const cidade = document.querySelector(".input-cidade").value
    Dado(cidade)
}

async function Dado(cidade) {
    let Dado = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Resposta => Resposta.json())
    console.log(Dado)
    TrocarInfo(Dado)
}

function TrocarInfo (Dado) {
    document.querySelector(".titulo").innerHTML = Dado.name
    document.querySelector(".Temp").innerHTML = Math.floor(Dado.main.temp) + " °C"
    document.querySelector(".Previsão").innerHTML = Dado.weather[0].description
    document.querySelector(".imgprev").src = `https://openweathermap.org/img/wn/${Dado.weather[0].icon}.png`
    document.querySelector(".Umidade").innerHTML = "Umidade Relativa do Ar: " + Math.floor(Dado.main.humidity) + " %"
    document.querySelector(".Vento").innerHTML = "Velocidade do Vento: " + Math.floor(Dado.wind.speed) + " km/h"
}
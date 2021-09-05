const API_KEY = "c98a4564843248389eb5dfe537830715";

function GeoWork(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(position);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then((response) => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        city.innerText = data.name;
    });
}

function GeoError() {
alert("Can't find where are you.");
}

navigator.geolocation.getCurrentPosition(GeoWork,GeoError)
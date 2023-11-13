const API_KEY = "d14333501aae27a68edbd740cc99149f";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log("You live it ", lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //console.log(url);
    fetch(url).then((Response) =>
        Response.json().then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-Child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`;
        })
    );
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

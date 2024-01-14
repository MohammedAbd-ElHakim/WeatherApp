
const apikey = '7c0adfdc9afa17cb29eea3431413b7d4';
var cityName = document.querySelector('.city');
var search_city = document.querySelector('.search_input');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var weather_icon = document.querySelector('.weather_icon');
var wind = document.querySelector('.wind');
var weather = document.querySelector('.weather');
var error = document.querySelector('.error');
var btn = document.getElementById('btn');


async function checkWeather(city) {
    console.log(`city : ${city}`);

    const apiUrl =
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
    const request = await fetch(apiUrl + city + `&appid=${apikey}`);

    var data_object = await request.json();
    console.log(data_object);

    if (request.status === 404) {
        error.style.display = 'block';
        weather.style.display = 'none';


    }
    console.log('data' + data_object.weather[0].main);

    cityName.innerHTML = data_object.name;
    temp.innerHTML = Math.round(data_object.main.temp) + '°c';
    humidity.innerHTML = data_object.main.humidity + '%';
    wind.innerHTML = data_object.wind.speed + 'km/h';

    if (data_object.weather[0].main == "Clouds") {

        weather_icon.src = './img/cloudy.png';

    } else if (data_object.weather[0].main == "Clear") {

        weather_icon.src = './img/clear-sky.png';

    } else if (data_object.weather[0].main == "Rain") {

        weather_icon.src = './img/rain.png';

    } else if (data_object.weather[0].main == "Mist") {

        weather_icon.src = './img/haze.png';


    } else if (data_object.weather[0].main == "Drizzle") {

        weather_icon.src = './img/drizzle.png';
    }

    weather.style.display = 'block';
    error.style.display = 'none';


}

btn.addEventListener('click', () => {
    console.log(search_city.value);
    checkWeather(search_city.value);
});


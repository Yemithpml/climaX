//Using the open weather map api to fetch weather data for a given city

const apiKey = "2e9df903c6607c3b8a3bb370a2644325";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchCity = document.getElementById("inputCity")
const searchBtn = document.getElementById("inputBtn")
const condt = document.getElementById("conditions")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json(); 

    console.log(data)

    document.getElementById("city").textContent = data.name
    document.getElementById("temp").textContent = data.main.temp;
    document.getElementById("humidity").textContent = data.main.humidity
    document.getElementById("wind").textContent = data.wind.speed

    if(data.weather[0].main == "Clouds"){
        condt.src = "images/clouds.png"
    } 
    else if(data.weather[0].main == "Clear"){
        condt.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Mist"){
        condt.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        condt.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Snow"){
        condt.src = "images/snow.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        condt.src = "images/drizzle.png"
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchCity.value)
})
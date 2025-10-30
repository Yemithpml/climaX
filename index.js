//Using the open weather map api to fetch weather data for a given city
const apiKey = 'YOUR_API_KEY_HERE           

const fetchWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    return data;
}
export default fetchWeather;


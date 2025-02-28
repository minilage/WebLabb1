// Din API-nyckel från OpenWeatherMap
const apiKey = "bf891ab146297bd33242fad9c23b8893"; 

// Koordinater för Åmål
const lat = 59.0512;
const lon = 12.7044;

// URL för API-anropet
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=sv`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        // Hämta relevant väderdata
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const city = data.name;

        // Visa väderinformationen på sidan
        document.getElementById("weather").innerHTML = `Just nu är det ${temperature}°C och ${description} i ${city}.`;
    } catch (error) {
        document.getElementById("weather").innerHTML = "Kunde inte hämta väderdata.";
    }
}

// Kör funktionen när sidan laddas
fetchWeather();
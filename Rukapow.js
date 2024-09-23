// Example of fetching current weather data, aurora, snow, and time using APIs

const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key

// Function to update time and date
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').innerText = timeString;
}

// Function to fetch weather data (placeholder for actual API integration)
async function fetchWeather() {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Lapland`);
    const data = await response.json();
    document.getElementById('weather').innerText = `Temperature: ${data.current.temp_c}°C`;
}

// Function to fetch aurora data (placeholder for actual API integration)
async function fetchAurora() {
    const response = await fetch(`https://api.auroras.live/v1/?type=all&lat=67.5&long=26.0&forecast=true`);
    const data = await response.json();
    document.getElementById('aurora').innerText = `Aurora Forecast: ${data.forecast}`;
}

// Function to fetch ski/snow data (placeholder for actual API integration)
async function fetchSnowData() {
    const response = await fetch(`https://api.snowapi.com/v1/snow?key=${API_KEY}&location=Lapland`);
    const data = await response.json();
    document.getElementById('snow').innerText = `Snow Depth: ${data.snow_depth} cm`;
}

// Function to simulate Instagram sharing
function shareOnInstagram() {
    alert("Sharing on Instagram...");
}

// Update the time every second
setInterval(updateTime, 1000);

// Fetch initial data
fetchWeather();
fetchAurora();
fetchSnowData();

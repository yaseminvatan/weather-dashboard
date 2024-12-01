//API key: 9b59277282a4c78dacdb0a1ce08dcb8d
const apiKey = '9b59277282a4c78dacdb0a1ce08dcb8d';
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const searchHistoryDiv = document.getElementById('search-history');
const currentWeatherDiv = document.getElementById('current-weather-data');
const forecastContainer = document.getElementById('forecast-container');

let searchHistory = JSON.parse(localStorage.getItem('weatherSearchHistory')) || [];

// Function to fetch and display weather data
async function fetchWeatherData(city) {
    try {
      // Fetch coordinates
      const geoRes = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
      );
      const geoData = await geoRes.json();
      if (!geoData.length) {
        alert('City not found.');
        return;
      }
    }
};
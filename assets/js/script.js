//API key: 9b59277282a4c78dacdb0a1ce08dcb8d
const apiKey = '9b59277282a4c78dacdb0a1ce08dcb8d';
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const searchHistoryDiv = document.getElementById('search-history');
const currentWeatherDiv = document.getElementById('current-weather-data');
const forecastContainer = document.getElementById('forecast-container');

let searchHistory = JSON.parse(localStorage.getItem('weatherSearchHistory')) || [];
### README.md

# Weather Dashboard

## Description
The **Weather Dashboard** is a web application that allows users to search for the current weather and 5-day weather forecast for any city. It utilizes the OpenWeatherMap API to fetch real-time weather data and stores search history for easy access to previously searched cities.

---

## Features
- **Search for City Weather**: Users can enter a city name to view its current weather and forecast.
- **Current Weather Display**: Shows city name, date, temperature, humidity, wind speed, and a weather icon.
- **5-Day Forecast**: Displays a daily forecast with date, temperature, humidity, and weather icon.
- **Search History**: Keeps track of searched cities for quick reference. Users can click on a city in the history to view its weather again.

---

## Technologies Used
- **HTML**: Structure of the application.
- **CSS**: Styling for layout and design.
- **JavaScript**: Dynamic functionality and API integration.
- **OpenWeatherMap API**: Fetch weather data.

---

## File Structure
```
Weather-Dashboard/
│
├── assets/
│   ├── css/
│   │   └── styles.css        # Styling for the application
│   ├── js/
│       └── script.js         # JavaScript functionality
│
├── index.html                 # Main HTML file
└── README.md                  # ReadMe file
```

---

## Installation and Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Open the application**:
   - Open the `index.html` file in your preferred browser.

3. **Usage**:
   - Enter a city name in the search bar and click "Search."
   - View the current weather and 5-day forecast below.
   - Use the search history buttons to quickly access previous searches.

---

## OpenWeatherMap API Setup
This project uses the OpenWeatherMap API. To get started:

1. **Sign up** at [OpenWeatherMap](https://openweathermap.org/) and get your API key.
2. Replace the `apiKey` variable in `script.js` with your own API key:
   ```javascript
   const apiKey = 'API Key';
   ```

---

## Screenshots

### Weather Dashboard Interface
![Weather Dashboard Screenshot](assets/images/screenshot.png)

---

## License
This project is licensed under the MIT License.

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

---

## Credits
Developed by **Yasemin Vatan**.  
API by [OpenWeatherMap](https://openweathermap.org/).
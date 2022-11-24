// API key
const apiKey = '19af75ad2faedb9fa29ead47a916729d';

// DOM elements
const searchedInput = $("#city-searched");
const searchformEl = $("#search-form");
const weeklyForecastEl = $("#week-forecast");
const searchHistoryEl = $("#search-history");
const todaysWeatherEl = $("#todays-weather");

// search history
var searchHistory = [];

// click handler for search button
$("#city-searched").click(function () {
    // parameter to ensure search has a value 
    if (!searchedInput.val()) {
      alert("Please enter a City.");
    }
    // take the searched city and remove any extra values 
    var search = searchedInput.val().trim();
    fetchCoords(search);
    searchedInput.value = "";
});

// API Fetch 
function fetchCoords(search) {
    // API URL
    var requestURL = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=${APIKey}`;
  
    // Fetches the requested data then jsons the response
    fetch(requestURL)
      .then((response) => response.json())
      .then((data) => {
        // appends search location to history then takes data (location) and fetches weather 
        appendToHistory(search);
        fetchWeather(data[0]);
      });
}

function fetchWeather(location) {
    // API URL
    var requestURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${APIKey}&units=imperial`;
  
    // Fetches the requested data then jsons the response
    fetch(requestURL)
      .then((response) => response.json())
      .then((data) => renderItems(location.name, data));
  }
  
// API key
var APIkey = '19af75ad2faedb9fa29ead47a916729d';

// DOM elements
const searchBtn = $("#search-submit");
const searchedInput = $("#search-input");
const weeklyForecastEl = $("#week-forecast");
const searchHistoryEl = $("#search-history");
const todaysWeatherEl = $("#todays-weather");

// search history
var searchHistory = [];

// click handler for search button
$("#search-submit").click(function () {
    // parameter to ensure search has a value 
    if (!searchedInput.val()) {
      alert("Please enter a City.");
    }
    // take the searched city and remove any extra values 
    var search = searchedInput.val().trim();
    fetchCordinates(search);
    searchedInput.value = "";
});
//  API Fetch 
function fetchCordinates(search) {
    // API URL
    var requestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${APIkey}`;
  
    // Fetches the requested data then jsons the response
    fetch(requestURL)
      .then((response) => response.json())
      .then((data) => {
        // render out latitude and longitude in console
        // console.log(data[0]);
        // appendToHistory(search);
        fetchWeather(data[0]);
      });
}

function fetchWeather(location) {
    // API URL
    var requestURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${APIkey}&units=imperial`;
  
    // Fetches the requested data then jsons the response
    fetch(requestURL)
      .then((response) => response.json())
      .then((data) => console.log(location.name, data));

    }
  
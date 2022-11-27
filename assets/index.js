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

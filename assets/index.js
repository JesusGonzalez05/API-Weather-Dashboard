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
    localStorage.setItem('history', search);
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

//  API Fetch 
function fetchWeather(location) {
    // API URL
    var requestURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${APIkey}&units=imperial`;
  
    // Fetches the requested data then jsons the response
    fetch(requestURL)
      .then((response) => response.json())
      .then((data) => renderData(location.name, data));

    }

// function to handle the data and send to appropriate functions
function renderData(city, data) {
    CurrentWeather(city, data.list[0]);
    fiveDayForecast(data.list);
}

// displays the current weather data
function CurrentWeather(city, weather) {
    var temp = weather.main.temp;
    var wind = weather.wind.speed;
    var humidity = weather.main.humidity;
    var todaysDate = moment(weather.dt_txt).format("M/D/YY");
  
    var cardBodyEl = todaysWeatherEl.find(".card-body");
    cardBodyEl.empty();
    cardBodyEl.append(

   `<div class="searched-city container text-center>
      <div id="todays-weather" class="card mb-4">

          <div class="card-body">   
          <h2>${city} (${todaysDate})</h2>
          <p>Temp: ${temp}°F</p> 
          <p>Wind: ${wind} MPH</p>
          <p>Humidity: ${humidity} %</p>
          </div>

      </div>
      `
    );
  }

// Function to display 5 day forecast.
function fiveDayForecast(dailyForecast) {
    weeklyForecastEl.empty();
    for (var i = 0; i < dailyForecast.length; i++) {
      // sends to function that will render data
      renderForecast(dailyForecast[i]);
    };
  };

// Function to display a forecast card given an object from open weather api
function renderForecast(forecast) {
    if (moment(forecast.dt_txt).hour() !== 12) {
      return;
    }
  
    var card = $(
      `<div class="container text-center"><div class="card-body"></div></div>`
    );
    var cardBodyEl = card.find(".card-body");
  
    var temp = forecast.main.temp;
    var wind = forecast.wind.speed;
    var humidity = forecast.main.humidity;
    var todaysDate = moment(forecast.dt_txt).format("M/D/YY");
  
    cardBodyEl.append(

        `
        <div id="week-forecast" class="week-forecast d-flex flex-row justify-content-center">
        <div id="week-forecast" class="card-body">   
        <h2>(${todaysDate})</h2>
        <p>Temp: ${temp}°F</p> 
        <p>Wind: ${wind} MPH</p>
        <p>Humidity: ${humidity} %</p>
        </div>
        </div>
        `
  );
    weeklyForecastEl.append(card);
  }
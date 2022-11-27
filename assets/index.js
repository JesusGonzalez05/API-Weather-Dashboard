// API key
const APIKey = '19af75ad2faedb9fa29ead47a916729d';

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
    // fetchCordinates(search);
    // searchedInput.value = "";
    console.log(search);
});


// // API Fetch 
// function fetchCordinates(search) {
//     // API URL
//     var requestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${APIkey}`;
  
//     // Fetches the requested data then jsons the response
//     fetch(requestURL)
//       .then((response) => response.json())
//       .then((data) => {
//         // appends search location to history then takes data (location) and fetches weather 
//         appendToHistory(search);
//         fetchWeather(data[0]);
//       });
//       console.log(response);
//       console.log(data);

// }



// // API Fetch 
// function fetchCoords(search) {
//     // API URL
//     var requestURL = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=${APIKey}`;
  
//     // Fetches the requested data then jsons the response
//     fetch(requestURL)
//       .then((response) => response.json())
//       .then((data) => {
//         // appends search location to history then takes data (location) and fetches weather 
//         appendToHistory(search);
//         fetchWeather(data[0]);
//       });
//       console.log(response);
// }

// function fetchWeather(location) {
//     // API URL
//     var requestURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${APIKey}&units=imperial`;
  
//     // Fetches the requested data then jsons the response
//     fetch(requestURL)
//       .then((response) => response.json())
//       .then((data) => renderItems(location.name, data));
//       console.log(response);

//   }
  

// // Function to display the CURRENT weather data fetched from OpenWeather api.
// function renderCurrentWeather(city, weather) {
//     var temp = weather.main.temp;
//     var wind = weather.wind.speed;
//     var humidity = weather.main.humidity;
//     var todaysDate = moment(weather.dt_txt).format("M/D/YY");
  
//     var cardBodyEl = todaysWeatherEl.find(".card-body");
//     cardBodyEl.empty();
//     cardBodyEl.append(
//       `<h2>${city} (${todaysDate}) <img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" /></h2>`
//     );
//     cardBodyEl.append(`<p>Temp: ${temp}°F</p>`);
//     cardBodyEl.append(`<p>Wind: ${wind} MPH</p>`);
//     cardBodyEl.append(`<p>Humidity: ${humidity} %</p>`);
//   }



//   // Function to display a FORECAST card given an object (from our renderForecast function) from open weather api
// // daily forecast.
// function renderForecastCard(forecast) {
//     if (moment(forecast.dt_txt).hour() !== 12) {
//       return;
//     }
  
//     var card = $(
//       `<div class="card text-white bg-dark" style="max-width: 15%"><div class="card-body"></div></div>`
//     );
//     var cardBodyEl = card.find(".card-body");
  
//     var temp = forecast.main.temp;
//     var wind = forecast.wind.speed;
//     var humidity = forecast.main.humidity;
//     var todaysDate = moment(forecast.dt_txt).format("M/D/YY");
  
//     cardBodyEl.append(`<h3>${todaysDate}</h3>`);
//     cardBodyEl.append(
//       `<img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" />`
//     );
//     cardBodyEl.append(`<p>Temp: ${temp}°F</p>`);
//     cardBodyEl.append(`<p>Wind: ${wind} MPH</p>`);
//     cardBodyEl.append(`<p>Humidity: ${humidity} %</p>`);
  
//     weeklyForecastEl.append(card);
//   }


// // Function to display 5 day forecast.
// function renderForecast(dailyForecast) {
//     weeklyForecastEl.empty();
//     for (var i = 0; i < dailyForecast.length; i++) {
//       // send the data to our renderForecast function as an argument
//       renderForecastCard(dailyForecast[i]);
//     }
//   }
  
//   function renderItems(city, data) {
//     renderCurrentWeather(city, data.list[0]);
//     renderForecast(data.list);
//   }



// // Function to update history in local storage then updates displayed history.
// function appendToHistory(search) {
//     // push search term into search history array
//     searchHistory.push(search);
//     // set search history array to local storage
//     localStorage.setItem("search-history", JSON.stringify(searchHistory));
//     renderSearchHistory();
//   }
  
// // Function to get search history from local storage
// function initSearchHistory() {
//     // get search history item from local storage
//     searchHistory = JSON.parse(localStorage.getItem("search-history"));
//     if (!searchHistory) {
//       searchHistory = [];
//     }
//     // set search history array equal to what you got from local storage
//     renderSearchHistory();
//   }


//   // Function to display the search history list.
// function renderSearchHistory() {
//     // empty the search history container
//     searchHistoryEl.empty();
//     // loop through the history array creating a button for each item
//     for (let index = 0; index < searchHistory.length; index++) {
//       var buttonEl = $(
//         `<button class="btn btn-secondary w-100 my-2">${searchHistory[index]}</button>`
//       );
//       searchHistoryEl.append(buttonEl);
//       buttonEl.click(function () {
//         fetchCoords(searchHistory[index]);
//       });
//     }
//   }
  


//   initSearchHistory();
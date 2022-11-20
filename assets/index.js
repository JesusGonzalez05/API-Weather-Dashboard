// API key
const apiKey = '338d1628f784e2c0c339e4ade3ce2735';

// needed for search 
let city = '';
let search = '';
let lat;
let lon;

// API
const queryUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=' + apiKey;
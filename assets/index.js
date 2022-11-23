// API key
const apiKey = '19af75ad2faedb9fa29ead47a916729d';

// needed for search 
let city = '';
let search = '';
let lat;
let lon;

// API
const queryUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=' + apiKey;

// search history
var searchHistory = [];


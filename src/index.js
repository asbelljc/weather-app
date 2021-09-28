import './style.scss';
import usCities from './us-cities.json';
import countries from './countries.json';
import 'regenerator-runtime/runtime';

const usCityIds = Array.from(usCities, (city) => city.id);
const body = document.querySelector('body');
const temperatureBox = document.createElement('div');
temperatureBox.className = 'temperature';
const cityBox = document.createElement('div');
cityBox.className = 'city';
const stateBox = document.createElement('div');
stateBox.className = 'state';
const searchBox = document.createElement('input');
searchBox.type = 'text';
searchBox.className = 'search-box';
const searchBtn = document.createElement('button');
searchBtn.type = 'button';
searchBtn.textContent = 'Search';
searchBtn.className = 'search-btn';
searchBtn.addEventListener('click', () => {
  let inputs = searchBox.value.split(',');
  inputs = inputs.map((item) => item.trim());
  getWeatherData(...inputs);
});

[temperatureBox, cityBox, stateBox, searchBox, searchBtn].forEach((box) =>
  body.appendChild(box)
);

async function getWeatherData(city, state = '', country = '') {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&appid=37ed2f3dbba73d4855aa2f683c7e3232`
  );
  const json = await data.json();

  temperatureBox.textContent = json.main.temp;
  cityBox.textContent = json.name;
  stateBox.textContent = usCityIds.includes(json.id)
    ? usCities.filter((city) => city.id === json.id)[0].state
    : json.sys.country;
}

function convertToCelsius(temperature) {
  return (temperature - 32) * (5 / 9);
}

getWeatherData('boone', 'nc', 'us');

// TODO
// - process data from returned JSON
// - write function to check city id against city list json in order to display state name
//   (US ONLY)

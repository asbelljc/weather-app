import './style.scss';
import 'regenerator-runtime/runtime';

const body = document.querySelector('body');

const temperatureBox = document.createElement('div');
temperatureBox.className = 'temperature';

const cityBox = document.createElement('div');
cityBox.className = 'city';

const stateBox = document.createElement('div');
stateBox.className = 'state';

const cityInput = document.createElement('input');
cityInput.type = 'text';
cityInput.className = 'search-box';
cityInput.placeholder = 'Enter your city';

const stateInput = document.createElement('select');
const stateInputDefault = document.createElement('option');
stateInputDefault.textContent = 'Select your state';
stateInputDefault.value = '';
stateInput.appendChild(stateInputDefault);
usStateNames.forEach((state) => {
  const option = document.createElement('option');
  option.textContent = state;
  option.value = usStateCodes.filter((code) => usStates[code] === state);
  stateInput.appendChild(option);
});

const searchBtn = document.createElement('button');
searchBtn.type = 'button';
searchBtn.textContent = 'Search';
searchBtn.className = 'search-btn';
searchBtn.addEventListener('click', () => {
  let inputs = cityInput.value.split(',');
  inputs = inputs.map((item) => item.trim());
  getWeatherData(...inputs);
});

[temperatureBox, cityBox, stateBox, cityInput, stateInput, searchBtn].forEach(
  (box) => body.appendChild(box)
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

/*

TO DO
[ ] Make country dropdown box using countries.json
[ ] Make state dropdown that only activates if USA is selected
[ ] Make city text input
[ ] Implement 'One Call API' (harvest lat./long. values from other api call first!)
[ ] Figure out how to display...
    - current conditions (weather, temp, visibility, today's hi/lo, 'Feels like')
    - hourly forecast (weather, precip chance, temp)
    - 7-day forecast (day AND night weather, precip chance, hi/lo temp)
    - UV index
    - sunrise/sunset
    - wind speed and direction
    - humidity
[ ] Add error handling for rejected calls and missing data fields

*/

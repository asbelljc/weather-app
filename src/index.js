import './style.sass';
import 'regenerator-runtime/runtime';
import countries from './countries.json';
import usStates from './us-states.json';
import usCities from './us-cities.json';
import getWeatherData from './weatherDataTools';
import loadMain from './mainTile';

getWeatherData('Boone', 'NC', 'US').then(loadMain);

// const usCityIds = Array.from(usCities, (city) => city.id);
// const usStateNames = Object.values(usStates);
// const usStateCodes = Object.keys(usStates);

// const body = document.querySelector('body');

// const temperatureBox = document.createElement('div');
// temperatureBox.className = 'temperature';

// const cityBox = document.createElement('div');
// cityBox.className = 'city';

// const stateBox = document.createElement('div');
// stateBox.className = 'state';

// const cityInput = document.createElement('input');
// cityInput.type = 'text';
// cityInput.className = 'search-box';
// cityInput.placeholder = 'Enter your city';

// const stateInput = document.createElement('select');
// const stateInputDefault = document.createElement('option');
// stateInputDefault.textContent = 'Select your state';
// stateInputDefault.value = '';
// stateInput.appendChild(stateInputDefault);
// usStateNames.forEach((state) => {
//   const option = document.createElement('option');
//   option.textContent = state;
//   option.value = usStateCodes.filter((code) => usStates[code] === state);
//   stateInput.appendChild(option);
// });

// const searchBtn = document.createElement('button');
// searchBtn.type = 'button';
// searchBtn.textContent = 'Search';
// searchBtn.className = 'search-btn';
// searchBtn.addEventListener('click', () => {
//   let inputs = cityInput.value.split(',');
//   inputs = inputs.map((item) => item.trim());
//   getWeatherData(...inputs);
// });

// [temperatureBox, cityBox, stateBox, cityInput, stateInput, searchBtn].forEach(
//   (box) => body.appendChild(box)
// );

// getWeatherData('boone', 'nc', 'us');

/*

TO DO
[ ] Make country dropdown box using countries.json
[ ] Make state dropdown that only activates if USA is selected
[ ] Make city text input
[x] Implement 'One Call API' (harvest lat./long. values from other api call first!)
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

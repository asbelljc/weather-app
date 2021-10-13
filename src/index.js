import './style.scss';
import 'regenerator-runtime/runtime';
import getWeatherData from './weatherDataTools';
import loadModal from './modal';
import loadMain from './mainTile';
import loadDaily from './dailyTile';
import loadAuxiliary from './auxTile';

getWeatherData('Hendersonville', 'NC', 'US').then((data) => {
  const background = require(`./Backgrounds/${data.current.iconCode}.jpg`);
  document.documentElement.style.backgroundImage = `url(${background})`;
  loadMain(data);
  loadDaily(data);
  loadAuxiliary(data);
});

// linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0) 50%),

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
[ ] Add error handling for rejected calls and missing data fields
[ ] Make clock update every minute, weather data every 15 minutes

*/

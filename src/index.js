import './style.scss';
import 'regenerator-runtime/runtime';
import getWeatherData from './weatherDataTools';
import loadModal from './modal';
import loadMain from './mainTile';
import loadDaily from './dailyTile';
import loadAuxiliary from './auxTile';
import getLocalDateAndTime from './timeTools';

let currentData; // for caching current locale data

function clearTiles() {
  const root = document.getElementById('root');
  const tiles = Array.from(document.getElementsByClassName('tile'));
  tiles.forEach((tile) => root.removeChild(tile));
}

function addUnitsHandler() {
  const unitBtns = document.querySelector('.unit-btns');

  unitBtns.addEventListener('click', (e) => {
    if (e.target.classList.contains('in-use')) return;

    const metric = e.target.className === 'metric-btn' ? true : false;

    clearTiles(); // Removes click listeners too...
    loadMain(currentData, metric);
    loadDaily(currentData, metric);
    loadAuxiliary(currentData, metric);
    addUnitsHandler(); // ...which is why
    addLocationHandler(); // we need these.
  });
}

function addLocationHandler() {
  const changeLocation = document.querySelector('.change-location');
  changeLocation.addEventListener('click', openModal);
}

async function showWeather(city, state, country) {
  currentData = await getWeatherData(city, state, country);

  const backgroundImg = require(`./Backgrounds/${currentData.current.iconCode}.jpg`);
  document.querySelector(
    '#background'
  ).style.backgroundImage = `url(${backgroundImg})`;

  clearTiles();
  loadMain(currentData);
  loadDaily(currentData);
  loadAuxiliary(currentData);
  addUnitsHandler();
  addLocationHandler();
}

function closeModal() {
  const modal = document.querySelector('.modal');

  modal.classList.remove('open');
  setTimeout(() => document.body.removeChild(modal), 0);
}

function showModal() {
  const modal = document.querySelector('.modal');
  setTimeout(() => modal.classList.add('open'), 0);
}

function addModalHandlers() {
  const modal = document.querySelector('.modal');
  const searchBtn = document.querySelector('.search-btn');
  const closeBtn = document.querySelector('.close-btn');
  const cityInput = document.querySelector('.city-input');
  const stateInput = document.querySelector('.state-input');
  const countryInput = document.querySelector('.country-input');
  const noWeatherYet = !document.querySelector('.tile');

  if (noWeatherYet) closeBtn.style.visibility = 'hidden';

  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', (e) => {
    if (e.target === modal && !noWeatherYet) {
      closeModal();
    } // close if anywhere outside modal-content is clicked (if weather already shown)
  });

  searchBtn.addEventListener('click', () => {
    showWeather(cityInput.value, stateInput.value, countryInput.value);
    closeModal();
  });
}

function openModal() {
  loadModal();
  showModal();
  addModalHandlers();
}

const refreshClock = setInterval(() => {
  if (!!currentData) {
    const currentUnixTime = Math.round(Date.now() / 1000); // unix time uses seconds instead of ms
    const dateAndTime = document.getElementsByClassName('date-and-time')[0];

    dateAndTime.textContent = getLocalDateAndTime(
      currentUnixTime,
      currentData.current.dateAndTime.timezoneOffset
    ).fullDateAndTime;
  }
}, 30000);

openModal();

// getWeatherData('Colorado Springs', 'CO', 'US').then((data) => {
//   currentData = data; // cache current locale data

//   const background = require(`./Backgrounds/${data.current.iconCode}.jpg`);
//   document.documentElement.style.backgroundImage = `url(${background})`;

//   loadMain(data);
//   loadDaily(data);
//   loadAuxiliary(data);
//   loadModal();
//   handleUnits();
// });

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

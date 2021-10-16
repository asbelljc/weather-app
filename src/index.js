import './style.scss';
import 'regenerator-runtime/runtime';
import getWeatherData from './weatherDataTools';
import loadModal from './modal';
import loadMain from './mainTile';
import loadDaily from './dailyTile';
import loadAuxiliary from './auxTile';
import getLocalDateAndTime from './timeTools';

let currentData; // for caching current locale data
let refreshInterval; // for auto-updating weather

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

  clearInterval(refreshInterval);
  setTimeout(refreshWeather, 0);
}

function closeModal() {
  const modal = document.querySelector('.modal');

  modal.classList.remove('open');
  setTimeout(() => document.body.removeChild(modal), 400);
}

function showModal() {
  const modal = document.querySelector('.modal');
  setTimeout(() => modal.classList.add('open'), 0);
}

function addModalHandlers() {
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-content');
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
      closeModal(); // close if anywhere outside modal-content is clicked (unless no weather shown)
    }
  });

  searchBtn.addEventListener('click', () => {
    if (!cityInput.value && !countryInput.value) {
      modalContent.setAttribute('error', 'Please enter a location');
    } else if (!cityInput.value) {
      modalContent.setAttribute('error', 'Please enter a city');
    } else if (!countryInput.value) {
      modalContent.setAttribute('error', 'Please enter a country');
    } else {
      showWeather(cityInput.value.trim(), stateInput.value, countryInput.value);
      closeModal();
    }
  });
}

function openModal() {
  loadModal();
  showModal();
  addModalHandlers();
}

function refreshWeather() {
  // refresh data every 10 minutes
  refreshInterval = setInterval(() => {
    showWeather(currentData.city, currentData.state, currentData.country);
    console.log('hey');
  }, 600000);
}

const refreshClock = setInterval(() => {
  // refresh clock every 30 seconds
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

/*

TO DO
[ ] Add error handling for rejected calls

*/

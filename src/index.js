import './style.scss';
import 'regenerator-runtime/runtime';
import getWeatherData from './weatherDataTools';
import openModal from './modal';
import loadMain from './mainTile';
import loadDaily from './dailyTile';
import loadAuxiliary from './auxTile';
import getLocalDateAndTime from './timeTools';

let currentData; // cache current locale weather data for easier unit change
let isMetricSet = false; // cache units so they stay the same after location change
let updateInterval; // for auto-updating weather

// MDN's suggested check for localStorage availability.
function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function setLocalStorage() {
  if (storageAvailable('localStorage')) {
    // only need to save location data to localStorage
    localStorage.setItem(
      'currentData',
      JSON.stringify({
        city: currentData.city,
        state: currentData.state,
        country: currentData.country,
      })
    );
    localStorage.setItem('isMetricSet', JSON.stringify(isMetricSet));
  }
}

function getLocalStorage() {
  if (storageAvailable('localStorage')) {
    currentData = JSON.parse(localStorage.getItem('currentData'));
    isMetricSet = JSON.parse(localStorage.getItem('isMetricSet'));
  }
}

function clearTiles() {
  const root = document.getElementById('root');
  const tiles = Array.from(document.getElementsByClassName('tile'));
  tiles.forEach((tile) => root.removeChild(tile));
}

function updateUnits(e) {
  if (e.target.classList.contains('in-use')) return;

  isMetricSet = e.target.className === 'metric-btn' ? true : false;

  showWeather();
}

async function cacheWeatherData(city, state, country) {
  currentData = await getWeatherData(city, state, country);
}

function showWeather() {
  const backgroundImg = require(`./Backgrounds/${currentData.current.iconCode}.jpg`);
  document.querySelector(
    '#background'
  ).style.backgroundImage = `url(${backgroundImg})`;

  clearTiles();
  loadMain(currentData, isMetricSet);
  loadDaily(currentData, isMetricSet);
  loadAuxiliary(currentData, isMetricSet);

  setLocalStorage();
}

async function updateWeather(city, state, country) {
  await cacheWeatherData(city, state, country).then(() => {
    showWeather();
    setAutoUpdate();
  });
}

function setAutoUpdate() {
  // update weather every 10 minutes
  clearInterval(updateInterval);
  updateInterval = setInterval(() => {
    updateWeather(currentData.city, currentData.state, currentData.country);
  }, 600000);
}

function refreshClock() {
  setInterval(() => {
    // refresh clock every 30 seconds
    if (currentData) {
      const currentUnixTime = Math.round(Date.now() / 1000); // unix time uses seconds instead of ms
      const dateAndTime = document.getElementsByClassName('date-and-time')[0];

      dateAndTime.textContent = getLocalDateAndTime(
        currentUnixTime,
        currentData.current.dateAndTime.timezoneOffset
      ).fullDateAndTime;
    }
  }, 30000);
}

const loadWebsite = (() => {
  getLocalStorage();

  if (currentData) {
    updateWeather(currentData.city, currentData.state, currentData.country);
  } else {
    openModal();
  }

  refreshClock();
})();

export { updateWeather, updateUnits };

import './style.scss';
import 'regenerator-runtime/runtime';
import getWeatherData from './weatherDataTools';
import openModal from './modal';
import loadMain from './mainTile';
import loadDaily from './dailyTile';
import loadAuxiliary from './auxTile';
import getLocalDateAndTime from './timeTools';

let currentData; // for caching current locale data
let isMetricSet = false; // for caching selected units
let updateInterval; // for auto-updating weather

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
}

function updateWeather(city, state, country) {
  cacheWeatherData(city, state, country).then(() => {
    showWeather();
    setAutoUpdate();
  });
}

function setAutoUpdate() {
  clearInterval(updateInterval);
  updateInterval = setInterval(() => {
    updateWeather(currentData.city, currentData.state, currentData.country);
  }, 600000);
}

function refreshClock() {
  setInterval(() => {
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
}

openModal();

refreshClock();

export { updateWeather, updateUnits };

/*

TO DO
[ ] Add error handling for rejected calls

*/

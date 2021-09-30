import countries from './countries.json';
import usStates from './us-states.json';
import usCities from './us-cities.json';
import getLocalDateAndTime from './timeTools.js';

const usCityIds = Array.from(usCities, (city) => city.id);
const usStateNames = Object.values(usStates);
const usStateCodes = Object.keys(usStates);

async function getBasicDataSource(city, state, country) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&appid=37ed2f3dbba73d4855aa2f683c7e3232`
  );
  const basicDataSource = await response.json();

  return basicDataSource;
}

// SOMEWHAT sure that this can be synchronous...
function getState(source) {
  return usCities.filter((city) => city.id === source.id)[0].state;
}

async function getComplexDataSource(city, state, country) {
  const basicDataSource = await getBasicDataSource(city, state, country);
  const latitude = basicDataSource.coord.lat;
  const longitude = basicDataSource.coord.lon;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely&appid=37ed2f3dbba73d4855aa2f683c7e3232`
  );

  const complexDataSource = await response.json();

  return complexDataSource;
}

async function getWeatherData(city, state = '', country) {
  const rawData = await getComplexDataSource(city, state, country);
}

// NOTES
// api hourly data starts at most recent hour (eg. if it's now 6:20pm, 6pm)

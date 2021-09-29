import countries from './countries.json';
import usStates from './us-states.json';
import usCities from './us-cities.json';

const usCityIds = Array.from(usCities, (city) => city.id);
const usStateNames = Object.values(usStates);
const usStateCodes = Object.keys(usStates);

async function getBasicsSource(city, state, country) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&appid=37ed2f3dbba73d4855aa2f683c7e3232`
  );
  const json = await data.json();

  return json;
}
// SOMEWHAT sure that this can be synchronous...
function getState(source) {
  return usCities.filter((city) => city.id === source.id)[0].state;
}

async function getWeatherData(city, state = '', country) {
  const basicsSource = await getBasicsSource(city, state, country);
  const latitude = basicsSource.coord.lat;
  const longitude = basicsSource.coord.lon;
  const stateFromApi = getState(basicsSource);

  const rawData = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely&appid=37ed2f3dbba73d4855aa2f683c7e3232`
  );

  const rawJson = await rawData.json();

  console.log(stateFromApi);
}

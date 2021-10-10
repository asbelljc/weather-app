import usCities from './us-cities.json';
import getLocalDateAndTime from './timeTools';

function convertToCelsius(temperature) {
  return Math.round((temperature - 32) * (5 / 9));
}

function convertToKmh(windSpeed) {
  return Math.round(windSpeed * 1.609);
}

function convertUvIndex(uvIndex) {
  if (uvIndex < 3) return 'Low';
  if (uvIndex < 6) return 'Moderate';
  if (uvIndex < 8) return 'High';
  if (uvIndex < 11) return 'Very high';
  return 'Extreme';
}

async function getBasicDataSource(city, state, country) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&appid=37ed2f3dbba73d4855aa2f683c7e3232`
  );
  const basicDataSource = await response.json();

  return basicDataSource;
}

// SOMEWHAT sure that this can be synchronous...
// Might need additional error handling
function getState(source) {
  return source.sys.country === 'US'
    ? usCities.filter((city) => city.id === source.id)[0].state
    : null;
}

async function getComplexDataSource(city, state, country) {
  const basicDataSource = await getBasicDataSource(city, state, country);
  const latitude = basicDataSource.coord.lat;
  const longitude = basicDataSource.coord.lon;
  const cityFromApi = basicDataSource.name;
  const stateFromApi = getState(basicDataSource);
  const countryFromApi = basicDataSource.sys.country;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely&appid=37ed2f3dbba73d4855aa2f683c7e3232`
  );

  const complexDataSource = await response.json();

  // This place data fills in gaps in the API response and allows user to
  // confirm the data is indeed for the city they requested
  complexDataSource.city = cityFromApi;
  complexDataSource.state = stateFromApi;
  complexDataSource.country = countryFromApi;

  return complexDataSource;
}

function getCurrentData(source) {
  const dateAndTime = getLocalDateAndTime(
    // might change to use just a property
    source.current.dt,
    source.timezone_offset
  );
  const iconCode = source.current.weather[0].icon;
  const temperature = {
    f: Math.round(source.current.temp),
    c: convertToCelsius(source.current.temp),
  };
  const feelsLike = {
    f: Math.round(source.current.feels_like),
    c: convertToCelsius(source.current.feels_like),
  };
  const uvIndex = convertUvIndex(source.current.uvi);
  const sunrise = getLocalDateAndTime(
    source.current.sunrise,
    source.timezone_offset
  ).fullTime;
  const sunset = getLocalDateAndTime(
    source.current.sunset,
    source.timezone_offset
  ).fullTime;
  const windSpeed = {
    mph: `${Math.round(source.current.wind_speed)} mph`,
    kmh: `${convertToKmh(source.current.wind_speed)} km/h`,
  };
  const windDirection = source.current.wind_deg; // don't forget to use DOWN arrow icon
  const { humidity } = source.current;

  return {
    dateAndTime,
    iconCode,
    temperature,
    feelsLike,
    uvIndex,
    sunrise,
    sunset,
    windSpeed,
    windDirection,
    humidity,
  };
}

function getHourlyData(source) {
  const next24Hours = source.hourly.slice(0, 24);
  const hourlyData = next24Hours.map((dataObject) => {
    const time = getLocalDateAndTime(
      dataObject.dt,
      source.timezone_offset
    ).fullTime;
    const iconCode = dataObject.weather[0].icon;
    const temperature = {
      f: Math.round(dataObject.temp),
      c: convertToCelsius(dataObject.temp),
    };
    const chanceOfPrecip = dataObject.pop;

    return { time, iconCode, temperature, chanceOfPrecip };
  });

  return hourlyData;
}

function getDailyData(source) {
  const dailyData = source.daily.map((dataObject) => {
    const { day } = getLocalDateAndTime(dataObject.dt, source.timezone_offset);
    const iconCode = dataObject.weather[0].icon;
    const highTemp = {
      f: Math.round(dataObject.temp.max),
      c: convertToCelsius(dataObject.temp.max),
    };
    const lowTemp = {
      f: Math.round(dataObject.temp.min),
      c: convertToCelsius(dataObject.temp.min),
    };
    const chanceOfPrecip = dataObject.pop;

    return { day, iconCode, highTemp, lowTemp, chanceOfPrecip };
  });

  return dailyData;
}

async function getWeatherData(city, state = '', country) {
  const rawData = await getComplexDataSource(city, state, country);
  const cityName = rawData.city;
  const stateName = rawData.state;
  const countryName = rawData.country;
  const currentData = getCurrentData(rawData);
  const hourlyData = getHourlyData(rawData);
  const dailyData = getDailyData(rawData);

  return {
    city: cityName,
    state: stateName,
    country: countryName,
    current: currentData,
    hourly: hourlyData,
    daily: dailyData,
  };
}

export default getWeatherData;

// NOTES
// api hourly data starts with most recent hour (eg. if it's now 6:20pm, 6pm)
// api daily data starts with current day

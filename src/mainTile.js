function makeHeader(weatherData) {
  const state = weatherData.state ? weatherData.state : weatherData.country;

  const header = document.createElement('div');
  header.className = 'header';
  const placeName = document.createElement('h2');
  placeName.className = 'place-name';
  placeName.textContent = `${weatherData.city}, ${state}`;
  const dateAndTime = document.createElement('div');
  dateAndTime.className = 'date-and-time';
  dateAndTime.textContent = weatherData.current.dateAndTime.fullDateAndTime;

  header.appendChild(placeName);
  header.appendChild(dateAndTime);

  return header;
}

function makeCurrent(weatherData) {
  const current = document.createElement('div');
  current.className = 'current';
  const icon = document.createElement('img');
  icon.className = 'icon';
  icon.src = require(`./Icons/${weatherData.current.iconCode}.svg`);
  const info = document.createElement('div');
  info.className = 'info';
  const temperature = document.createElement('div');
  temperature.className = 'temperature';
  temperature.textContent = `${weatherData.current.temperature.f}°`;
  const hiLoFeel = document.createElement('div');
  hiLoFeel.className = 'hi-lo-feel';
  hiLoFeel.innerText = `${weatherData.daily[0].highTemp.f}° / ${weatherData.daily[0].lowTemp.f}°
    Feels like ${weatherData.current.feelsLike.f}°`;

  info.appendChild(temperature);
  info.appendChild(hiLoFeel);
  current.appendChild(icon);
  current.appendChild(info);

  return current;
}

function makeHour(hourData) {
  const tile = document.createElement('div');
  tile.className = 'hour';
  const time = document.createElement('div');
  time.className = 'time';
  time.textContent = hourData.time;
  const icon = document.createElement('img');
  icon.className = 'icon';
  icon.src = require(`./Icons/${hourData.iconCode}.svg`);
  const temperature = document.createElement('div');
  temperature.className = 'temperature';
  temperature.textContent = `${hourData.temperature.f}°`;
  const precipitation = document.createElement('div');
  precipitation.className = 'precipitation';
  const raindrop = document.createElement('img');
  raindrop.src = require('./Icons/raindrop.svg');
  const percentage = document.createElement('div');
  percentage.textContent = `${Math.round(hourData.chanceOfPrecip * 100)}%`;

  [raindrop, percentage].forEach((elem) => precipitation.appendChild(elem));
  [time, icon, temperature, precipitation].forEach((elem) => {
    tile.appendChild(elem);
  });

  return tile;
}

function makeHourly(weatherData) {
  const hourly = document.createElement('div');
  hourly.className = 'hourly';
  const hours = weatherData.hourly.map(makeHour);

  hours.forEach((hour) => hourly.appendChild(hour));

  return hourly;
}

function makeMain(weatherData) {
  const main = document.createElement('div');
  main.className = 'tile';
  const header = makeHeader(weatherData);
  const current = makeCurrent(weatherData);
  const hourly = makeHourly(weatherData);

  [header, current, hourly].forEach((elem) => main.appendChild(elem));

  return main;
}

function loadMain(weatherData) {
  const main = makeMain(weatherData);

  document.body.appendChild(main);
}

export default loadMain;

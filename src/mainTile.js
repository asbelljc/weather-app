function makeUnitButtons(metric) {
  const unitBtns = document.createElement('div');
  unitBtns.className = 'unit-btns';
  const standardBtn = document.createElement('button');
  standardBtn.className = 'standard-btn';
  standardBtn.type = 'button';
  standardBtn.textContent = 'Standard';
  const metricBtn = document.createElement('button');
  metricBtn.className = 'metric-btn';
  metricBtn.type = 'button';
  metricBtn.textContent = 'Metric';

  if (!!metric) {
    metricBtn.classList.add('in-use');
  } else {
    standardBtn.classList.add('in-use');
  }

  [standardBtn, metricBtn].forEach((elem) => unitBtns.appendChild(elem));

  return unitBtns;
}

function makeControlPanel(metric) {
  const controlPanel = document.createElement('div');
  controlPanel.className = 'control-panel';
  const units = makeUnitButtons(metric);
  const location = document.createElement('button');
  location.className = 'change-location';
  location.textContent = 'Change location';
  [units, location].forEach((elem) => controlPanel.appendChild(elem));

  return controlPanel;
}

function makeLocale(weatherData) {
  const state = weatherData.state ? weatherData.state : weatherData.country;

  const locale = document.createElement('div');
  locale.className = 'locale';
  const placeName = document.createElement('h2');
  placeName.className = 'place-name';
  placeName.textContent = `${weatherData.city}, ${state}`;
  const dateAndTime = document.createElement('div');
  dateAndTime.className = 'date-and-time';
  dateAndTime.textContent = weatherData.current.dateAndTime.fullDateAndTime;

  locale.appendChild(placeName);
  locale.appendChild(dateAndTime);

  return locale;
}

function makeCurrent(weatherData, metric) {
  const current = document.createElement('div');
  current.className = 'current';
  const icon = document.createElement('img');
  icon.className = 'icon';
  icon.src = require(`./Icons/${weatherData.current.iconCode}.svg`);
  const info = document.createElement('div');
  info.className = 'info';
  const temperature = document.createElement('div');
  temperature.className = 'temperature';
  temperature.textContent = !!metric
    ? `${weatherData.current.temperature.c}°`
    : `${weatherData.current.temperature.f}°`;
  const hiLoFeel = document.createElement('div');
  hiLoFeel.className = 'hi-lo-feel';
  hiLoFeel.innerText = !!metric
    ? `${weatherData.daily[0].highTemp.c}° / ${weatherData.daily[0].lowTemp.c}°
    Feels like ${weatherData.current.feelsLike.c}°`
    : `${weatherData.daily[0].highTemp.f}° / ${weatherData.daily[0].lowTemp.f}°
    Feels like ${weatherData.current.feelsLike.f}°`;

  info.appendChild(temperature);
  info.appendChild(hiLoFeel);
  current.appendChild(icon);
  current.appendChild(info);

  return current;
}

function makeHour(hourData, metric) {
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
  temperature.textContent = !!metric
    ? `${hourData.temperature.c}°`
    : `${hourData.temperature.f}°`;
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

function makeHourly(weatherData, metric) {
  const hourly = document.createElement('div');
  hourly.className = 'hourly';
  const hours = weatherData.hourly.map((hourData) =>
    makeHour(hourData, metric)
  );

  hours.forEach((hour) => hourly.appendChild(hour));

  return hourly;
}

function makeMain(weatherData, metric) {
  const main = document.createElement('div');
  main.className = 'tile';
  const controls = makeControlPanel(metric);
  const locale = makeLocale(weatherData);
  const current = makeCurrent(weatherData, metric);
  const hourly = makeHourly(weatherData, metric);

  [controls, locale, current, hourly].forEach((elem) => main.appendChild(elem));

  return main;
}

function loadMain(weatherData, metric) {
  const main = makeMain(weatherData, metric);

  document.getElementById('root').appendChild(main);
}

export default loadMain;

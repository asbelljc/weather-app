function makeHeader(weatherData) {
  const state = weatherData.state ? weatherData.state : weatherData.country;

  const header = document.createElement('div');
  header.className = 'header';
  const placeName = document.createElement('h1');
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
  icon.src = require(`./icons/${weatherData.current.iconCode}.svg`);
  const temperature = document.createElement('div');
  temperature.className = 'temperature';
  temperature.textContent = `${weatherData.current.temperature.f}°`;
  const hiLoFeel = document.createElement('div');
  hiLoFeel.className = 'hi-lo-feel';
  hiLoFeel.innerText = `
    ${weatherData.daily[0].highTemp.f} / ${weatherData.daily[0].lowTemp.f}
    Feels like ${weatherData.current.feelsLike.f}
  `;

  current.appendChild(icon);
  current.appendChild(temperature);
  current.appendChild(hiLoFeel);

  return current;
}

function makeHourly(weatherData) {
  const hourly = document.createElement('div');
  hourly.className = 'hourly';

  weatherData.hourly.forEach((hour) => {
    const tile = document.createElement('div');
    tile.className = 'hour';
    const time = document.createElement('div');
    time.className = 'time';
    time.textContent = `0${hour.hour}`;
    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = require(`./icons/${hour.iconCode}.svg`);
    const precipitation = document.createElement('div');
    precipitation.className = 'precipitation';
    const raindrop = document.createElement('img');
    raindrop.src = require('./icons/raindrop.svg');
    const percentage = document.createElement('div');
    percentage.textContent = `${hour.chanceOfPrecip * 100}%`;

    [raindrop, percentage].forEach((elem) => precipitation.appendChild(elem));
    [time, icon, precipitation].forEach((elem) => tile.appendChild(elem));
    hourly.appendChild(tile);
  });

  return hourly;
}

function loadMain(weatherData) {
  const main = document.createElement('div');
  main.className = 'main';
  const header = makeHeader(weatherData);
  const current = makeCurrent(weatherData);
  const hourly = makeHourly(weatherData);

  [header, current, hourly].forEach((elem) => main.appendChild(elem));

  document.body.appendChild(main);
}

export default loadMain;

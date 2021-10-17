function makeWeatherPanel(dayData) {
  const weatherPanel = document.createElement('div');
  weatherPanel.className = 'weather';
  const precipitation = document.createElement('div');
  precipitation.className = 'precipitation';
  const raindrop = document.createElement('img');
  raindrop.src = require('./Icons/raindrop.svg');
  const percentage = document.createElement('div');
  percentage.textContent = `${Math.round(dayData.chanceOfPrecip * 100)}%`;
  const icon = document.createElement('img');
  icon.className = 'icon';
  icon.src = require(`./Icons/Static/${dayData.iconCode}.svg`);

  [raindrop, percentage].forEach((elem) => precipitation.appendChild(elem));
  [precipitation, icon].forEach((elem) => weatherPanel.appendChild(elem));

  return weatherPanel;
}

function makeDay(dayData, metric) {
  const day = document.createElement('div');
  day.className = 'day';
  const name = document.createElement('div');
  name.className = 'name';
  name.textContent = `${dayData.day}`;
  const weather = makeWeatherPanel(dayData);
  const hiLo = document.createElement('div');
  hiLo.className = 'hi-lo';
  hiLo.innerText = !!metric
    ? `${dayData.highTemp.c}°/${dayData.lowTemp.c}°`
    : `${dayData.highTemp.f}°/${dayData.lowTemp.f}°`;

  [name, weather, hiLo].forEach((elem) => day.appendChild(elem));

  return day;
}

function makeDaily(weatherData, metric) {
  const daily = document.createElement('div');
  daily.className = 'tile';
  const dailyInfo = document.createElement('div');
  dailyInfo.className = 'daily';
  const days = weatherData.daily.map((dayData) => makeDay(dayData, metric));
  days[0].querySelector('.name').textContent = 'Today';

  days.forEach((day) => dailyInfo.appendChild(day));

  daily.appendChild(dailyInfo);

  return daily;
}

function loadDaily(weatherData, metric) {
  const daily = makeDaily(weatherData, metric);

  document.getElementById('root').appendChild(daily);
}

export default loadDaily;

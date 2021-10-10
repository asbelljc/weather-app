function makePanel(name, readoutDiv) {
  const panel = document.createElement('div');
  panel.className = 'aux-item';
  const icon = document.createElement('img');
  icon.className = 'icon';
  icon.src = `./Icons/${name}.svg`;
  const nameBox = document.createElement('div');
  nameBox.className = 'name';
  nameBox.textContent = name;

  [icon, nameBox, readoutDiv].forEach((elem) => panel.appendChild(elem));

  return panel;
}

function makeAuxiliary(weatherData) {
  const auxiliary = document.createElement('div');
  auxiliary.className = 'tile';
  const auxInfo = document.createElement('div');
  auxInfo.className = 'auxiliary';

  const uvReadout = document.createElement('div');
  uvReadout.className = 'readout';
  uvReadout.textContent = weatherData.current.uvIndex;

  const sunriseReadout = document.createElement('div');
  sunriseReadout.className = 'readout';
  sunriseReadout.textContent = weatherData.current.sunrise;

  const sunsetReadout = document.createElement('div');
  sunsetReadout.className = 'readout';
  sunsetReadout.textContent = weatherData.current.sunset;

  const windReadout = document.createElement('div');
  windReadout.className = 'readout';
  const direction = document.createElement('img');
  direction.src = './Icons/arrow.svg';
  direction.style.transform = `rotate(${weatherData.current.windDirection}deg)`;
  const speed = document.createElement('div');
  speed.textContent = weatherData.current.windSpeed;
  [direction, speed].forEach((elem) => windReadout.appendChild(elem));

  const humidityReadout = document.createElement('div');
  humidityReadout.className = 'readout';
  humidityReadout.textContent = weatherData.current.humidity;

  const [uv, sunrise, sunset, wind, humidity] = [
    ['UV Index', uvReadout],
    ['Sunrise', sunriseReadout],
    ['Sunset', sunsetReadout],
    ['Wind', windReadout],
    ['Humidity', humidityReadout],
  ].forEach((auxItem) => makePanel(...auxItem));

  [uv, sunrise, sunset, wind, humidity].forEach((elem) =>
    auxInfo.appendChild(elem)
  );

  auxiliary.appendChild(auxInfo);

  return auxiliary;
}

function loadAuxiliary(weatherData) {
  const auxiliary = makeAuxiliary(weatherData);

  document.body.appendChild(auxiliary);
}

export default loadAuxiliary;

import { updateWeather } from './index';
import usStates from './us-states.json';
import countries from './countries.json';

const usStateNames = Object.values(usStates);
const usStateCodes = Object.keys(usStates);
const countryNames = Object.values(countries).sort((a, b) => (a < b ? -1 : 1));
const countryCodes = Object.keys(countries);

function makeCityInput() {
  const cityInput = document.createElement('input');
  cityInput.className = 'city-input';
  cityInput.type = 'text';
  cityInput.placeholder = 'City';

  return cityInput;
}

function makeStateInput() {
  const stateInput = document.createElement('select');
  stateInput.className = 'state-input';
  stateInput.disabled = true;

  const stateDefault = document.createElement('option');
  stateDefault.textContent = 'State or Territory (US only)';
  stateDefault.value = '';
  stateInput.appendChild(stateDefault);

  usStateNames.forEach((state) => {
    const option = document.createElement('option');
    option.textContent = state;
    option.value = usStateCodes.filter((code) => usStates[code] === state);
    stateInput.appendChild(option);
  });

  return stateInput;
}

function makeCountryInput() {
  const countryInput = document.createElement('select');
  countryInput.className = 'country-input';
  countryInput.oninput = () => {
    if (countryInput.value === 'US') {
      document.querySelector('.state-input').disabled = false;
    }
  };

  const countryDefault = document.createElement('option');
  countryDefault.textContent = 'Country';
  countryDefault.value = '';
  countryInput.appendChild(countryDefault);

  countryNames.forEach((country) => {
    const option = document.createElement('option');
    option.textContent = country;
    option.value = countryCodes.filter((code) => countries[code] === country);
    countryInput.appendChild(option);
  });

  return countryInput;
}

function makeModal() {
  const noWeatherYet = !document.querySelector('.tile');

  const modal = document.createElement('div');
  modal.className = 'modal';
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  modal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  });

  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-btn';
  closeBtn.type = 'button';
  if (noWeatherYet) closeBtn.style.visibility = 'hidden';
  const cross = document.createElement('img');
  cross.src = require('./Icons/cross.svg');
  closeBtn.appendChild(cross);
  closeBtn.addEventListener('click', closeModal);

  const inputs = document.createElement('div');
  inputs.className = 'inputs';
  const cityInput = makeCityInput();
  const countryInput = makeCountryInput();
  const stateInput = makeStateInput();
  [cityInput, countryInput, stateInput].forEach((input) => {
    inputs.appendChild(input);
  });

  const searchBtn = document.createElement('button');
  searchBtn.className = 'search-btn';
  searchBtn.type = 'button';
  searchBtn.textContent = 'Search';
  searchBtn.addEventListener('click', goToWeather);

  [closeBtn, inputs, searchBtn].forEach((elem) => {
    modalContent.appendChild(elem);
  });

  modal.appendChild(modalContent);

  return modal;
}

function loadModal() {
  const modal = makeModal();
  document.body.appendChild(modal);
}

function showModal() {
  const modal = document.querySelector('.modal');
  setTimeout(() => modal.classList.add('open'), 0);
}

function openModal() {
  loadModal();
  showModal();
}

function closeModal() {
  const modal = document.querySelector('.modal');

  modal.classList.remove('open');
  setTimeout(() => document.body.removeChild(modal), 400);
}

function goToWeather() {
  const modalContent = document.querySelector('.modal-content');
  const cityInput = document.querySelector('.city-input');
  const stateInput = document.querySelector('.state-input');
  const countryInput = document.querySelector('.country-input');

  if (!cityInput.value && !countryInput.value) {
    modalContent.setAttribute('error', 'Please enter a location');
  } else if (!cityInput.value) {
    modalContent.setAttribute('error', 'Please enter a city');
  } else if (!countryInput.value) {
    modalContent.setAttribute('error', 'Please enter a country');
  } else {
    updateWeather(cityInput.value.trim(), stateInput.value, countryInput.value);
    closeModal();
  }
}

export default openModal;

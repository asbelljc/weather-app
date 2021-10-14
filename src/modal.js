import usStates from './us-states.json';
import countries from './countries.json';

const usStateNames = Object.values(usStates);
const usStateCodes = Object.keys(usStates);
const countryNames = Object.values(countries);
const countryCodes = Object.keys(countries);

function makeCityInput() {
  const cityInput = document.createElement('input');
  cityInput.className = 'city-input';
  cityInput.type = 'text';
  cityInput.placeholder = 'Please enter your city';

  return cityInput;
}

function makeStateInput() {
  const stateInput = document.createElement('select');
  stateInput.className = 'state-input';
  const stateDefault = document.createElement('option');
  stateDefault.textContent = 'State (US only)';
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
  const modal = document.createElement('div');
  modal.className = 'modal';
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  const cityInput = makeCityInput();
  const stateInput = makeStateInput();
  const countryInput = makeCountryInput();

  [cityInput, stateInput, countryInput].forEach((input) =>
    modalContent.appendChild(input)
  );

  modal.appendChild(modalContent);

  return modal;
}

function loadModal() {
  const modal = makeModal();
  document.getElementById('root').appendChild(modal);
}

export default loadModal;
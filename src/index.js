import './style.css';

const test = document.createElement('div');
test.id = 'test';
test.textContent = 'test';

const body = document.querySelector('body');

body.appendChild(test);

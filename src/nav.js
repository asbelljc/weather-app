function makeUnitsPanel() {
  const unitsPanel = document.createElement('div');
  unitsPanel.className = 'units-panel';
  const label = document.createElement('div');
  label.textContent = 'Units:';
  const standard = document.createElement('button');
  standard.className = 'standard-btn';
  standard.type = 'button';
  standard.textContent = 'Standard';
  const metric = document.createElement('button');
  metric.className = 'metric-btn';
  metric.type = 'button';
  metric.textContent = 'Metric';

  [label, standard, metric].forEach((elem) => unitsPanel.appendChild(elem));

  return unitsPanel;
}

function makeNav() {
  const nav = document.createElement('div');
  nav.className = 'nav';
  const units = makeUnitsPanel();
  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'WEATHER';
  const location = document.createElement('button');
  location.className = 'change-location';
  location.textContent = 'Change location'[(units, title, location)].forEach(
    (elem) => nav.appendChild(elem)
  );

  return nav;
}

function loadNav() {
  const nav = makeNav();
  document.body.appendChild(nav);
}

export default loadNav;

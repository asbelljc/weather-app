/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/auxTile.js":
/*!************************!*\
  !*** ./src/auxTile.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function makePanel(name, readoutDiv) {
  var panel = document.createElement('div');
  panel.className = 'aux-item';
  var icon = document.createElement('img');
  icon.className = 'icon';
  icon.src = __webpack_require__("./src/Icons sync recursive ^\\.\\/.*\\.svg$")("./".concat(name, ".svg"));
  var nameBox = document.createElement('div');
  nameBox.className = 'name';
  nameBox.textContent = name;
  [icon, nameBox, readoutDiv].forEach(function (elem) {
    return panel.appendChild(elem);
  });
  return panel;
}

function makeAuxiliary(weatherData) {
  var auxiliary = document.createElement('div');
  auxiliary.className = 'tile';
  var auxInfo = document.createElement('div');
  auxInfo.className = 'auxiliary';
  var uvReadout = document.createElement('div');
  uvReadout.className = 'readout';
  uvReadout.textContent = weatherData.current.uvIndex;
  var sunriseReadout = document.createElement('div');
  sunriseReadout.className = 'readout';
  sunriseReadout.textContent = weatherData.current.sunrise;
  var sunsetReadout = document.createElement('div');
  sunsetReadout.className = 'readout';
  sunsetReadout.textContent = weatherData.current.sunset;
  var windReadout = document.createElement('div');
  windReadout.className = 'readout';
  var direction = document.createElement('img');
  direction.src = __webpack_require__(/*! ./Icons/arrow.svg */ "./src/Icons/arrow.svg");
  direction.style.transform = "rotate(".concat(weatherData.current.windDirection, "deg)");
  var speed = document.createElement('div');
  speed.textContent = weatherData.current.windSpeed.mph;
  [direction, speed].forEach(function (elem) {
    return windReadout.appendChild(elem);
  });
  var humidityReadout = document.createElement('div');
  humidityReadout.className = 'readout';
  humidityReadout.textContent = "".concat(weatherData.current.humidity, "%");

  var _map = [['UV Index', uvReadout], ['Sunrise', sunriseReadout], ['Sunset', sunsetReadout], ['Wind', windReadout], ['Humidity', humidityReadout]].map(function (auxItem) {
    return makePanel.apply(void 0, _toConsumableArray(auxItem));
  }),
      _map2 = _slicedToArray(_map, 5),
      uv = _map2[0],
      sunrise = _map2[1],
      sunset = _map2[2],
      wind = _map2[3],
      humidity = _map2[4];

  [uv, sunrise, sunset, wind, humidity].forEach(function (elem) {
    return auxInfo.appendChild(elem);
  });
  auxiliary.appendChild(auxInfo);
  return auxiliary;
}

function loadAuxiliary(weatherData) {
  var auxiliary = makeAuxiliary(weatherData);
  document.getElementById('root').appendChild(auxiliary);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAuxiliary);

/***/ }),

/***/ "./src/dailyTile.js":
/*!**************************!*\
  !*** ./src/dailyTile.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function makeWeatherPanel(dayData) {
  var weatherPanel = document.createElement('div');
  weatherPanel.className = 'weather';
  var precipitation = document.createElement('div');
  precipitation.className = 'precipitation';
  var raindrop = document.createElement('img');
  raindrop.src = __webpack_require__(/*! ./Icons/raindrop.svg */ "./src/Icons/raindrop.svg");
  var percentage = document.createElement('div');
  percentage.textContent = "".concat(Math.round(dayData.chanceOfPrecip * 100), "%");
  var icon = document.createElement('img');
  icon.className = 'icon';
  icon.src = __webpack_require__("./src/Icons sync recursive ^\\.\\/.*\\.svg$")("./".concat(dayData.iconCode, ".svg"));
  [raindrop, percentage].forEach(function (elem) {
    return precipitation.appendChild(elem);
  });
  [precipitation, icon].forEach(function (elem) {
    return weatherPanel.appendChild(elem);
  });
  return weatherPanel;
}

function makeDay(dayData) {
  var day = document.createElement('div');
  day.className = 'day';
  var name = document.createElement('div');
  name.className = 'name';
  name.textContent = "".concat(dayData.day);
  var weather = makeWeatherPanel(dayData);
  var hiLo = document.createElement('div');
  hiLo.className = 'hi-lo';
  hiLo.innerText = "".concat(dayData.highTemp.f, "\xB0/").concat(dayData.lowTemp.f, "\xB0");
  [name, weather, hiLo].forEach(function (elem) {
    return day.appendChild(elem);
  });
  return day;
}

function makeDaily(weatherData) {
  var daily = document.createElement('div');
  daily.className = 'tile';
  var dailyInfo = document.createElement('div');
  dailyInfo.className = 'daily';
  var days = weatherData.daily.map(makeDay);
  days.forEach(function (day) {
    return dailyInfo.appendChild(day);
  });
  daily.appendChild(dailyInfo);
  return daily;
}

function loadDaily(weatherData) {
  var daily = makeDaily(weatherData);
  document.getElementById('root').appendChild(daily);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadDaily);

/***/ }),

/***/ "./src/mainTile.js":
/*!*************************!*\
  !*** ./src/mainTile.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function makeLocale(weatherData) {
  var state = weatherData.state ? weatherData.state : weatherData.country;
  var locale = document.createElement('div');
  locale.className = 'locale';
  var placeName = document.createElement('h2');
  placeName.className = 'place-name';
  placeName.textContent = "".concat(weatherData.city, ", ").concat(state);
  var dateAndTime = document.createElement('div');
  dateAndTime.className = 'date-and-time';
  dateAndTime.textContent = weatherData.current.dateAndTime.fullDateAndTime;
  locale.appendChild(placeName);
  locale.appendChild(dateAndTime);
  return locale;
}

function makeCurrent(weatherData) {
  var current = document.createElement('div');
  current.className = 'current';
  var icon = document.createElement('img');
  icon.className = 'icon';
  icon.src = __webpack_require__("./src/Icons sync recursive ^\\.\\/.*\\.svg$")("./".concat(weatherData.current.iconCode, ".svg"));
  var info = document.createElement('div');
  info.className = 'info';
  var temperature = document.createElement('div');
  temperature.className = 'temperature';
  temperature.textContent = "".concat(weatherData.current.temperature.f, "\xB0");
  var hiLoFeel = document.createElement('div');
  hiLoFeel.className = 'hi-lo-feel';
  hiLoFeel.innerText = "".concat(weatherData.daily[0].highTemp.f, "\xB0 / ").concat(weatherData.daily[0].lowTemp.f, "\xB0\n    Feels like ").concat(weatherData.current.feelsLike.f, "\xB0");
  info.appendChild(temperature);
  info.appendChild(hiLoFeel);
  current.appendChild(icon);
  current.appendChild(info);
  return current;
}

function makeHour(hourData) {
  var tile = document.createElement('div');
  tile.className = 'hour';
  var time = document.createElement('div');
  time.className = 'time';
  time.textContent = hourData.time;
  var icon = document.createElement('img');
  icon.className = 'icon';
  icon.src = __webpack_require__("./src/Icons sync recursive ^\\.\\/.*\\.svg$")("./".concat(hourData.iconCode, ".svg"));
  var temperature = document.createElement('div');
  temperature.className = 'temperature';
  temperature.textContent = "".concat(hourData.temperature.f, "\xB0");
  var precipitation = document.createElement('div');
  precipitation.className = 'precipitation';
  var raindrop = document.createElement('img');
  raindrop.src = __webpack_require__(/*! ./Icons/raindrop.svg */ "./src/Icons/raindrop.svg");
  var percentage = document.createElement('div');
  percentage.textContent = "".concat(Math.round(hourData.chanceOfPrecip * 100), "%");
  [raindrop, percentage].forEach(function (elem) {
    return precipitation.appendChild(elem);
  });
  [time, icon, temperature, precipitation].forEach(function (elem) {
    tile.appendChild(elem);
  });
  return tile;
}

function makeHourly(weatherData) {
  var hourly = document.createElement('div');
  hourly.className = 'hourly';
  var hours = weatherData.hourly.map(makeHour);
  hours.forEach(function (hour) {
    return hourly.appendChild(hour);
  });
  return hourly;
}

function makeMain(weatherData) {
  var main = document.createElement('div');
  main.className = 'tile';
  var locale = makeLocale(weatherData);
  var current = makeCurrent(weatherData);
  var hourly = makeHourly(weatherData);
  [locale, current, hourly].forEach(function (elem) {
    return main.appendChild(elem);
  });
  return main;
}

function loadMain(weatherData) {
  var main = makeMain(weatherData);
  document.getElementById('root').appendChild(main);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMain);

/***/ }),

/***/ "./src/timeTools.js":
/*!**************************!*\
  !*** ./src/timeTools.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function convertMonth(monthNumber) {
  switch (monthNumber) {
    case 0:
      return 'January';

    case 1:
      return 'February';

    case 2:
      return 'March';

    case 3:
      return 'April';

    case 4:
      return 'May';

    case 5:
      return 'June';

    case 6:
      return 'July';

    case 7:
      return 'August';

    case 8:
      return 'September';

    case 9:
      return 'October';

    case 10:
      return 'November';

    case 11:
      return 'December';

    default:
      return null;
  }
}

function convertWeekday(dayNumber) {
  switch (dayNumber) {
    case 0:
      return 'Sunday';

    case 1:
      return 'Monday';

    case 2:
      return 'Tuesday';

    case 3:
      return 'Wednesday';

    case 4:
      return 'Thursday';

    case 5:
      return 'Friday';

    case 6:
      return 'Saturday';

    default:
      return null;
  }
}

function doubleDigits(hourOrMinute) {
  var formattedTime = hourOrMinute < 10 ? "0".concat(hourOrMinute) : hourOrMinute;
  return formattedTime;
}

function getLocalDateAndTime(utcUnixTime, timezoneOffset) {
  var localMilliseconds = (utcUnixTime + timezoneOffset) * 1000;
  var rawDateAndTime = new Date(localMilliseconds);
  var day = convertWeekday(rawDateAndTime.getUTCDay());
  var month = convertMonth(rawDateAndTime.getUTCMonth());
  var date = rawDateAndTime.getUTCDate();
  var hour = rawDateAndTime.getUTCHours();
  var minute = rawDateAndTime.getUTCMinutes();
  var fullDate = "".concat(day, ", ").concat(month, " ").concat(date);
  var fullTime = "".concat(doubleDigits(hour), ":").concat(doubleDigits(minute));
  var fullDateAndTime = "".concat(day, ", ").concat(month, " ").concat(date, " ").concat(fullTime);
  return {
    day: day,
    month: month,
    date: date,
    hour: hour,
    minute: minute,
    fullDate: fullDate,
    fullTime: fullTime,
    fullDateAndTime: fullDateAndTime
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocalDateAndTime);

/***/ }),

/***/ "./src/weatherDataTools.js":
/*!*********************************!*\
  !*** ./src/weatherDataTools.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _us_cities_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./us-cities.json */ "./src/us-cities.json");
/* harmony import */ var _timeTools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeTools */ "./src/timeTools.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




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

function getBasicDataSource(_x, _x2, _x3) {
  return _getBasicDataSource.apply(this, arguments);
} // SOMEWHAT sure that this can be synchronous...
// Might need additional error handling


function _getBasicDataSource() {
  _getBasicDataSource = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(city, state, country) {
    var response, basicDataSource;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(city, ",").concat(state, ",").concat(country, "&units=imperial&appid=37ed2f3dbba73d4855aa2f683c7e3232"));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            basicDataSource = _context.sent;
            return _context.abrupt("return", basicDataSource);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getBasicDataSource.apply(this, arguments);
}

function getState(source) {
  return source.sys.country === 'US' ? _us_cities_json__WEBPACK_IMPORTED_MODULE_0__.filter(function (city) {
    return city.id === source.id;
  })[0].state : null;
}

function getComplexDataSource(_x4, _x5, _x6) {
  return _getComplexDataSource.apply(this, arguments);
}

function _getComplexDataSource() {
  _getComplexDataSource = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(city, state, country) {
    var basicDataSource, latitude, longitude, cityFromApi, stateFromApi, countryFromApi, response, complexDataSource;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getBasicDataSource(city, state, country);

          case 2:
            basicDataSource = _context2.sent;
            latitude = basicDataSource.coord.lat;
            longitude = basicDataSource.coord.lon;
            cityFromApi = basicDataSource.name;
            stateFromApi = getState(basicDataSource);
            countryFromApi = basicDataSource.sys.country;
            _context2.next = 10;
            return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(latitude, "&lon=").concat(longitude, "&units=imperial&exclude=minutely&appid=37ed2f3dbba73d4855aa2f683c7e3232"));

          case 10:
            response = _context2.sent;
            _context2.next = 13;
            return response.json();

          case 13:
            complexDataSource = _context2.sent;
            // This place data fills in gaps in the API response and allows user to
            // confirm the data is indeed for the city they requested
            complexDataSource.city = cityFromApi;
            complexDataSource.state = stateFromApi;
            complexDataSource.country = countryFromApi;
            return _context2.abrupt("return", complexDataSource);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getComplexDataSource.apply(this, arguments);
}

function getCurrentData(source) {
  var dateAndTime = (0,_timeTools__WEBPACK_IMPORTED_MODULE_1__["default"])( // might change to use just a property
  source.current.dt, source.timezone_offset);
  var iconCode = source.current.weather[0].icon;
  var temperature = {
    f: Math.round(source.current.temp),
    c: convertToCelsius(source.current.temp)
  };
  var feelsLike = {
    f: Math.round(source.current.feels_like),
    c: convertToCelsius(source.current.feels_like)
  };
  var uvIndex = convertUvIndex(source.current.uvi);
  var sunrise = (0,_timeTools__WEBPACK_IMPORTED_MODULE_1__["default"])(source.current.sunrise, source.timezone_offset).fullTime;
  var sunset = (0,_timeTools__WEBPACK_IMPORTED_MODULE_1__["default"])(source.current.sunset, source.timezone_offset).fullTime;
  var windSpeed = {
    mph: "".concat(Math.round(source.current.wind_speed), " mph"),
    kmh: "".concat(convertToKmh(source.current.wind_speed), " km/h")
  };
  var windDirection = source.current.wind_deg; // don't forget to use DOWN arrow icon

  var humidity = source.current.humidity;
  return {
    dateAndTime: dateAndTime,
    iconCode: iconCode,
    temperature: temperature,
    feelsLike: feelsLike,
    uvIndex: uvIndex,
    sunrise: sunrise,
    sunset: sunset,
    windSpeed: windSpeed,
    windDirection: windDirection,
    humidity: humidity
  };
}

function getHourlyData(source) {
  var next24Hours = source.hourly.slice(0, 24);
  var hourlyData = next24Hours.map(function (dataObject) {
    var time = (0,_timeTools__WEBPACK_IMPORTED_MODULE_1__["default"])(dataObject.dt, source.timezone_offset).fullTime;
    var iconCode = dataObject.weather[0].icon;
    var temperature = {
      f: Math.round(dataObject.temp),
      c: convertToCelsius(dataObject.temp)
    };
    var chanceOfPrecip = dataObject.pop;
    return {
      time: time,
      iconCode: iconCode,
      temperature: temperature,
      chanceOfPrecip: chanceOfPrecip
    };
  });
  return hourlyData;
}

function getDailyData(source) {
  var dailyData = source.daily.map(function (dataObject) {
    var _getLocalDateAndTime = (0,_timeTools__WEBPACK_IMPORTED_MODULE_1__["default"])(dataObject.dt, source.timezone_offset),
        day = _getLocalDateAndTime.day;

    var iconCode = dataObject.weather[0].icon;
    var highTemp = {
      f: Math.round(dataObject.temp.max),
      c: convertToCelsius(dataObject.temp.max)
    };
    var lowTemp = {
      f: Math.round(dataObject.temp.min),
      c: convertToCelsius(dataObject.temp.min)
    };
    var chanceOfPrecip = dataObject.pop;
    return {
      day: day,
      iconCode: iconCode,
      highTemp: highTemp,
      lowTemp: lowTemp,
      chanceOfPrecip: chanceOfPrecip
    };
  });
  return dailyData;
}

function getWeatherData(_x7) {
  return _getWeatherData.apply(this, arguments);
}

function _getWeatherData() {
  _getWeatherData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(city) {
    var state,
        country,
        rawData,
        cityName,
        stateName,
        countryName,
        currentData,
        hourlyData,
        dailyData,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            state = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : '';
            country = _args3.length > 2 ? _args3[2] : undefined;
            _context3.next = 4;
            return getComplexDataSource(city, state, country);

          case 4:
            rawData = _context3.sent;
            cityName = rawData.city;
            stateName = rawData.state;
            countryName = rawData.country;
            currentData = getCurrentData(rawData);
            hourlyData = getHourlyData(rawData);
            dailyData = getDailyData(rawData);
            return _context3.abrupt("return", {
              city: cityName,
              state: stateName,
              country: countryName,
              current: currentData,
              hourly: hourlyData,
              daily: dailyData
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getWeatherData.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData); // NOTES
// api hourly data starts with most recent hour (eg. if it's now 6:20pm, 6pm)
// api daily data starts with current day

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/Backgrounds sync recursive ^\\.\\/.*\\.jpg$":
/*!*********************************************!*\
  !*** ./src/Backgrounds/ sync ^\.\/.*\.jpg$ ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./01d.jpg": "./src/Backgrounds/01d.jpg",
	"./01n.jpg": "./src/Backgrounds/01n.jpg",
	"./02d.jpg": "./src/Backgrounds/02d.jpg",
	"./02n.jpg": "./src/Backgrounds/02n.jpg",
	"./03d.jpg": "./src/Backgrounds/03d.jpg",
	"./03n.jpg": "./src/Backgrounds/03n.jpg",
	"./04d.jpg": "./src/Backgrounds/04d.jpg",
	"./04n.jpg": "./src/Backgrounds/04n.jpg",
	"./09d.jpg": "./src/Backgrounds/09d.jpg",
	"./09n.jpg": "./src/Backgrounds/09n.jpg",
	"./10d.jpg": "./src/Backgrounds/10d.jpg",
	"./10n.jpg": "./src/Backgrounds/10n.jpg",
	"./11d.jpg": "./src/Backgrounds/11d.jpg",
	"./11n.jpg": "./src/Backgrounds/11n.jpg",
	"./13d.jpg": "./src/Backgrounds/13d.jpg",
	"./13n.jpg": "./src/Backgrounds/13n.jpg",
	"./50d.jpg": "./src/Backgrounds/50d.jpg",
	"./50n.jpg": "./src/Backgrounds/50n.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/Backgrounds sync recursive ^\\.\\/.*\\.jpg$";

/***/ }),

/***/ "./src/Icons sync recursive ^\\.\\/.*\\.svg$":
/*!***************************************!*\
  !*** ./src/Icons/ sync ^\.\/.*\.svg$ ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./01d.svg": "./src/Icons/01d.svg",
	"./01n.svg": "./src/Icons/01n.svg",
	"./02d.svg": "./src/Icons/02d.svg",
	"./02n.svg": "./src/Icons/02n.svg",
	"./03d.svg": "./src/Icons/03d.svg",
	"./03n.svg": "./src/Icons/03n.svg",
	"./04d.svg": "./src/Icons/04d.svg",
	"./04n.svg": "./src/Icons/04n.svg",
	"./09d.svg": "./src/Icons/09d.svg",
	"./09n.svg": "./src/Icons/09n.svg",
	"./10d.svg": "./src/Icons/10d.svg",
	"./10n.svg": "./src/Icons/10n.svg",
	"./11d.svg": "./src/Icons/11d.svg",
	"./11n.svg": "./src/Icons/11n.svg",
	"./13d.svg": "./src/Icons/13d.svg",
	"./13n.svg": "./src/Icons/13n.svg",
	"./50d.svg": "./src/Icons/50d.svg",
	"./50n.svg": "./src/Icons/50n.svg",
	"./Humidity.svg": "./src/Icons/Humidity.svg",
	"./Static Backups/01d.svg": "./src/Icons/Static Backups/01d.svg",
	"./Static Backups/01n.svg": "./src/Icons/Static Backups/01n.svg",
	"./Static Backups/02d.svg": "./src/Icons/Static Backups/02d.svg",
	"./Static Backups/02n.svg": "./src/Icons/Static Backups/02n.svg",
	"./Static Backups/03d.svg": "./src/Icons/Static Backups/03d.svg",
	"./Static Backups/03n.svg": "./src/Icons/Static Backups/03n.svg",
	"./Static Backups/04d.svg": "./src/Icons/Static Backups/04d.svg",
	"./Static Backups/04n.svg": "./src/Icons/Static Backups/04n.svg",
	"./Static Backups/09d.svg": "./src/Icons/Static Backups/09d.svg",
	"./Static Backups/09n.svg": "./src/Icons/Static Backups/09n.svg",
	"./Static Backups/10d.svg": "./src/Icons/Static Backups/10d.svg",
	"./Static Backups/10n.svg": "./src/Icons/Static Backups/10n.svg",
	"./Static Backups/11d.svg": "./src/Icons/Static Backups/11d.svg",
	"./Static Backups/11n.svg": "./src/Icons/Static Backups/11n.svg",
	"./Static Backups/13d.svg": "./src/Icons/Static Backups/13d.svg",
	"./Static Backups/13n.svg": "./src/Icons/Static Backups/13n.svg",
	"./Static Backups/50d.svg": "./src/Icons/Static Backups/50d.svg",
	"./Static Backups/50n.svg": "./src/Icons/Static Backups/50n.svg",
	"./Static Backups/arrow.svg": "./src/Icons/Static Backups/arrow.svg",
	"./Static Backups/raindrop.svg": "./src/Icons/Static Backups/raindrop.svg",
	"./Sunrise.svg": "./src/Icons/Sunrise.svg",
	"./Sunset.svg": "./src/Icons/Sunset.svg",
	"./UV Index.svg": "./src/Icons/UV Index.svg",
	"./Wind.svg": "./src/Icons/Wind.svg",
	"./arrow.svg": "./src/Icons/arrow.svg",
	"./raindrop.svg": "./src/Icons/raindrop.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/Icons sync recursive ^\\.\\/.*\\.svg$";

/***/ }),

/***/ "./src/Backgrounds/01d.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/01d.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/e11cdf2b492573f7c8a8.jpg";

/***/ }),

/***/ "./src/Backgrounds/01n.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/01n.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/984e8cbc8482344f1252.jpg";

/***/ }),

/***/ "./src/Backgrounds/02d.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/02d.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/b186c9fbad3275579f97.jpg";

/***/ }),

/***/ "./src/Backgrounds/02n.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/02n.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/ac7a022dc46369fb3588.jpg";

/***/ }),

/***/ "./src/Backgrounds/03d.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/03d.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/998997adc8f622956b7a.jpg";

/***/ }),

/***/ "./src/Backgrounds/03n.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/03n.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/ac7a022dc46369fb3588.jpg";

/***/ }),

/***/ "./src/Backgrounds/04d.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/04d.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/4cc1773388415f37b55a.jpg";

/***/ }),

/***/ "./src/Backgrounds/04n.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/04n.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/680c8cfe772c13e935d2.jpg";

/***/ }),

/***/ "./src/Backgrounds/09d.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/09d.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/c6c3bb78609b96601a59.jpg";

/***/ }),

/***/ "./src/Backgrounds/09n.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/09n.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/c6c3bb78609b96601a59.jpg";

/***/ }),

/***/ "./src/Backgrounds/10d.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/10d.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/c6c3bb78609b96601a59.jpg";

/***/ }),

/***/ "./src/Backgrounds/10n.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/10n.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/c6c3bb78609b96601a59.jpg";

/***/ }),

/***/ "./src/Backgrounds/11d.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/11d.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/19ff26bf8b2376533116.jpg";

/***/ }),

/***/ "./src/Backgrounds/11n.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/11n.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/19ff26bf8b2376533116.jpg";

/***/ }),

/***/ "./src/Backgrounds/13d.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/13d.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/f4b5ce05ad6d4a058d66.jpg";

/***/ }),

/***/ "./src/Backgrounds/13n.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/13n.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/f4b5ce05ad6d4a058d66.jpg";

/***/ }),

/***/ "./src/Backgrounds/50d.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/50d.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/e814e8ff8181a50073a5.jpg";

/***/ }),

/***/ "./src/Backgrounds/50n.jpg":
/*!*********************************!*\
  !*** ./src/Backgrounds/50n.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/a1b5d29b52965cc79b08.jpg";

/***/ }),

/***/ "./src/Icons/01d.svg":
/*!***************************!*\
  !*** ./src/Icons/01d.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/0c75f6c08e5684c26d05.svg";

/***/ }),

/***/ "./src/Icons/01n.svg":
/*!***************************!*\
  !*** ./src/Icons/01n.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/2dabfd2a6790ec4380ec.svg";

/***/ }),

/***/ "./src/Icons/02d.svg":
/*!***************************!*\
  !*** ./src/Icons/02d.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/eac95fa3a642a268b60a.svg";

/***/ }),

/***/ "./src/Icons/02n.svg":
/*!***************************!*\
  !*** ./src/Icons/02n.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/fdaeeb46728d18646807.svg";

/***/ }),

/***/ "./src/Icons/03d.svg":
/*!***************************!*\
  !*** ./src/Icons/03d.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/6f66956c31a6c57393df.svg";

/***/ }),

/***/ "./src/Icons/03n.svg":
/*!***************************!*\
  !*** ./src/Icons/03n.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/6f66956c31a6c57393df.svg";

/***/ }),

/***/ "./src/Icons/04d.svg":
/*!***************************!*\
  !*** ./src/Icons/04d.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/9237af3fb8cf0403c0ad.svg";

/***/ }),

/***/ "./src/Icons/04n.svg":
/*!***************************!*\
  !*** ./src/Icons/04n.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/9237af3fb8cf0403c0ad.svg";

/***/ }),

/***/ "./src/Icons/09d.svg":
/*!***************************!*\
  !*** ./src/Icons/09d.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/3f664059b4b583fb5619.svg";

/***/ }),

/***/ "./src/Icons/09n.svg":
/*!***************************!*\
  !*** ./src/Icons/09n.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/3f664059b4b583fb5619.svg";

/***/ }),

/***/ "./src/Icons/10d.svg":
/*!***************************!*\
  !*** ./src/Icons/10d.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/3b03853e69bd9ea2b1ca.svg";

/***/ }),

/***/ "./src/Icons/10n.svg":
/*!***************************!*\
  !*** ./src/Icons/10n.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/97a3a94e7fe6d1f3d886.svg";

/***/ }),

/***/ "./src/Icons/11d.svg":
/*!***************************!*\
  !*** ./src/Icons/11d.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/efdb5d3ba962ae2b233e.svg";

/***/ }),

/***/ "./src/Icons/11n.svg":
/*!***************************!*\
  !*** ./src/Icons/11n.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/efdb5d3ba962ae2b233e.svg";

/***/ }),

/***/ "./src/Icons/13d.svg":
/*!***************************!*\
  !*** ./src/Icons/13d.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/4adbfebb16e46d01aaa5.svg";

/***/ }),

/***/ "./src/Icons/13n.svg":
/*!***************************!*\
  !*** ./src/Icons/13n.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/4adbfebb16e46d01aaa5.svg";

/***/ }),

/***/ "./src/Icons/50d.svg":
/*!***************************!*\
  !*** ./src/Icons/50d.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/1f6622bb84bb395bf9fa.svg";

/***/ }),

/***/ "./src/Icons/50n.svg":
/*!***************************!*\
  !*** ./src/Icons/50n.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/1f6622bb84bb395bf9fa.svg";

/***/ }),

/***/ "./src/Icons/Humidity.svg":
/*!********************************!*\
  !*** ./src/Icons/Humidity.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/f6f97c5f6b692e20bbb1.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/01d.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/01d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/b5b0c148a6b0f10ac458.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/01n.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/01n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/58546ac8c1a36fb22614.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/02d.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/02d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/a223dc71c73b753676c0.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/02n.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/02n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/03d21947201668f2866e.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/03d.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/03d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/0639345a8e0604eb15d1.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/03n.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/03n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/0639345a8e0604eb15d1.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/04d.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/04d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/80bdcc715a54760520b7.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/04n.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/04n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/80bdcc715a54760520b7.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/09d.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/09d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/5ff05f2711dc23587e35.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/09n.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/09n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/5ff05f2711dc23587e35.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/10d.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/10d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/6e70b74881307b806ccd.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/10n.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/10n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/b6f5bbd51cae297592ef.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/11d.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/11d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/bd8b574bc77fb7449178.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/11n.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/11n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/bd8b574bc77fb7449178.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/13d.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/13d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/132215cb1cd1e6781d72.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/13n.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/13n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/132215cb1cd1e6781d72.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/50d.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/50d.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/b97ec1253e759f0f91f5.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/50n.svg":
/*!******************************************!*\
  !*** ./src/Icons/Static Backups/50n.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/b97ec1253e759f0f91f5.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/arrow.svg":
/*!********************************************!*\
  !*** ./src/Icons/Static Backups/arrow.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/f5557c01b464791b85fc.svg";

/***/ }),

/***/ "./src/Icons/Static Backups/raindrop.svg":
/*!***********************************************!*\
  !*** ./src/Icons/Static Backups/raindrop.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/f66d9e505e96917b2ace.svg";

/***/ }),

/***/ "./src/Icons/Sunrise.svg":
/*!*******************************!*\
  !*** ./src/Icons/Sunrise.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/01d6b6d8789db87cd549.svg";

/***/ }),

/***/ "./src/Icons/Sunset.svg":
/*!******************************!*\
  !*** ./src/Icons/Sunset.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/bcdb97891346ba05949d.svg";

/***/ }),

/***/ "./src/Icons/UV Index.svg":
/*!********************************!*\
  !*** ./src/Icons/UV Index.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/dbc422e2e8cb4315e241.svg";

/***/ }),

/***/ "./src/Icons/Wind.svg":
/*!****************************!*\
  !*** ./src/Icons/Wind.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/7666ea56edeecb3eff02.svg";

/***/ }),

/***/ "./src/Icons/arrow.svg":
/*!*****************************!*\
  !*** ./src/Icons/arrow.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/07d13a4c101c2d943745.svg";

/***/ }),

/***/ "./src/Icons/raindrop.svg":
/*!********************************!*\
  !*** ./src/Icons/raindrop.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Images/f66d9e505e96917b2ace.svg";

/***/ }),

/***/ "./src/countries.json":
/*!****************************!*\
  !*** ./src/countries.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"BD":"Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria","BA":"Bosnia and Herzegovina","BB":"Barbados","WF":"Wallis and Futuna","BL":"Saint Barthelemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BT":"Bhutan","JM":"Jamaica","BV":"Bouvet Island","BW":"Botswana","WS":"Samoa","BQ":"Bonaire, Saint Eustatius and Saba ","BR":"Brazil","BS":"Bahamas","JE":"Jersey","BY":"Belarus","BZ":"Belize","RU":"Russia","RW":"Rwanda","RS":"Serbia","TL":"East Timor","RE":"Reunion","TM":"Turkmenistan","TJ":"Tajikistan","RO":"Romania","TK":"Tokelau","GW":"Guinea-Bissau","GU":"Guam","GT":"Guatemala","GS":"South Georgia and the South Sandwich Islands","GR":"Greece","GQ":"Equatorial Guinea","GP":"Guadeloupe","JP":"Japan","GY":"Guyana","GG":"Guernsey","GF":"French Guiana","GE":"Georgia","GD":"Grenada","GB":"United Kingdom","GA":"Gabon","SV":"El Salvador","GN":"Guinea","GM":"Gambia","GL":"Greenland","GI":"Gibraltar","GH":"Ghana","OM":"Oman","TN":"Tunisia","JO":"Jordan","HR":"Croatia","HT":"Haiti","HU":"Hungary","HK":"Hong Kong","HN":"Honduras","HM":"Heard Island and McDonald Islands","VE":"Venezuela","PR":"Puerto Rico","PS":"Palestinian Territory","PW":"Palau","PT":"Portugal","SJ":"Svalbard and Jan Mayen","PY":"Paraguay","IQ":"Iraq","PA":"Panama","PF":"French Polynesia","PG":"Papua New Guinea","PE":"Peru","PK":"Pakistan","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PM":"Saint Pierre and Miquelon","ZM":"Zambia","EH":"Western Sahara","EE":"Estonia","EG":"Egypt","ZA":"South Africa","EC":"Ecuador","IT":"Italy","VN":"Vietnam","SB":"Solomon Islands","ET":"Ethiopia","SO":"Somalia","ZW":"Zimbabwe","SA":"Saudi Arabia","ES":"Spain","ER":"Eritrea","ME":"Montenegro","MD":"Moldova","MG":"Madagascar","MF":"Saint Martin","MA":"Morocco","MC":"Monaco","UZ":"Uzbekistan","MM":"Myanmar","ML":"Mali","MO":"Macao","MN":"Mongolia","MH":"Marshall Islands","MK":"Macedonia","MU":"Mauritius","MT":"Malta","MW":"Malawi","MV":"Maldives","MQ":"Martinique","MP":"Northern Mariana Islands","MS":"Montserrat","MR":"Mauritania","IM":"Isle of Man","UG":"Uganda","TZ":"Tanzania","MY":"Malaysia","MX":"Mexico","IL":"Israel","FR":"France","IO":"British Indian Ocean Territory","SH":"Saint Helena","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands","FM":"Micronesia","FO":"Faroe Islands","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NA":"Namibia","VU":"Vanuatu","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria","NZ":"New Zealand","NP":"Nepal","NR":"Nauru","NU":"Niue","CK":"Cook Islands","XK":"Kosovo","CI":"Ivory Coast","CH":"Switzerland","CO":"Colombia","CN":"China","CM":"Cameroon","CL":"Chile","CC":"Cocos Islands","CA":"Canada","CG":"Republic of the Congo","CF":"Central African Republic","CD":"Democratic Republic of the Congo","CZ":"Czech Republic","CY":"Cyprus","CX":"Christmas Island","CR":"Costa Rica","CW":"Curacao","CV":"Cape Verde","CU":"Cuba","SZ":"Swaziland","SY":"Syria","SX":"Sint Maarten","KG":"Kyrgyzstan","KE":"Kenya","SS":"South Sudan","SR":"Suriname","KI":"Kiribati","KH":"Cambodia","KN":"Saint Kitts and Nevis","KM":"Comoros","ST":"Sao Tome and Principe","SK":"Slovakia","KR":"South Korea","SI":"Slovenia","KP":"North Korea","KW":"Kuwait","SN":"Senegal","SM":"San Marino","SL":"Sierra Leone","SC":"Seychelles","KZ":"Kazakhstan","KY":"Cayman Islands","SG":"Singapore","SE":"Sweden","SD":"Sudan","DO":"Dominican Republic","DM":"Dominica","DJ":"Djibouti","DK":"Denmark","VG":"British Virgin Islands","DE":"Germany","YE":"Yemen","DZ":"Algeria","US":"United States","UY":"Uruguay","YT":"Mayotte","UM":"United States Minor Outlying Islands","LB":"Lebanon","LC":"Saint Lucia","LA":"Laos","TV":"Tuvalu","TW":"Taiwan","TT":"Trinidad and Tobago","TR":"Turkey","LK":"Sri Lanka","LI":"Liechtenstein","LV":"Latvia","TO":"Tonga","LT":"Lithuania","LU":"Luxembourg","LR":"Liberia","LS":"Lesotho","TH":"Thailand","TF":"French Southern Territories","TG":"Togo","TD":"Chad","TC":"Turks and Caicos Islands","LY":"Libya","VA":"Vatican","VC":"Saint Vincent and the Grenadines","AE":"United Arab Emirates","AD":"Andorra","AG":"Antigua and Barbuda","AF":"Afghanistan","AI":"Anguilla","VI":"U.S. Virgin Islands","IS":"Iceland","IR":"Iran","AM":"Armenia","AL":"Albania","AO":"Angola","AQ":"Antarctica","AS":"American Samoa","AR":"Argentina","AU":"Australia","AT":"Austria","AW":"Aruba","IN":"India","AX":"Aland Islands","AZ":"Azerbaijan","IE":"Ireland","ID":"Indonesia","UA":"Ukraine","QA":"Qatar","MZ":"Mozambique"}');

/***/ }),

/***/ "./src/us-cities.json":
/*!****************************!*\
  !*** ./src/us-cities.json ***!
  \****************************/
/***/ ((module) => {

"use strict";

/***/ }),

/***/ "./src/us-states.json":
/*!****************************!*\
  !*** ./src/us-states.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"AL":"Alabama","AK":"Alaska","AS":"American Samoa","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","DC":"District Of Columbia","FM":"Federated States Of Micronesia","FL":"Florida","GA":"Georgia","GU":"Guam","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MH":"Marshall Islands","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","MP":"Northern Mariana Islands","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PW":"Palau","PA":"Pennsylvania","PR":"Puerto Rico","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VI":"Virgin Islands","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _countries_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countries.json */ "./src/countries.json");
/* harmony import */ var _us_states_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./us-states.json */ "./src/us-states.json");
/* harmony import */ var _us_cities_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./us-cities.json */ "./src/us-cities.json");
/* harmony import */ var _weatherDataTools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weatherDataTools */ "./src/weatherDataTools.js");
/* harmony import */ var _mainTile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainTile */ "./src/mainTile.js");
/* harmony import */ var _dailyTile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dailyTile */ "./src/dailyTile.js");
/* harmony import */ var _auxTile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auxTile */ "./src/auxTile.js");









(0,_weatherDataTools__WEBPACK_IMPORTED_MODULE_5__["default"])('Hendersonville', 'NC', 'US').then(function (data) {
  var background = __webpack_require__("./src/Backgrounds sync recursive ^\\.\\/.*\\.jpg$")("./".concat(data.current.iconCode, ".jpg"));

  document.documentElement.style.backgroundImage = "url(".concat(background, ")");
  (0,_mainTile__WEBPACK_IMPORTED_MODULE_6__["default"])(data);
  (0,_dailyTile__WEBPACK_IMPORTED_MODULE_7__["default"])(data);
  (0,_auxTile__WEBPACK_IMPORTED_MODULE_8__["default"])(data);
}); // const usCityIds = Array.from(usCities, (city) => city.id);
// const usStateNames = Object.values(usStates);
// const usStateCodes = Object.keys(usStates);
// const body = document.querySelector('body');
// const temperatureBox = document.createElement('div');
// temperatureBox.className = 'temperature';
// const cityBox = document.createElement('div');
// cityBox.className = 'city';
// const stateBox = document.createElement('div');
// stateBox.className = 'state';
// const cityInput = document.createElement('input');
// cityInput.type = 'text';
// cityInput.className = 'search-box';
// cityInput.placeholder = 'Enter your city';
// const stateInput = document.createElement('select');
// const stateInputDefault = document.createElement('option');
// stateInputDefault.textContent = 'Select your state';
// stateInputDefault.value = '';
// stateInput.appendChild(stateInputDefault);
// usStateNames.forEach((state) => {
//   const option = document.createElement('option');
//   option.textContent = state;
//   option.value = usStateCodes.filter((code) => usStates[code] === state);
//   stateInput.appendChild(option);
// });
// const searchBtn = document.createElement('button');
// searchBtn.type = 'button';
// searchBtn.textContent = 'Search';
// searchBtn.className = 'search-btn';
// searchBtn.addEventListener('click', () => {
//   let inputs = cityInput.value.split(',');
//   inputs = inputs.map((item) => item.trim());
//   getWeatherData(...inputs);
// });
// [temperatureBox, cityBox, stateBox, cityInput, stateInput, searchBtn].forEach(
//   (box) => body.appendChild(box)
// );
// getWeatherData('boone', 'nc', 'us');

/*

TO DO
[ ] Make country dropdown box using countries.json
[ ] Make state dropdown that only activates if USA is selected
[ ] Make city text input
[ ] Add error handling for rejected calls and missing data fields
[ ] Make clock update every minute, weather data every 15 minutes

*/
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
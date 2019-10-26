///////////////////////
// Global
///////////////////////
let appKey_ = "741f7b1dd1f8484e0339dca253a4a8bc";
let currentCitySymbol_ = `<span class="align-middle icon-current-location"><a class="fas fa-map-marker-alt" alt="Current location"></a> </span>`;
let currentCity_ = "Lisboa";
let variable_ = document.getElementById("temp-variable-link");
let allVariables_ = document.querySelectorAll("#temp-variable");
let forecastDays_ = 5;

// 01d or 01n -- clear sky
let icon_sunny_ = `<span class="icon-sun1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span></span>`;
let icon_night_ = `<span class="icon-moon"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span>`;
// 02d or 02n -- few clouds
let icon_few_clouds_d_ = `<span class="icon-day"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span>`;
let icon_few_clouds_n_ = `<span class="icon-night2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>`;
// 03d or 03n -- scattered clouds
let icon_scattered_clouds_ = `<span class="icon-cloud1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span>`;
// 04d or 04n -- broken clouds
let icon_cloudy_ = `<span class="icon-cloudy1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>`;
// 09d or 09n -- shower rain
let icon_shower_rain_d_ = `<span class="icon-rain1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span>`;
let icon_shower_rain_n_ = `<span class="icon-rain2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></span>`;
// 10d or 10n -- rain
let icon_rain_d_ = `<span class="icon-rain5"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span></span>`;
let icon_rain_n_ = `<span class="icon-rain6"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span></span>`;
// 11d or 11n -- thunderstorm
let icon_thunder_d_ = `<span class="icon-storm3"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span>`;
let icon_thunder_n_ = `<span class="icon-storm2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span>`;
// 13d or 13n -- snow
let icon_snow_ = `<span class="icon-snowflake1"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>`;
//50d or 50m -- mist
let icon_mist_ = `<span class="icon-fog"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span></span>`;
// rainbow
let icon_rainbow_ = `<span class="icon-rainbow"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span></span>`;

// Icons
function getIcon(iconId) {
  let icon = "";

  switch (iconId) {
    case "01d":
      icon = icon_sunny_;
      break;
    case "01n":
      icon = icon_night_;
      break;
    case "02d":
      icon = icon_few_clouds_d_;
      break;
    case "02n":
      icon = icon_few_clouds_n_;
      break;
    case "03d":
      icon = icon_scattered_clouds_;
      break;
    case "03n":
      icon = icon_scattered_clouds_;
      break;
    case "04d":
      icon = icon_cloudy_;
      break;
    case "04n":
      icon = icon_cloudy_;
      break;
    case "09d":
      icon = icon_shower_rain_d_;
      break;
    case "09n":
      icon = icon_shower_rain_n_;
      break;
    case "10d":
      icon = icon_rain_d_;
      break;
    case "10n":
      icon = icon_rain_n_;
      break;
    case "11d":
      icon = icon_thunder_d_;
      break;
    case "11n":
      icon = icon_thunder_n_;
      break;
    case "13d":
      icon = icon_snow_;
      break;
    case "13n":
      icon = icon_snow_;
      break;
    case "50d":
      icon = icon_mist_;
      break;
    case "50n":
      icon = icon_mist_;
      break;
    default:
      icon = icon_rainbow_;
      break;
  }
  return icon;
}

///////////////////////
// Update Dates
///////////////////////
function getWeekDay(date) {
  //Create an array containing each day, starting with Sunday.
  let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //Use the getDay() method to get the day.
  let day = date.getDay();
  //Return the element that corresponds to that index.
  return weekdays[day];
}

let today_ = new Date();
let daysUTCunix_ = [];

function getForecastDay(date) {
  return ` ${getWeekDay(date)} <br />  ${date.getMonth() +
    1}/${date.getDate()}`;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function updateDates() {
  today_ = new Date();
  daysUTCunix_ = [];

  document.getElementById("today-date").innerHTML = `Today | ${getWeekDay(
  today_
)} - ${today_.getMonth() + 1}/${today_.getDate()} `;
  //@ ${today_.toLocaleTimeString(  navigator.language,{ hour: "2-digit", minute: "2-digit" })}

  for (let i = 1; i <= forecastDays_; i++) {
    let forecastDate = new Date();
    forecastDate.setDate(forecastDate.getDate() + i);
    forecastDate.setHours(0, 0, 0, 0);
    document.getElementById(`day-${i}`).innerHTML = `${getForecastDay(forecastDate)}`;

    dayUTC = new Date(forecastDate.toISOString());
    dayUTC = `${dayUTC.getUTCFullYear()}-${dayUTC.getUTCMonth()+1}-${dayUTC.getUTCDate()} ${addZero(dayUTC.getUTCHours())}:${addZero(dayUTC.getUTCMinutes())}:${addZero(dayUTC.getUTCSeconds())}`;
    dayUTC = Date.parse(`${dayUTC}Z`) / 1000;
    daysUTCunix_.push(dayUTC);
  }
}

updateDates();


function getTodayUrlLatLong(latitude, longitude) {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appKey_}&units=metric`;
  return url;
}

function getForecastUrlLatLong(latitude, longitude) {
  let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${appKey_}&units=metric`;
  return url;
}

function getTodayUrlCity(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey_}&units=metric`;
  //console.log(url);
  return url;
}

function getForecastUrlCity(city) {
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appKey_}&units=metric`;
  //console.log(url);
  return url;
}

function removeClassOnId(elementId, className) {
  let element = document.getElementById(elementId);
  element.classList.remove(className);
}

function addClassOnId(elementId, className) {
  let element = document.getElementById(elementId);
  element.classList.add(className);
}

function todayInfo(info) {
  let todayTemp = document.getElementById("today-temp");
  let todayMaxTemp = document.getElementById("today-max-temp");
  let todayMinTemp = document.getElementById("today-min-temp");
  let humidity = document.getElementById("humidity");
  let windSpeed = document.getElementById("wind-speed");
  let clouds = document.getElementById("clouds");
  let icon = document.getElementsByClassName("icon-today");

  todayTemp.innerHTML = `${Math.round(info.main.temp)}`;
  todayMinTemp.innerHTML = `${Math.round(info.main.temp_min)}`;
  todayMaxTemp.innerHTML = `${Math.round(info.main.temp_max)}`;
  humidity.innerHTML = `${info.main.humidity}`;
  windSpeed.innerHTML = `${info.wind.speed}`;
  clouds.innerHTML = `${info.clouds.all}`;
  icon[0].innerHTML = getIcon(info.weather[0].icon);
}

function displayTodayCurrentLocationInfo(response) {
  let info = new Object();
  info = response.data;
  let city = document.getElementById("city-name");
  city.innerHTML = `${info.name}, ${info.sys.country} ${currentCitySymbol_}`;
  currentCity_ = info.name;
  todayInfo(info);
}

function displayTodaySearchedCityInfo(response) {
  if (document.getElementById("search-input").value !== "") {
    addClassOnId("search-input", "is-valid");
  }
  let info = new Object();
  info = response.data;
  let city = document.getElementById("city-name");
  city.innerHTML = `${info.name}, ${info.sys.country}`;
  currentCity_ = info.name;
  todayInfo(info);
}


function displayForecastInfo(response) {
  let data = response.data.list;
  let forecastData = new Object();

  for (let a = 0; a < daysUTCunix_.length; a++) {
    if (a + 1 >= daysUTCunix_.length) {
      forecastData[a] = data.filter(x => x.dt >= daysUTCunix_[a]);
    } else {
      forecastData[a] = data.filter(x => x.dt >= daysUTCunix_[a] && x.dt < daysUTCunix_[a + 1]);
    }
  }

  //console.log(forecastData);

  let tempArray = [];
  for (let a = 0; a < Object.keys(forecastData).length; a++) {
    let key = Object.keys(forecastData)[a];
    let max = forecastData[key].reduce(
      function (x, y) {
        return x.main.temp_max > y.main.temp_max ? x : y;
      }, {
        ['main']: {
          'temp_max': '-100'
        }
      });

    let min = forecastData[key].reduce(
      function (x, y) {
        return x.main.temp_min < y.main.temp_min ? x : y;
      }, {
        ['main']: {
          'temp_min': '100'
        }
      });

    let icon = forecastData[key][Math.round(forecastData[key].length / 2, 0)].weather[0].icon;

    let tempObj = {
      [key]: {
        'max': Math.round(max.main.temp_max, 1),
        'min': Math.round(min.main.temp_min, 1),
        'icon': icon
      }
    };
    tempArray.push(tempObj)
  }

  for (let i = 1; i <= forecastDays_; i++) {
    let max = document.getElementById(`max-day-${i}`);
    let min = document.getElementById(`min-day-${i}`);
    let icon = document.getElementById(`day-${i}-icon`);
    max.innerHTML = tempArray[i - 1][i - 1].max;
    min.innerHTML = tempArray[i - 1][i - 1].min;
    icon.innerHTML = getIcon(tempArray[i - 1][i - 1].icon);
  }
}

function getCurrentPositionInfo(position) {
  let urlTodayCurrentLocation = getTodayUrlLatLong(
    position.coords.latitude,
    position.coords.longitude
  );
  let urlForecastCurrentLocation = getForecastUrlLatLong(
    position.coords.latitude,
    position.coords.longitude
  );

  //console.log(urlCurrentLocation);
  axios.get(urlTodayCurrentLocation).then(displayTodayCurrentLocationInfo);

  axios.get(urlForecastCurrentLocation).then(displayForecastInfo);
}

function getCityInfo(city) {
  axios
    .get(getTodayUrlCity(city))
    .then(displayTodaySearchedCityInfo)
    .catch(function (error) { // handle error
      if (error.response) { // The request was made and the server responded with a status code that falls out of the range of 2xx
        //console.log(error.response.data);
        addClassOnId("search-input", "is-invalid");
      } else if (error.request) { // The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
        //console.log(error.request);
      } else { // Something happened in setting up the request that triggered an Error
        //console.log("Error", error.message);
      }
      //console.log(error.config);
    });

  axios.get(getForecastUrlCity(city)).then(displayForecastInfo).catch(function (error) {
    if (error.response) {
      console.log("Error Forecast");
    }
  });
}

getCityInfo(currentCity_);
/* 
function getCity(url) {
  axios.get(url).then(function(response) {
    currentCity_ = [response.data.name, response.data.sys.country];
  });
}

function getCurrentCity(position) {
  let urlCurrentLocation = getTodayUrlLatLong(
    position.coords.latitude,
    position.coords.longitude
  );
  getCity(urlCurrentLocation);
}

navigator.geolocation.getCurrentPosition(getCurrentCity);
navigator.geolocation.getCurrentPosition(getCurrentPositionInfo);
*/

///////////////////////
// Search Location
///////////////////////
function search(event) {
  event.preventDefault();
  let searchInput = document.getElementById("search-input");
  //searchInput.classList.add("was-validated");

  let searchCity =
    searchInput.value
    .trim()
    .charAt(0)
    .toUpperCase() + searchInput.value.trim().slice(1);

  //console.log(`searchCity: ${searchCity}`);

  //console.log(currentCity_);
  if (variable_.innerHTML === "ºC") {
    for (let i = 0; i < allVariables_.length; ++i) {
      allVariables_[i].innerHTML = variable_.innerHTML;
    }
    variable_.innerHTML = "ºF";
  }


  if (
    searchInput.value.toLowerCase().trim() === currentCity_[0].toLowerCase() ||
    searchInput.value === ""
  ) {
    navigator.geolocation.getCurrentPosition(getCurrentPositionInfo);
  } else {
    getCityInfo(searchCity);
  }

  updateDates();

  let time = document.getElementById("update_time");
  let dateNow = new Date();
  let diffTime = Math.round(((dateNow.getTime() - today_.getTime()) / 1000) / 60);
  time.innerHTML = `${diffTime}`;
}

let searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", search);

function keyPressed(k) {
  let key = k.which || k.keyCode;
  //console.log(k.type, k.keyCode, k.which, k.key);
  if (key !== 13) {
    removeClassOnId("search-input", "is-invalid");
    removeClassOnId("search-input", "is-valid");
  }
}

let element = document.getElementById("search-input");
element.addEventListener("keyup", keyPressed);
element.addEventListener("click", function () {
  removeClassOnId("search-input", "is-invalid");
  removeClassOnId("search-input", "is-valid");
});

///////////////////////
// Get Current Location
///////////////////////
function getCurrentLocation(event) {
  if (variable_.innerHTML === "ºC") {
    for (let i = 0; i < allVariables_.length; ++i) {
      allVariables_[i].innerHTML = variable_.innerHTML;
    }
    variable_.innerHTML = "ºF";
  }

  navigator.geolocation.getCurrentPosition(getCurrentPositionInfo);

  updateDates();

  let time = document.getElementById("update_time");
  let dateNow = new Date();
  let diffTime = Math.round(((dateNow.getTime() - today_.getTime()) / 1000) / 60);
  time.innerHTML = `${diffTime}`;

  let searchText = document.getElementById("search-input");
  searchText.value = searchText.value !== "" ? "" : searchText.value;
  removeClassOnId("search-input", "is-invalid");
  removeClassOnId("search-input", "is-valid");
}

let CurrentLocation = document.getElementById("current-location");
CurrentLocation.addEventListener("click", getCurrentLocation);

///////////////////////
// Convert Tempetature from  Celsius to Fahrenheit & vice-versa
///////////////////////
function convertVariable(element) {
  let newTodayTemp = document.getElementById("today-temp");
  let newTodayMaxTemp = document.getElementById("today-max-temp");
  let newTodayMinTemp = document.getElementById("today-min-temp");
  newTodayTemp.innerHTML = convertTemp(newTodayTemp.innerHTML);
  newTodayMaxTemp.innerHTML = convertTemp(newTodayMaxTemp.innerHTML);
  newTodayMinTemp.innerHTML = convertTemp(newTodayMinTemp.innerHTML);

  for (let i = 1; i <= forecastDays_; i++) {
    let newMax = document.getElementById(`max-day-${i}`);
    let newMin = document.getElementById(`min-day-${i}`);
    newMax.innerHTML = convertTemp(newMax.innerHTML);
    newMin.innerHTML = convertTemp(newMin.innerHTML);
  }

  for (let i = 0; i < allVariables_.length; ++i) {
    allVariables_[i].innerHTML = variable_.innerHTML;
  }
  variable_.innerHTML = variable_.innerHTML === "ºF" ? "ºC" : "ºF";
}

function convertTemp(temperature) {
  let finalTemperature = variable_.innerHTML === "ºF" ? (temperature * 9) / 5 + 32 : ((temperature - 32) * 5) / 9;
  return Math.round(finalTemperature, 1);
}

variable_.addEventListener("click", convertVariable);

setInterval(function () {
  updateDates();
  getCityInfo(currentCity_);
  if (variable_.innerHTML === "ºC") {
    for (let i = 0; i < allVariables_.length; ++i) {
      allVariables_[i].innerHTML = variable_.innerHTML;
    }
    variable_.innerHTML = "ºF";
  }
}, 900000);

setInterval(function () {
  let time = document.getElementById("update_time");
  let dateNow = new Date();
  let diffTime = Math.round(((dateNow.getTime() - today_.getTime()) / 1000) / 60);
  time.innerHTML = `${diffTime}`;
}, 60000);
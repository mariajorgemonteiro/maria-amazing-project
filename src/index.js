///////////////////////
// Current Location & Weather Info
///////////////////////
let appKey = "741f7b1dd1f8484e0339dca253a4a8bc";
let currentCitySymbol = `<span class="align-middle icon-current-location"><a class="fas fa-map-marker-alt" alt="Current location"></a> </span>`;
let currentCity = "";

// 01d or 01n -- clear sky
let icon_sunny = `<span class="icon-sun1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span></span>`;
let icon_night = `<span class="icon-moon"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span>`;
// 02d or 02n -- few clouds
let icon_few_clouds_d = `<span class="icon-day"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span>`;
let icon_few_clouds_n = `<span class="icon-night2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>`;
// 03d or 03n -- scattered clouds
let icon_scattered_clouds = `<span class="icon-cloud1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span>`;
// 04d or 04n -- broken clouds
let icon_cloudy = `<span class="icon-cloudy1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>`;
// 09d or 09n -- shower rain
let icon_shower_rain_d = `<span class="icon-rain1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span>`;
let icon_shower_rain_n = `<span class="icon-rain2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span></span>`;
// 10d or 10n -- rain
let icon_rain_d = `<span class="icon-rain5"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span></span>`;
let icon_rain_n = `<span class="icon-rain6"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span></span>`;
// 11d or 11n -- thunderstorm
let icon_thunder_d = `<span class="icon-storm3"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span>`;
let icon_thunder_n = `<span class="icon-storm2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span>`;
// 13d or 13n -- snow
let icon_snow = `<span class="icon-snowflake1"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>`;
//50d or 50m -- mist
let icon_mist = `<span class="icon-fog"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span></span>`;
// rainbow
let icon_rainbow = `<span class="icon-rainbow"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span></span>`;

function getUrlLatLong(latitude, longitude) {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appKey}&units=metric`;
  return url;
}

function getUrlCity(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&units=metric`;
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

function displayCurrentLocationInfo(response) {
  let city = document.getElementById("city-name");
  let todayTemp = document.getElementById("today-temp");
  let todayMaxTemp = document.getElementById("today-max-temp");
  let todayMinTemp = document.getElementById("today-min-temp");
  let humidity = document.getElementById("humidity");
  let windSpeed = document.getElementById("wind-speed");
  let clouds = document.getElementById("clouds");
  let icon = document.getElementsByClassName("icon-today");

  console.log(response.data);
  city.innerHTML = `${response.data.name}, ${response.data.sys.country} ${currentCitySymbol}`;
  todayTemp.innerHTML = `${Math.round(response.data.main.temp)}`;
  todayMinTemp.innerHTML = `${Math.round(response.data.main.temp_min)}`;
  todayMaxTemp.innerHTML = `${Math.round(response.data.main.temp_max)}`;
  humidity.innerHTML = `${response.data.main.humidity}`;
  windSpeed.innerHTML = `${response.data.wind.speed}`;
  clouds.innerHTML = `${response.data.clouds.all}`;
  icon[0].innerHTML = getIcon(response.data.weather[0].icon);
}

function displaySearchedCityInfo(response) {
  addClassOnId("search-input", "is-valid");

  let city = document.getElementById("city-name");
  let todayTemp = document.getElementById("today-temp");
  let todayMaxTemp = document.getElementById("today-max-temp");
  let todayMinTemp = document.getElementById("today-min-temp");
  let humidity = document.getElementById("humidity");
  let windSpeed = document.getElementById("wind-speed");
  let clouds = document.getElementById("clouds");
  let icon = document.getElementsByClassName("icon-today");

  //console.log(response);
  city.innerHTML = `${response.data.name}, ${response.data.sys.country}`;
  todayTemp.innerHTML = `${Math.round(response.data.main.temp)}`;
  todayMinTemp.innerHTML = `${Math.round(response.data.main.temp_min)}`;
  todayMaxTemp.innerHTML = `${Math.round(response.data.main.temp_max)}`;
  humidity.innerHTML = `${response.data.main.humidity}`;
  windSpeed.innerHTML = `${response.data.wind.speed}`;
  clouds.innerHTML = `${response.data.clouds.all}`;
  icon[0].innerHTML = getIcon(response.data.weather[0].icon);
}

function getCurrentPositionInfo(position) {
  let urlCurrentLocation = getUrlLatLong(
    position.coords.latitude,
    position.coords.longitude
  );
  //console.log(urlCurrentLocation);
  axios.get(urlCurrentLocation).then(displayCurrentLocationInfo);
}

function getCity(url) {
  axios.get(url).then(function(response) {
    currentCity = [response.data.name, response.data.sys.country];
  });
}

function getCurrentCity(position) {
  let urlCurrentLocation = getUrlLatLong(
    position.coords.latitude,
    position.coords.longitude
  );
  getCity(urlCurrentLocation);
}

function getIcon(iconId) {
  let icon = "";

  if (iconId === "01d") {
    icon = icon_sunny;
  } else if (iconId === "01n") {
    icon = icon_night;
  } else if (iconId === "02d") {
    icon = icon_few_clouds_d;
  } else if (iconId === "02n") {
    icon = icon_few_clouds_n;
  } else if (iconId === "03d" || iconId === "03n") {
    icon = icon_scattered_clouds;
  } else if (iconId === "04d" || iconId === "04n") {
    icon = icon_cloudy;
  } else if (iconId === "09d") {
    icon = icon_shower_rain_d;
  } else if (iconId === "09n") {
    icon = icon_shower_rain_n;
  } else if (iconId === "10d") {
    icon = icon_rain_d;
  } else if (iconId === "10n") {
    icon = icon_rain_n;
  } else if (iconId === "11d") {
    icon = icon_thunder_d;
  } else if (iconId === "11n") {
    icon = icon_thunder_n;
  } else if (iconId === "13d" || iconId === "13n") {
    icon = icon_snow;
  } else if (iconId === "50d" || iconId === "50n") {
    icon = icon_mist;
  } else {
    icon = icon_rainbow;
  }
  return icon;
}

function getCityInfo(city) {
  let urlSearchCity = getUrlCity(city);
  axios
    .get(urlSearchCity)
    .then(displaySearchedCityInfo)
    .catch(function(error) {
      // handle error
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        addClassOnId("search-input", "is-invalid");
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      //console.log(error.config);
    });
}

navigator.geolocation.getCurrentPosition(getCurrentCity);
navigator.geolocation.getCurrentPosition(getCurrentPositionInfo);

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

let now = new Date();
document.getElementById("today-date").innerHTML = `Today | ${getWeekDay(now)} - ${now.getMonth() + 1}/${now.getDate()} @ ${now.toLocaleTimeString(navigator.language,  { hour: "2-digit", minute: "2-digit" })}`;

function getForecastDay(date) {
  return ` ${getWeekDay(date)} <br />  ${date.getMonth() +
    1}/${date.getDate()}`;
}

let day1 = new Date();
day1.setDate(now.getDate() + 1);
document.getElementById("day-one").innerHTML = `${getForecastDay(day1)}`;
let day2 = new Date();
day2.setDate(day2.getDate() + 2);
document.getElementById("day-two").innerHTML = `${getForecastDay(day2)}`;
let day3 = new Date();
day3.setDate(day3.getDate() + 3);
document.getElementById("day-three").innerHTML = `${getForecastDay(day3)}`;
let day4 = new Date();
day4.setDate(day4.getDate() + 4);
document.getElementById("day-four").innerHTML = `${getForecastDay(day4)}`;
let day5 = new Date();
day5.setDate(day5.getDate() + 5);
document.getElementById("day-five").innerHTML = `${getForecastDay(day5)}`;

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

  //console.log(currentCity);

  if (
    searchInput.value.toLowerCase().trim() === currentCity[0].toLowerCase() ||
    searchInput.value === ""
  ) {
    navigator.geolocation.getCurrentPosition(getCurrentPositionInfo);
  } else {
    getCityInfo(searchCity);
  }
}

let searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", search);

function keyPressed(k) {
  let key = k.which || k.keyCode;
  //console.log(k.type, k.keyCode, k.which, k.key);
  if (key === 13) {
    // only if the key is "Enter"...
    // ...ignore
  } else {
    removeClassOnId("search-input", "is-invalid");
    removeClassOnId("search-input", "is-valid");
  }
  // no propagation or default
}

let element = document.getElementById("search-input");
element.addEventListener("keyup", keyPressed);

///////////////////////
// Get Current Location
///////////////////////
function getCurrentLocation(event) {
  navigator.geolocation.getCurrentPosition(getCurrentPositionInfo);
}

let CurrentLocation = document.getElementById("current-location");
CurrentLocation.addEventListener("click", getCurrentLocation);

///////////////////////
// Convert Tempetature from  Celsius to Fahrenheit & vice-versa
///////////////////////
function convertVariable(element) {
  var i = 0;
  let variable = document.getElementById("temp-variable-link");
  let changedVariable = document.querySelectorAll("#temp-variable");
  let newTodayTemp = document.getElementById("today-temp");
  let newTodayMaxTemp = document.getElementById("today-max-temp");
  let newTodayMinTemp = document.getElementById("today-min-temp");
  let newMaxDayOne = document.getElementById("max-day-one");
  let newMinDayOne = document.getElementById("min-day-one");
  let newMaxDayTwo = document.getElementById("max-day-two");
  let newMinDayTwo = document.getElementById("min-day-two");
  let newMaxDayThree = document.getElementById("max-day-three");
  let newMinDayThree = document.getElementById("min-day-three");
  let newMaxDayFour = document.getElementById("max-day-four");
  let newMinDayFour = document.getElementById("min-day-four");
  let newMaxDayFive = document.getElementById("max-day-five");
  let newMinDayFive = document.getElementById("min-day-five");

  if (variable.innerHTML.trim() === "ºC") {
    newTodayTemp.innerHTML = convertToCelsius(newTodayTemp.innerHTML);
    newTodayMaxTemp.innerHTML = convertToCelsius(newTodayMaxTemp.innerHTML);
    newTodayMinTemp.innerHTML = convertToCelsius(newTodayMinTemp.innerHTML);
    newMaxDayOne.innerHTML = convertToCelsius(newMaxDayOne.innerHTML);
    newMinDayOne.innerHTML = convertToCelsius(newMinDayOne.innerHTML);
    newMaxDayTwo.innerHTML = convertToCelsius(newMaxDayTwo.innerHTML);
    newMinDayTwo.innerHTML = convertToCelsius(newMinDayTwo.innerHTML);
    newMaxDayThree.innerHTML = convertToCelsius(newMaxDayThree.innerHTML);
    newMinDayThree.innerHTML = convertToCelsius(newMinDayThree.innerHTML);
    newMaxDayFour.innerHTML = convertToCelsius(newMaxDayFour.innerHTML);
    newMinDayFour.innerHTML = convertToCelsius(newMinDayFour.innerHTML);
    newMaxDayFive.innerHTML = convertToCelsius(newMaxDayFive.innerHTML);
    newMinDayFive.innerHTML = convertToCelsius(newMinDayFive.innerHTML);

    for (i = 0; i < changedVariable.length; ++i) {
      changedVariable[i].innerHTML = "ºC";
    }

    variable.innerHTML = "ºF";
  } else if (variable.innerHTML === "ºF") {
    newTodayTemp.innerHTML = convertToFahrenheit(newTodayTemp.innerHTML);
    newTodayMaxTemp.innerHTML = convertToFahrenheit(newTodayMaxTemp.innerHTML);
    newTodayMinTemp.innerHTML = convertToFahrenheit(newTodayMinTemp.innerHTML);
    newMaxDayOne.innerHTML = convertToFahrenheit(newMaxDayOne.innerHTML);
    newMinDayOne.innerHTML = convertToFahrenheit(newMinDayOne.innerHTML);
    newMaxDayTwo.innerHTML = convertToFahrenheit(newMaxDayTwo.innerHTML);
    newMinDayTwo.innerHTML = convertToFahrenheit(newMinDayTwo.innerHTML);
    newMaxDayThree.innerHTML = convertToFahrenheit(newMaxDayThree.innerHTML);
    newMinDayThree.innerHTML = convertToFahrenheit(newMinDayThree.innerHTML);
    newMaxDayFour.innerHTML = convertToFahrenheit(newMaxDayFour.innerHTML);
    newMinDayFour.innerHTML = convertToFahrenheit(newMinDayFour.innerHTML);
    newMaxDayFive.innerHTML = convertToFahrenheit(newMaxDayFive.innerHTML);
    newMinDayFive.innerHTML = convertToFahrenheit(newMinDayFive.innerHTML);

    for (i = 0; i < changedVariable.length; ++i) {
      changedVariable[i].innerHTML = "ºF";
    }

    variable.innerHTML = "ºC";
  }
}

function convertToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return Math.round(celsius, 1);
}

function convertToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return Math.round(fahrenheit, 1);
}

let variableLink = document.getElementById("temp-variable-link");
variableLink.addEventListener("click", convertVariable);

/*
(function() {
  window.addEventListener(
    "input",
    function() {
      let element = document.getElementById("search-input");
      element.addEventListener("keyup", keyPressed);
    },
    false
  );
})();
*/

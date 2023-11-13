function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let city = searchInputElement.value;
  let temperatureElement = document.querySelector(".current-temperature-value");
  let descriptionElement = document.querySelector(".current-description");
  let humidityElement = document.querySelector(".current-humidity");
  let windElement = document.querySelector(".current-wind");

  let apiKey = "04dtb32bf653942046oabf5b636577a0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(function (response) {
    city = response.data.city;
    let temperature = Math.round(response.data.temperature.current);
    let description = response.data.condition.description;
    let humidity = response.data.temperature.humidity;
    let wind = response.data.wind.speed;
    cityElement.innerHTML = city;
    temperatureElement.innerHTML = temperature;
    descriptionElement.innerHTML = description;
    humidityElement.innerHTML = humidity;
    windElement.innerHTML = wind;
    console.log(response.data);
  });
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

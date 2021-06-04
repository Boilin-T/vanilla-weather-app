function displayTemperature(response) {
  console.log(response);

  let tempElement = document.querySelector("#temp");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = Math.round(response.data.main.temp);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "7cc7a1eacfc053e2fe7ef8d9cb7298e3";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(displayTemperature);

function displayTemperature(response) {
  console.log(response);
  let tempElement = document.querySelector("#temp");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  let dateElement = document.querySelector("#date");
  let cityElement = document.querySelector("#city");

  tempElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = Math.round(response.data.main.temp);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  descriptionElement.innerHTML = response.data.weather[0].description;
  dateElement.innerHTML = new Date(response.data.dt * 1000);
  cityElement.innerHTML = response.data.name;
  console.log(new Date(response.data.dt * 1000));
}

let apiKey = "7cc7a1eacfc053e2fe7ef8d9cb7298e3";
let units = "metric";
let city = prompt("Enter a city");
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(displayTemperature);

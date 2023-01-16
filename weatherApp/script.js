// https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=319278eb9f233f118ccab617a04b3594
let API_KEY = "319278eb9f233f118ccab617a04b3594";

getWeatherdata = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const Full_Url = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const WeatherPromise = fetch(Full_Url);
  console.log(Full_Url);

  return WeatherPromise.then((response) => {
    return response.json();
  });
};

function searchcity() {
  const city = document.getElementById("city-input").value;

  getWeatherdata(city)
    .then((response) => {
      showWeatherdata(response);
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

showWeatherdata = (weatherdata) => {
  document.getElementById("city-name").innerText = weatherdata.name;
  document.getElementById("temp").innerText = weatherdata.main.temp;
  document.getElementById("description").innerText =
    weatherdata.weather[0].main;
  document.getElementById("humidity").innerText = weatherdata.main.humidity;
  document.getElementById("wind").innerText = weatherdata.wind.speed;
};

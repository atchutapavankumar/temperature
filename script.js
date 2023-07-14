$(document).ready(function() {
    const apikey = "863242cfb2b1d357e6093d9a4df19a4b";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  
    const searchBox = $(".search input");
    const searchBtn = $(".search button");
    const weatherIcon = $(".weather-icon");
  
    function checkWeather(city) {
      const url = apiUrl + city + `&appid=${apikey}`;
  
      $.ajax({
        url: url,
        method: "GET",
        success: function(data) {
          $(".city").html(data.name);
          $(".temp").html(Math.round(data.main.temp) + "°c");
          $(".humidity").html(data.main.humidity + "%");
          $(".wind").html(data.wind.speed + "km/h");
  
          if (data.weather[0].main == "Clouds") {
            weatherIcon.attr("src", "clouds.png");
          } else if (data.weather[0].main == "Clear") {
            weatherIcon.attr("src", "clear.png");
          } else if (data.weather[0].main == "Rain") {
            weatherIcon.attr("src", "rain.png");
          } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.attr("src", "drizzle.png");
          } else if (data.weather[0].main == "Mist") {
            weatherIcon.attr("src", "mist.png");
          }
  
          $(".weather").css("display", "block");
          $(".error").css("display", "none");
        },
        error: function() {
          $(".error").css("display", "block");
          $(".weather").css("display", "none");
        }
      });
    }
  
    searchBtn.click(function() {
      checkWeather(searchBox.val());
    });
  });
  
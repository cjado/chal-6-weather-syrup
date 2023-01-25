
var APIkey = "43a3b99ad80001e205832282fce85783";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey + "&units=imperial";
var now = dayjs()
var fiveDayURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey + "&units=imperial";


$(document).ready(function(){
  $('#searchBtn').click(function(){
    var city = $('#search-input').val();
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey + "&units=imperial";
    var fiveDayURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey + "&units=imperial";
    console.log(queryURL)

    $('.forecast').empty();

    fetch(queryURL)
    .then(reponse => reponse.json())
    .then(data => {
      $('#city').text(data.name + " (" + now.format('YYYY/MM/DD') + ")");
      $('#temp').text("Temp: " + data.main.temp + " °F");
      $('#wind').text("Wind: " + data.wind.speed + " mph");
      $('#humidity').text("Humidity: " + data.main.humidity +  "%");
      console.log(queryURL)
    }).catch(error => {
      console.log(error);
    });

    fetch(fiveDayURL)
    .then(reponse => reponse.json())
    .then(data => {
      var forecast = data.list;
      for (var i = 0; i < forecast.length; i += 8) {
        var forecastBox = $("<div>").addClass("forecast-box");
        var date = $("<p>").text(forecast[i].dt_txt.slice(0, 10));
        var temp = $("<p>").text("Temp: " + forecast[i].main.temp + " °F");
        var humidity = $("<p>").text("Humidity: " + forecast[i].main.humidity + "%");
        forecastBox.append(date, temp, humidity);
        $(".forecast").append(forecastBox);
      }
      $('#resetBtn').click(function(){
        function resetInfo() {
          var forecastBox = document.getElementById('forecast-box')
          forecastBox.remove()
          $('#temp').empty().append(html);
          $('#wind').empty().append(html);
          $('#humidity').empty().append(html);
        }
    
        resetInfo()
      });
    })
    .catch(error => {
      console.log(error);

    });
});
});




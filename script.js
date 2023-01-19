$( function() {
    var availableTags = [
      "Houston",
      "Austin"
    ];
    $( "#search-input" ).autocomplete({
      source: availableTags
    });
  } );


var APIkey = "43a3b99ad80001e205832282fce85783";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey + "&units=imperial";

$(document).ready(function(){
  $('#searchBtn').click(function(){
    var city = $('#search-input').val();
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey + "&units=imperial";
    console.log(queryURL)
    fetch(queryURL)
    .then(reponse => reponse.json())
    .then(data => {
      $('#city').text(data.name );
      $('#temp').text(data.main.temp) + "°F";
      $('#wind').text(data.wind.speed + " mph");
      $('#humidity').text(data.main.humidity + "%");
    }).catch(error => {
      console.log(error);
    });
  });
});


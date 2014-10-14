// Docs at http://simpleweatherjs.com
$(function() {
  $.simpleWeather({
    location: 'Osseo, MN',
    unit: 'f',
    success: function(weather) {
      html = '<br><br><br><p><center>' +weather.temp+ ' &deg;' +weather.units.temp+ ' ('+weather.low+' - '+weather.high+') </center></p>';
      html += '<p><center>'+weather.currently+' - '+weather.text+' - Wind '+weather.wind.speed+' '+weather.units.speed+' '+weather.wind.direction+'</center></p>';
      
      html += '<p><center>Tomorrow ('+weather.forecast[1].low+' - '+weather.forecast[1].high+') ' +weather.forecast[1].text+'</center></p>';
      html += '<p></p>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error.message+'</p>');
    }
  });
});

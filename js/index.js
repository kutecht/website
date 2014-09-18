// Docs at http://simpleweatherjs.com
$(function() {
  $.simpleWeather({
    location: 'Osseo, MN',
    unit: 'f',
    success: function(weather) {
      html = '<br><br><br><p><center>' +weather.temp+ ' &deg;' +weather.units.temp+' ['+weather.low+'/'+weather.high+'] '+weather.currently+' - '+weather.text+' [wind: '+weather.wind.speed+' '+weather.units.speed+' '+weather.wind.direction+']</center></p>';
      html += '<br><br>';
      
      html += '<p><center>'+weather.forecast[1].day+':  ['+weather.forecast[1].low+'/'+weather.forecast[1].high+'] ' +weather.forecast[1].text+'</center></p>';
      html += '<p></p>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error.message+'</p>');
    }
  });
});

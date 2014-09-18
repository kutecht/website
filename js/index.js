// Docs at http://simpleweatherjs.com
$(function() {
  $.simpleWeather({
    location: 'Osseo, MN',
    unit: 'f',
    success: function(weather) {
      html = '<p>' +weather.temp+ ' &deg;' +weather.units.temp+' ['+weather.low+'/'+weather.high+'] '+weather.currently+' - '+weather.text+' [wind: '+weather.wind.speed+' '+weather.units.speed+' '+weather.wind.direction+']</p>';

      html += '<p></p>';

      
      for(var i=1;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day+':  ['+weather.forecast[i].low+'/'+weather.forecast[i].high+'] ' +weather.forecast[i].text+ '</p>';
        html += '<p></p>';
      }
      

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error.message+'</p>');
    }
  });
});

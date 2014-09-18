// Docs at http://simpleweatherjs.com
$(function() {
  $.simpleWeather({
    location: 'Osseo, MN',
    unit: 'f',
    success: function(weather) {
      html = '<li>' +weather.temp+ ' &deg;' +weather.units.temp+' [high: '+weather.high+']<br>  '+weather.currently+' - '+weather.text+'<br>wind: '+weather.wind.speed+' '+weather.units.speed+' '+weather.wind.direction+'</li>';

      html += '<p></p>';

      
      for(var i=1;i<weather.forecast.length;i++) {
        html += '<li>'+weather.forecast[i].day+':  ['+weather.forecast[i].low+'/'+weather.forecast[i].high+'] ' +weather.forecast[i].text+ '</li>';
        html += '<p></p>';
      }
      

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error.message+'</p>');
    }
  });
});

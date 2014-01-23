/* jshint camelcase: false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-zip').click(clickAddZip);
    $('#getForecast').click(clickGetForecast);
  }

  function clickAddZip(){
    var zip = $('#zip').val();
    $('#zipCode').append('<option value"'+zip+'>'+zip+'</option>');
  
    $('#zip').val('');
    $('#zip').focus();
  }

  function clickGetForecast(){
    var zip = $('#zipCode').val();
    var forecast = 'http://api.wunderground.com/api/34e6c01832cdf755/forecast/q/'+zip+'.json?callback=?';
    $.getJSON(forecast, receive);
  }

  function receive(data){
    var $box = $('.weather');

    for(var i = 0; i < data.forecast.simpleforecast.forecastday.length; i++){
      var day = data.forecast.simpleforecast.forecastday[i].date.weekday;
      var icon = data.forecast.simpleforecast.forecastday[i].icon_url;
      var conditions = data.forecast.simpleforecast.forecastday[i].conditions;

      $($box[i]).find('h1').text(day);
      $($box[i]).find('h2').text(conditions);
      $($box[i]).find('img').attr('src',icon);
    }
  }
  /*
    for(var i = 0; i < 4; i++){
      $('#day'+ i).append('data.forecast.simpleforecast.forecastday['+ i +'].date.weekday');
      $('#day'+ i).append('data.forecast.simpleforecast.forecastday['+ i +']icon_url');
      $('#day'+ i).append('data.forecast.simpleforecast.forecastday['+ i +'].conditions');
    }
  */

})();

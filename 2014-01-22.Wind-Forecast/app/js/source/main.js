/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#getWeather').click(getWeather);
  }

  function getWeather(){
    var url = 'http://api.wunderground.com/api/34e6c01832cdf755/conditions/q/TN/Nashville.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    var windDesc = data.current_observation.wind_string;
    var direction = data.current_observation.wind_dir;
    var degrees = data.current_observation.wind_degrees;
    var speed = data.current_observation.wind_mph;
    var gust = data.current_observation.wind_gust_mph;
    var conditions = [windDesc, direction, degrees, speed, gust];

    for(var i = 0; i < conditions.length; i++){
      var $li = $('<li>');
      $li.text(conditions[i]);
      $('#container').append($li);
    }
  }

})();

/* jshint camelcase:false */

(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#get-weather').click(getWeather);
  }

  function getWeather(){
    var url = 'http://api.wunderground.com/api/34e6c01832cdf755/conditions/q/TN/Nashville.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    var temp = data.current_observation.temperature_string;
    $('h2').text(temp);
  }

})();


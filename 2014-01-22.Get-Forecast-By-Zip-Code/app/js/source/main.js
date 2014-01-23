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
  }

  function clickGetForecast(){
    var zip = $('#zipCode').val();
    var forecast = 'http://api.wunderground.com/api/34e6c01832cdf755/forecast/q/'+zip+'.json?callback=?';
    $.getJSON(forecast, receive);
  }

  function receive(data){
    console.log(data);
  }

})();

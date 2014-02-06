(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#addzip').click(clickAddZip);
    $('#getwebcams').click(clickGetWebcams);
    $('#clear').click(clickClear);
  }

  function clickAddZip(){
    var zipInput = $('#zipinput').val();
    var $option = $('<option>');
    $option.val(zipInput);
    $option.text(zipInput);
    $('#zipselect').append($option);
  }

  function clickGetWebcams(){
    var zip = $('#zipselect').val;
    var url = 'http://api.wunderground.com/api/34e6c01832cdf755/webcams/q/'+zip+'.json?callback=?';
    $.getJSON(url,displayWebcams);
  }

  function clickClear(){
    $('#container').empty();
  }

  function displayWebcams(data){
    for(var i = 0;i < data.webcams.length; i++){
      var neighborhood = data.webcams[i].neighborhood;
      var url = 'url(' + data.webcams[i].WIDGETCURRENTIMAGEURL + ')';

      var $div = $('<div>');
      $div.addClass('cam');
      $div.text(neighborhood);
      $div.css('background-image', url);

      $('#container').prepend($div);
    }
  }

})();

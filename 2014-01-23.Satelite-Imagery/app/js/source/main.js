/* jshint camelcase: false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#getImg').click(getImagery);
  }

  function getImagery(){
    var zip = $('#zip').val();
    var imagery = 'http://api.wunderground.com/api/34e6c01832cdf755/satellite/q/'+zip+'.json?callback=?';
    $.getJSON(imagery, recieve);
  }

  function recieve(data){
    var img1 = data.satellite.image_url;
    var imgir4 = data.satellite.image_url_ir4;
    var imgvis = data.satellite.image_url_vis;
    
    $('#img1').attr('src',img1);
    $('#imgir4').attr('src',imgir4);
    $('#imgvis').attr('src',imgvis);
  }

})();

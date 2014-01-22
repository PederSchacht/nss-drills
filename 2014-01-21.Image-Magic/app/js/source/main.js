(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-img').click(clickAddImage);
  }

  function clickAddImage(){
    var link = $('#link').val();
    var image = $('<img src=' + link + '>');
    $('#container').append(image);
  }

  /*
    function clickAddImage(){
      var url = $('#link').val();
      var $div = $('<div>');
      $div.css('background-image', 'url(' + url + ')');
      $('#container').append($div);

  */

})();

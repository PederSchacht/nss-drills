(function(){
  'use strict';

  function clickAddColor(){
    var color = $('#color').val();
    $('#color').val('');
    $('#color').focus();
    var $box = $('<div>');
    $box.addClass('color');
    $box.css('background-color', color);

    $('#colors').prepend($box);
  }

  function initialize(){
    $('#add-color').click(clickAddColor);
  }

  $(document).ready(initialize);

})();

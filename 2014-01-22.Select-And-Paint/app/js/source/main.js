(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-option').click(clickAddOption);
    $('#colors').change(selectColor);
  }

  function clickAddOption(){
    var color = $('#color').val();
    color.toLowerCase();
    var COLOR = color.toUpperCase();
    $('#colors').append('<option value"'+color+'>'+COLOR+'</option>');

    $('#color').val('');
    $('#color').focus();
  }

  function selectColor(){
    var selectedColor = $('#colors').val();
    $('#paint').css('background-color',selectedColor);
  }

})();

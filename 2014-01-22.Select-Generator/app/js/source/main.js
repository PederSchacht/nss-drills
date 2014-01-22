(function(){
  'use strict';

  var counter = 0;

  $(document).ready(init);

  function init(){
    $('#add-option').click(clickAddOption);
  }

  function clickAddOption(){
    var color = $('#color').val();
    $('#container').append('<option value="'+counter+'">'+color+'</option>');
    counter++;

    $('#color').val('');
    $('#color').focus();
  }
})();


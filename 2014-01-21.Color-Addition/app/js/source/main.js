(function (){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#addColors').click(clickAddColor);
  }

  function clickAddColor(){
    var value = $('#colors').val();
    var colorArray = $('#colors').text();
    for( var i = 0; i <= value.length; i++){
      $('#container').append(colorArray);
    }
  }
})();

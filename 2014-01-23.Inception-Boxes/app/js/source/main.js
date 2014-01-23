(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#inception').click(clickInception);
  }

  function color(){
    var red =Math.floor(Math.random()*256);
    var blue =Math.floor(Math.random()*256);
    var green =Math.floor(Math.random()*256);
    var rgb = red+blue+green;
    return rgb;
  }

  function clickInception(){
    var times = $('#number').val();
    var newbuttons = $('<button>').attr({
      id:'"button"+ times +',
    });
    for(var i = 0; i < times; i++){
      $('#container').wrap(newbuttons);
    }
  }

})();

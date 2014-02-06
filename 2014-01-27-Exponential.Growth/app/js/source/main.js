(function(){

  'use strict';

  $(document).ready(init);

  var exponent = 0;

  function init(){
    $('#growit').click(clickGrowIt);
  }

  function clickGrowIt(){
    setInterval( function(){
      var base = $('#number').text;
      var answer=Math.pow(base,exponent);
      exponent++;
      return answer;
    },
    $('#delay').text);
    var $li = $('<li>'+answer+'');
    $('#growthChamber').prepend($li);
  }


})();

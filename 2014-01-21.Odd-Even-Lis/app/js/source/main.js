(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-li').click(clickAddLi);
  }
  /*  
  function clickAddLi(){

    var li = '<li>words</li>';

    var number = $('number-text');
    for (i = 0; i < number.length ; i++);
    li = i
    $('ul').append('li')
  }
  */
  function clickAddLi(){
    var number = $('#number').val() * 1;
    for(var i = 1; i <= number; i++){
      var li = '<li>' + i + '</li>';
      $('#container').append(li);
    }
  }

})();

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#makeSquares').click(clickMakeSquares);
    $('#clear').click(clickClear);
  }

  function clickMakeSquares(){
    var wordsString = $('#words').text();
    var words = wordsString.split(' ');
    for(var i = 0; i < words.length; i++){
      var addWord = (words).val(i);
      $('#container').append(addWord);
    }
  }

  function clickClear(){
    $('#words').val('');
    $('#words').focus();
  }

})();

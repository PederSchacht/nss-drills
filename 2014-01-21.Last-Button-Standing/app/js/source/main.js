(function(){
  'use strict';

  $(document).ready(init);
 
  function init(){
    $('#button1').click(addButtons);
  }

  function addButtons(){
    var newButton1 = $('<button>').attr({
      id:'buttonA',
      value:'Button A',
    });
    var newButton2 = $('<button>');
    newButton1.addClass('buttonA');
    newButton2.addClass('buttonB');
    $('body').append(newButton1);
    $('body').append(newButton2);
  }

/*
  function init(){
    $('#one').click(make2Buttons);
    $('#container').on('click,'button',dynamicClick);
  }
  
  function make2Buttons(){
    var b2 = '<button id="two">Make One Disappear</button>';
    var b3 = '<button id="three">Make Two Disappear</button>';
    $('#container').append(b2,b3);
  }
  
  function dynamicClick(){
    switch(this.id){
      case 'two':
        $('#one').detach();
        break;
      case('#two').detach();
    }
  }
  */
})();


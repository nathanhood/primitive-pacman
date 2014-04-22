(function(){
  'use strict';

  $(document).ready(init);

  var pacMan;
  var peg;
  var pacX;
  var pacY;
  var pegX;
  var pegY;

  function init(){
    $('#start').on('click', initMap);
    $('body').keydown(arrowKey);
  }

  function initMap(){
    pacX = Math.floor(Math.random() * 2);
    pacY = Math.floor(Math.random() * 3);
    pegX = Math.floor(Math.random() * 2);
    pegY = Math.floor(Math.random() * 3);
    pacMan = $('td[data-x=' + pacX + '][data-y=' + pacY + ']').addClass('pac');
    peg = $('td[data-x=' + pegX + '][data-y=' + pegY + ']').addClass('peg');
  }

  function arrowKey(event){
    if(event >= 37 || event <= 40){
      event.preventDefault();
    }

    switch(event.keyCode){
    case 38:
      pacY--;
      movePac(pacX, pacY);
      break;
    case 40:
      pacY++;
      movePac(pacX, pacY);
      break;
    case 37:
      pacX--;
      movePac(pacX, pacY);
      break;
    case 39:
      pacX++;
      movePac(pacX, pacY);
      break;
    }
  }


  function movePac(x, y){
    $('.pac').removeClass();
    pacMan = $('td[data-x=' + x + '][data-y=' + y + ']').addClass('pac');
    endGame();
  }

  function endGame(){
    if(pacX === pegX && pacY === pegY){
      $('.peg').removeClass('peg');
      alert('You Win');
    }
  }

}());

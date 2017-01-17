

var createCards = function(){

var board = document.querySelector('game-board');

function createBoard() {
  for (i=0; i<cards.length; i++) {

    var cardElement = document.createElement('div');

    cardElement.className = 'card';

    board.appendChild(cardElement);
  }

}

}

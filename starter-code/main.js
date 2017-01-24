
var cards = ['queen', 'king', 'queen', 'king'];

/*create var cards in play*/

var cardsInPlay = [];

/*get an element with the id gameboard and set it to var board*/
var board = document.getElementById('game-board');

  function createBoard() {

    /*make a for loop that makes a div element for each card with the class card*/
      for (var i=0; i<cards.length; i++) {

      var cardElement = document.createElement('div');

      cardElement.className = 'card';

      cardElement.setAttribute('data-card', cards[i]);

      cardElement.addEventListener('click', isTwoCards);

      /*append each new card to the div game-board*/
      board.appendChild(cardElement);
  }

}

function isTwoCards() {

  cardsInPlay.push(this.getAttribute('data-card'));
  
  console.log(this.getAttribute('data-card'));

  if (this.getAttribute('data-card') === 'king') {

    this.innerHTML = "<img src='img/king.png' />";
  } 

  else {
    this.innerHTML = "<img src='img/queen.png' />";
  }

  if (cardsInPlay.length === 2) {

    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
} 

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else 
  {
    alert("Sorry, try again.");

  }
}


createBoard();
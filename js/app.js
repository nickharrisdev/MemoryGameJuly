/*
 * Create a list that holds all of your cards
 */

const squares = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube",  "fa fa-anchor", "fa fa-anchor", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle"];



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

const cardsContainer = document.querySelector(".deck")

let openCards = [] //shell array to temporarily save clicked cards
let matchingCards = [] //array to save matches

// use for loop to create the cards
for (let i = 0; i < squares.length; i++) {
  const card = document.createElement("li");
  card.classList.add("card");
  card.innerHTML = "<i class='" + squares[i] + "'></i>";
  cardsContainer.appendChild(card);

  //create event listener for card-clicked

  card.addEventListener("click", function() {

    const currentCard = this;
    const previousCard = openCards[0];

    //open cards and compare them
    if(openCards.length === 1) {

      card.classList.add("open", "show");
      openCards.push(this);
      // card comparison conditional
      if(currentCard.innerHTML === previousCard.innerHTML){

        currentCard.classList.add("match");
        previousCard.classList.add("match");

        matchingCards.push(currentCard, previousCard); //store match in matchingCards
        openCards = []; //reset open cards array
        youWin(); //check to see if all cards are matched

      } else {
        console.log("sorry, no can do confederado!")

          //show the opened non-matched cards for a moment before hiding again
          setTimeout(function() {
            currentCard.classList.remove("open", "show");
            previousCard.classList.remove("open", "show");
            openCards = [];
          }, 500);

      }

    } else {

      card.classList.add("open", "show");
      openCards.push(this);

    }
  });
}

function youWin() {
  if (matchingCards.length === squares.length) {
    alert("You're done! Hope it was fun!");
  }
}

//shuffle the cards, create a card's html, and add to page

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

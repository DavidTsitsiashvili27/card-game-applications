const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector(".score").textContent = score;
const cardData = [
    {
        image: "../assets/.ace_of_clubs.png",
        name: "ace of clubs"
    },
    {
        image: "../assets/ace_of_diamonds.png",
        name: "ace of diamonds" 
    },
    {
        image: "../assets/ace_of_hearts.png",
        name: "ace of hearts"
    },
    {
        image: "../assets/ace_of_spades.png",
        name: "ace of spades"
    },
    {
        image: "../assets/jack_of_clubs2.png",
        name: "jack of clubs"
    },
    {
        image: "../assets/jack_of_diamonds2.png",
        name: "jack of diamonds"
    },
    {
        image: "../assets/jack_of_hearts2",
        name: "jack of hearts "
    },
    {
        image: "../assets/jack_of_spades2.png",
        name: "jack of spades"
    },
    {
        image: "../assets/king_of_clubs2.png",
        name: "king of clubs"
    },
    {
        image: "../assets/king_of_diamonds2.png",
         name:"king of diamonds"
    },
    {
       image: "../assets/king_of_hearts2.png",
         name:"king of hearts"
    }, 
    {
        image: "../assets/king_of_spades2.png",
         name:"king of spades"
    },
    {
        image: "../assets/queen_of_clubs2.png",
         name:"queen of clubs"
    },
    {
         image: "../assets/queen_of_diamonds2.png",
         name:"queen of diamonds"
    },
    {
        image: "../assets/queen_of_hearts2.png",
         name:"queen of hearts"
    },
    {
        image: "../assets/queen_of_spades2.png",
        name:"queen of spades"
   }
];

function IminGame() {
  cards = [...cardData, ...cardData];
  shuffleCards();
  generateCards();
}

IminGame();

function shuffleCards() {
  let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}

function generateCards() {
    
        gridContainer.innerHTML = "";
      
        for (let card of cards) {
          const cardElement = document.createElement("div");
          cardElement.classList.add("card");
          cardElement.setAttribute("data-name", card.name);

          cardElement.innerHTML = `
            <div class="front">
              <img class="front-image" src="${card.image}" alt="Card Image" />
            </div>
            <div class="back"></div>
          `;
      
          gridContainer.appendChild(cardElement);
          cardElement.addEventListener("click", flipCard);
        }
      }

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  score++;
  document.querySelector(".score").textContent = score;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000);
}

function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function restart() {
  resetBoard();
  shuffleCards();
  score = 0;
  document.querySelector(".score").textContent = score;
  gridContainer.innerHTML = "";
  generateCards();
}


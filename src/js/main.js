const board = document.querySelector("#board");
const card = document.createElement("div");
const cheat = document.querySelector("#cheat");
const scoreText = document.querySelector("#score");
const scoreMax = document.querySelector(".score-max");
const attemptsText = document.querySelector("#attempts");
const restarter = document.querySelector("#btn-restart");
const firstPlayer = document.querySelector("#first-player");
const secondPlayer = document.querySelector("#second-player");
const scoreFirstPlayer = document.querySelector("#score-first-player");
const scoreSecondPlayer = document.querySelector("#score-second-player");
const content = document.querySelector("#content-game");
const menuSolo = document.querySelector("#menu-btn-solo");
const menuDuo = document.querySelector("#menu-btn-duo");
const startButton = document.querySelector(".menu-btn-start");
const menu = document.querySelector(".menu");
const inputRange = document.getElementById("card-range");
const rangeValue = document.getElementById("range-value");
let multiPlayers = false;
let selectedMode = null;
let activeCheat = 0;
let isActiveCheat = false;
let Execute1 = false;
let Execute2 = false;
let Execute3 = false;
let Execute4 = false;
let currentPlayer = 1;
let firstChoice = null;
let secondChoice = null;
let cardsLeftToMatch = 12;
let score = 0;
let attempts = 0;
let scorePlayer1 = 0;
let scorePlayer2 = 0;

const emojis = [
  "👄",
  "🧚‍♀️",
  "💩",
  "🐢",
  "🤡",
  "👁️",
  "🐤",
  "🙊",
  "🌽",
  "🌵",
  "🌻",
  "🐝",
  "👄",
  "🧚‍♀️",
  "💩",
  "🐢",
  "🤡",
  "👁️",
  "🐤",
  "🙊",
  "🌽",
  "🌵",
  "🌻",
  "🐝",
];

const updateRangeValue = () => {
  rangeValue.textContent = `${inputRange.value} paires`;
};

const updateTurnText = () => {
  if (currentPlayer === 1) {
    firstPlayer.innerText = "Au joueur 1 de jouer";
    secondPlayer.innerText = "";
  } else {
    firstPlayer.innerText = "";
    secondPlayer.innerText = "Au joueur 2 de jouer";
  }
};

const duoMode = () => {
  card.classList.remove("content-hidden");
  restarter.classList.remove("content-hidden");
  scoreText.classList.remove("content-hidden");
  scoreMax.classList.remove("content-hidden");
  board.classList.remove("content-hidden");
  menuSolo.classList.add("menu-hidden");
  menuDuo.classList.add("menu-hidden");
  menu.classList.add("menu-hidden");
  scoreText.classList.remove("content-hidden");
  scoreMax.classList.remove("content-hidden");
  scoreFirstPlayer.classList.remove("content-hidden");
  scoreSecondPlayer.classList.remove("content-hidden");
  firstPlayer.classList.remove("content-hidden");
  secondPlayer.classList.remove("content-hidden");
  console.log("actvie duo");
};

const soloMode = () => {
  card.classList.remove("content-hidden");
  restarter.classList.remove("content-hidden");
  attemptsText.classList.remove("content-hidden");
  scoreText.classList.remove("content-hidden");
  scoreMax.classList.remove("content-hidden");
  board.classList.remove("content-hidden");
  menuSolo.classList.add("menu-hidden");
  menuDuo.classList.add("menu-hidden");
  menu.classList.add("menu-hidden");
  console.log("actvie solo");
};

card.classList.add("content-hidden");
restarter.classList.add("content-hidden");
scoreFirstPlayer.classList.add("content-hidden");
scoreSecondPlayer.classList.add("content-hidden");
firstPlayer.classList.add("content-hidden");
secondPlayer.classList.add("content-hidden");
attemptsText.classList.add("content-hidden");
scoreText.classList.add("content-hidden");
scoreMax.classList.add("content-hidden");
board.classList.add("content-hidden");
menuSolo.classList.remove("menu-hidden");
menuDuo.classList.remove("menu-hidden");
scoreFirstPlayer.innerText = "0";
scoreSecondPlayer.innerText = "0";
attemptsText.innerText = attempts;
scoreText.innerText = score;
updateTurnText();

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

startButton.addEventListener("click", () => {
  const playerSelection = document.querySelector(
    'input[name="players-select"]:checked',
  );

  if (!playerSelection) {
    window.alert("Veuillez sélectionner un mode de jeu.");
    return;
  }

  selectedMode = playerSelection.value;
  multiPlayers = selectedMode === "duo";

  if (selectedMode === "solo") {
    soloMode();
  } else {
    duoMode();
  }
});

menuSolo.addEventListener("click", () => {
  startButton.classList.remove("btn-disabled");
});

menuDuo.addEventListener("click", () => {
  startButton.classList.remove("btn-disabled");
});

restarter.addEventListener("click", () => {
  addEventListener("beforeunload", (event) => {
    event.preventDefault();
  });
  location.reload();
});

shuffle(emojis).forEach((emoji) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("hidden");

  card.dataset.emoji = emoji;

  board.appendChild(card);
});

if (isActiveCheat === false) {
  addEventListener("click", (event) => {
    if (
      event.target.matches(".card") &&
      !event.target.matches(
        ":nth-child(1), :nth-child(2), :nth-child(3), :nth-child(4)",
      )
    ) {
      Execute1 = false;
      Execute2 = false;
      Execute3 = false;
      Execute4 = false;
      activeCheat = 0;
      console.log("C'est pas une carte !", event.target.dataset.emoji);
    }
    if (event.target.matches(".card:nth-child(1)") && Execute1 === false) {
      console.log("C'est la carte 1 !", event.target.dataset.emoji);
      activeCheat = activeCheat + 1;
      console.log(activeCheat);
      Execute1 = true;
    }
    if (event.target.matches(".card:nth-child(2)") && Execute2 === false) {
      console.log("C'est la carte 2 !", event.target.dataset.emoji);
      activeCheat = activeCheat + 1;
      console.log(activeCheat);
      Execute2 = true;
    }
    if (event.target.matches(".card:nth-child(3)") && Execute3 === false) {
      console.log("C'est la carte 3 !", event.target.dataset.emoji);
      activeCheat = activeCheat + 1;
      console.log(activeCheat);
      Execute3 = true;
    }
    if (event.target.matches(".card:nth-child(4)") && Execute4 === false) {
      console.log("C'est la carte 4 !", event.target.dataset.emoji);
      activeCheat = activeCheat + 1;
      console.log(activeCheat);
      Execute4 = true;
    }
  });
}

setInterval(() => {
  if (activeCheat === 4 && isActiveCheat === false) {
    isActiveCheat = true;
    console.log("Le cheat est activé !");
  }
  if (isActiveCheat === true) {
    addEventListener("mouseover", (card) => {
      cheat.innerText = card.target.dataset.emoji;
      console.log(card.target.dataset.emoji);
      if (card.target.dataset.emoji === undefined) {
        cheat.innerText = "";
      }
    });
  }
}, 100);

addEventListener("click", (event) => {
  if (event.target.matches(".card")) {
    if (firstChoice === null) {
      firstChoice = event.target;
      const firstCard = firstChoice;
      event.target.classList.remove("hidden");
      event.target.classList.add("used");
      if (selectedMode === "solo") {
        firstCard.classList.add("selected");
      } else {
        if (currentPlayer === 1) {
          firstCard.classList.add("selected-player1");
        } else {
          firstCard.classList.add("selected-player2");
        }
      }

      event.target.innerText = event.target.dataset.emoji;
      console.log("first");
    } else if (secondChoice === null) {
      secondChoice = event.target;
      const firstCard = firstChoice;
      const secondCard = secondChoice;
      event.target.classList.remove("hidden");
      if (selectedMode === "solo") {
        secondCard.classList.add("selected");
      } else {
        if (currentPlayer === 1) {
          secondCard.classList.add("selected-player1");
        } else {
          secondCard.classList.add("selected-player2");
        }
      }
      event.target.innerText = event.target.dataset.emoji;
      attempts = attempts + 1;
      attemptsText.innerText = attempts;
      console.log("second");

      if (firstChoice.dataset.emoji === secondChoice.dataset.emoji) {
        cardsLeftToMatch = cardsLeftToMatch - 1;
        scoreFirstPlayer.innerText = scorePlayer1;
        scoreSecondPlayer.innerText = scorePlayer2;

        if (currentPlayer === 1) {
          scorePlayer1 = scorePlayer1 + 1;
          scoreFirstPlayer.innerText = scorePlayer1;
        } else {
          scorePlayer2 = scorePlayer2 + 1;
          scoreSecondPlayer.innerText = scorePlayer2;
        }

        score = score + 1;
        scoreText.innerText = score;
        firstCard.classList.add("used");
        secondCard.classList.add("used");
        setTimeout(() => {
          firstCard.classList.remove("selected-player1");
          firstCard.classList.remove("selected-player2");
          secondCard.classList.remove("selected-player1");
          secondCard.classList.remove("selected-player2");
          firstCard.classList.remove("selected");
          secondCard.classList.remove("selected");
        }, 600);

        if (cardsLeftToMatch === 0) {
          if (scorePlayer1 < scorePlayer2) {
            window.alert("Bravo ! Victoire du joueur 2");
          } else if (scorePlayer1 === scorePlayer2) {
            window.alert("Egalité");
          } else {
            window.alert("Bravo ! Victoire du joueur 1");
          }
        }
        firstChoice = null;
        secondChoice = null;
      } else {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        updateTurnText();

        content.classList.add("disabled");
        setTimeout(() => {
          firstCard.innerText = "";
          secondCard.innerText = "";
          firstCard.classList.remove("selected");
          secondCard.classList.remove("selected");
          firstCard.classList.add("hidden");
          firstCard.classList.remove("used");
          firstCard.classList.remove("selected-player1");
          firstCard.classList.remove("selected-player2");
          secondCard.classList.add("hidden");
          secondCard.classList.remove("selected-player1");
          secondCard.classList.remove("selected-player2");
          content.classList.remove("disabled");

          firstChoice = null;
          secondChoice = null;
        }, 600);
      }
    } else {
    }
  }
});

inputRange.addEventListener("input", updateRangeValue);
updateRangeValue();

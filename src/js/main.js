const board = document.querySelector("#board");
const card = document.createElement("div");
const cheat = document.querySelector("#cheat");
const scoreText = document.querySelector("#score");
const attemptsText = document.querySelector("#attempts");
const restarter = document.querySelector("button");
const firstPlayer = document.querySelector("#first-player");
const secondPlayer = document.querySelector("#second-player");
let activeCheat = 0;
let isActiveCheat = false;
let Execute1 = false;
let Execute2 = false;
let Execute3 = false;
let Execute4 = false;
let Player1 = true;
let Player2 = false;
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

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

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

let firstChoice = null;
let secondChoice = null;
let cardsLeftToMatch = 12;
let score = 0;
let attempts = 0;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
attemptsText.innerText = attempts;
scoreText.innerText = score;

addEventListener("click", (event) => {
  if (event.target.matches(".card")) {
    if (firstChoice === null) {
      firstChoice = event.target;
      const firstCard = firstChoice;
      event.target.classList.remove("hidden");
      event.target.classList.add("used");
      event.target.classList.add("selected");
      event.target.innerText = event.target.dataset.emoji;
      console.log("first");
    } else if (secondChoice === null) {
      secondChoice = event.target;
      event.target.classList.remove("hidden");
      event.target.classList.add("selected");
      event.target.innerText = event.target.dataset.emoji;
      attempts = attempts + 1;
      attemptsText.innerText = attempts;
      console.log("second");

      if (firstChoice.dataset.emoji === secondChoice.dataset.emoji) {
        cardsLeftToMatch = cardsLeftToMatch - 1;

        if (Player1 === true) {
          scorePlayer1 = scorePlayer1 + 1;
          Player1 = false;
          Player2 = true;
        }

        if (Player2 === true) {
          scorePlayer2 = scorePlayer2 + 1;
          Player1 = true;
          Player2 = false;
        }

        score = score + 1;
        scoreText.innerText = score;
        const firstCard = firstChoice;
        const secondCard = secondChoice;
        firstCard.classList.add("used");
        secondCard.classList.add("used");
        setTimeout(() => {
          firstCard.classList.remove("selected");
          secondCard.classList.remove("selected");
        }, 600);

        if (cardsLeftToMatch === 0) {
          window.alert("Bravo !");
        }
        firstChoice = null;
        secondChoice = null;
      } else {
        const firstCard = firstChoice;
        const secondCard = secondChoice;

        setTimeout(() => {
          firstCard.innerText = "";
          secondCard.innerText = "";
          firstCard.classList.add("hidden");
          firstCard.classList.remove("used");
          secondCard.classList.add("hidden");
          firstCard.classList.remove("selected");
          secondCard.classList.remove("selected");
          firstChoice = null;
          secondChoice = null;
        }, 600);
      }
    } else {
    }
  }
});

restarter.addEventListener("click", () => {
  addEventListener("beforeunload", (event) => {
    event.preventDefault();
  });
  location.reload();
});

if (Player1 === true) {
  firstPlayer.innerText = "Au joueur 1 de jouer";
}

if (Player2 === true) {
  secondPlayer.innerText = "Au joueur 2 de jouer";
}

const board = document.querySelector("#board");
const card = document.createElement("div");
const cheat = document.querySelector("#cheat");
let activeCheat = 0;
let isActiveCheat = false;
let Execute1 = false;
let Execute2 = false;
let Execute3 = false;
let Execute4 = false;
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

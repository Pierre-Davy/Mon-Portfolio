// Texte dynamique ---
const TextDynamic = () => {
  const target = document.getElementById("target");
  let array = ["HTML", "CSS", "Javascript", "PHP", "Java"];
  let wordIndex = 0;
  let letterIndex = 0;

  const createLetter = () => {
    const letter = document.createElement("span");
    target.appendChild(letter);

    letter.textContent = array[wordIndex][letterIndex];

    setTimeout(() => {
      letter.remove();
    }, 2800);
  };

  const loop = () => {
    setTimeout(() => {
      if (wordIndex >= array.length) {
        wordIndex = 0;
        letterIndex = 0;
        loop();
      } else if (letterIndex < array[wordIndex].length) {
        createLetter();
        letterIndex++;
        loop();
      } else {
        wordIndex++;
        letterIndex = 0;
        setTimeout(() => {
          loop();
        }, 2800);
      }
    }, 100);
  };
  loop();
};
// délais lancement TextDynamic
setTimeout(TextDynamic, 2000);

//--------Side-Bar-----------

const sideBar = document.querySelector("#side-bar");
const toggleBtn = document.querySelector("#btn");
const sectionClick = document.querySelector(".content");

toggleBtn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

sectionClick.addEventListener("click", () => {
  sideBar.classList.remove("active");
});
// --------------------------

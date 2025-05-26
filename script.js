// JavaScript код
const textContainer = document.getElementById("textContainer");
const invitationText = "Приглашаем на открытие! 12.12.2024";
const letters = invitationText.split("");
const delay = 100; // Задержка между буквами (в миллисекундах)

let currentLetter = 0;

function addLetter() {
  if (currentLetter < letters.length) {
    const letter = letters[currentLetter];
    const letterEntity = document.createElement("a-entity");
    letterEntity.setAttribute("text", `value: ${letter}; align: center;`);
    textContainer.appendChild(letterEntity);
    currentLetter++;
    setTimeout(addLetter, delay);
  }
}

// Запускаем "печать" текста после распознавания маркера
const marker = document.querySelector("a-marker");
marker.addEventListener("markerFound", () => {
  // Очищаем контейнер с текстом (если там что-то было)
  textContainer.innerHTML = "";
  // Запускаем "печать" текста
  currentLetter = 0;
  addLetter();
});
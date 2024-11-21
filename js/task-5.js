function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('.body-color');
const colorDescr = document.querySelector('.color');

changeColorBtn.addEventListener('click', changeBgColor);

function changeBgColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorDescr.textContent = getRandomHexColor();
}

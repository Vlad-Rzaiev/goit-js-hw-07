function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputNumber = document.querySelector('.input-number');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', destroyBoxes);

function onCreateBtnClick() {
  const numberOfBoxes = Number(inputNumber.value);

  if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
    createBoxes(numberOfBoxes);
  }

  inputNumber.value = '';
}

function createBoxes(amount) {
  destroyBoxes();

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount.lenght; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;

    fragment.append(div);
  }

  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

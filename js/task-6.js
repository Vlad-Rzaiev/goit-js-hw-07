function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputNumber = document.querySelector('.input-number');
const boxes = document.querySelector('#boxes');

function createBoxes() {
  boxes.innerHTML = '';

  const numberOfBoxes = Number(inputNumber.value);

  let boxWidth = 30;
  let boxHeight = 30;

  if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
    for (let i = 0; i < numberOfBoxes; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.width = `${boxWidth}px`;
      box.style.height = `${boxHeight}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.insertAdjacentElement('beforeend', box);
      boxWidth += 10;
      boxHeight += 10;
    }
  }

  inputNumber.value = '';
}

createBtn.addEventListener('click', createBoxes);

function destroyBoxes() {
  boxes.innerHTML = '';
}

destroyBtn.addEventListener('click', destroyBoxes);

/*
 * Добрий день, Григорій, написав код так як він виглядає зараз,
 * а потім дочитався що в умові написано:
 * Для рендеру елементів на сторінці створи функцію createBoxes(amount),
 * яка приймає один параметр — число, що зберігає кількість елементів для рендеру.
 * І я просидів пів дня але так і не можу додуматися як зробити щоб число яке
 * вводить користувач передавалось у функцію як аргумент.
 * Може порадите щось? Заздалегідь дякую.
 */

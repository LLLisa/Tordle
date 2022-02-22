/*
Tordle is 7 wide and 8 tall
*/

const board = document.querySelector('table');
const keyboard = document.querySelector('#keyboard');

const setup = () => {
  for (let i = 0; i < 9; i++) {
    const tableRow = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      tableRow.appendChild(document.createElement('td'));
    }
    board.appendChild(tableRow);
  }
};

setup();
const tordleGreens = [
  document.querySelector('#board-container tr:nth-child(1) td:nth-child(4)'),
  document.querySelector('#board-container tr:nth-child(2) td:nth-child(1)'),
  document.querySelector('#board-container tr:nth-child(2) td:nth-child(3)'),
  document.querySelector('#board-container tr:nth-child(2) td:nth-child(4)'),
  document.querySelector('#board-container tr:nth-child(2) td:nth-child(5)'),
  document.querySelector('#board-container tr:nth-child(2) td:nth-child(7)'),
  document.querySelector('#board-container tr:nth-child(3) td:nth-child(2)'),
  document.querySelector('#board-container tr:nth-child(3) td:nth-child(3)'),
  document.querySelector('#board-container tr:nth-child(3) td:nth-child(5)'),
  document.querySelector('#board-container tr:nth-child(3) td:nth-child(6)'),
  document.querySelector('#board-container tr:nth-child(4) td:nth-child(2)'),
  document.querySelector('#board-container tr:nth-child(4) td:nth-child(4)'),
  document.querySelector('#board-container tr:nth-child(4) td:nth-child(6)'),
  document.querySelector('#board-container tr:nth-child(5) td:nth-child(2)'),
  document.querySelector('#board-container tr:nth-child(5) td:nth-child(3)'),
  document.querySelector('#board-container tr:nth-child(5) td:nth-child(5)'),
  document.querySelector('#board-container tr:nth-child(5) td:nth-child(6)'),
  document.querySelector('#board-container tr:nth-child(6) td:nth-child(2)'),
  document.querySelector('#board-container tr:nth-child(6) td:nth-child(4)'),
  document.querySelector('#board-container tr:nth-child(6) td:nth-child(6)'),
  document.querySelector('#board-container tr:nth-child(7) td:nth-child(2)'),
  document.querySelector('#board-container tr:nth-child(7) td:nth-child(3)'),
  document.querySelector('#board-container tr:nth-child(7) td:nth-child(5)'),
  document.querySelector('#board-container tr:nth-child(7) td:nth-child(6)'),
  document.querySelector('#board-container tr:nth-child(8) td:nth-child(1)'),
  document.querySelector('#board-container tr:nth-child(8) td:nth-child(3)'),
  document.querySelector('#board-container tr:nth-child(8) td:nth-child(4)'),
  document.querySelector('#board-container tr:nth-child(8) td:nth-child(5)'),
  document.querySelector('#board-container tr:nth-child(8) td:nth-child(7)'),
];

const tordleYellows = [
  document.querySelector('#board-container tr:nth-child(3) td:nth-child(4)'),
  document.querySelector('#board-container tr:nth-child(4) td:nth-child(3)'),
  document.querySelector('#board-container tr:nth-child(4) td:nth-child(5)'),
  document.querySelector('#board-container tr:nth-child(5) td:nth-child(4)'),
  document.querySelector('#board-container tr:nth-child(6) td:nth-child(3)'),
  document.querySelector('#board-container tr:nth-child(6) td:nth-child(5)'),
  document.querySelector('#board-container tr:nth-child(7) td:nth-child(4)'),
];

tordleGreens.map((x) => x.classList.add('green'));
tordleYellows.map((x) => x.classList.add('yellow'));

tordleGreens.map((x) => x.classList.add('grey'));
tordleYellows.map((x) => x.classList.add('grey'));

const orderfy = (greens, yellows) => {
  let result = [];
  for (let i = 0; i < 8; i++) {
    result.push(greens.shift());
  }
  result.push(yellows.shift());
  for (let i = 0; i < 3; i++) {
    result.push(greens.shift());
  }
  result.push(yellows.shift());
  result.push(greens.shift());
  result.push(yellows.shift());
  for (let i = 0; i < 3; i++) {
    result.push(greens.shift());
  }
  result.push(yellows.shift());
  for (let i = 0; i < 3; i++) {
    result.push(greens.shift());
  }
  result.push(yellows.shift());
  result.push(greens.shift());
  result.push(yellows.shift());
  for (let i = 0; i < 3; i++) {
    result.push(greens.shift());
  }
  result.push(yellows.shift());
  for (let i = 0; i < 8; i++) {
    result.push(greens.shift());
  }
  return result;
};

let tiles = orderfy(tordleGreens, tordleYellows);

//every click of any button changes the next field to its appropriate color
let tileCounter = 0;
const colorize = (ev) => {
  if (ev.target.tagName === 'BUTTON') {
    tiles[tileCounter].classList.remove('grey');
    tileCounter++;
  }
};

const test = () => {
  console.log('hi');
};

keyboard.addEventListener('click', colorize);

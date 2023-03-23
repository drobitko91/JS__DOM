'use strict';

// task 1

let playList = [
  {
    author: 'LED ZEPPELIN',
    song: 'STAIRWAY TO HEAVEN',
  },

  {
    author: 'QUEEN',
    song: 'BOHEMIAN RHAPSODY',
  },

  {
    author: 'LYNYRD SKYNYRD',
    song: 'FREE BIRD',
  },

  {
    author: 'DEEP PURPLE',
    song: 'SMOKE ON THE WATER',
  },

  {
    author: 'JIMI HENDRIX',
    song: 'ALL ALONG THE WATCHTOWER',
  },

  {
    author: 'AC/DC',
    song: 'BACK IN BLACK',
  },

  {
    author: 'QUEEN',
    song: 'WE WILL ROCK YOU',
  },

  {
    author: 'METALLICA',
    song: 'ENTER SANDMAN',
  },
];

const listEl = document.querySelector('.song-list');

playList.forEach((element) => {
  let liEl = listEl.appendChild(document.createElement('li'));
  liEl.textContent = `Автор: ${element.author} - Пісня: ${element.song}`;
});


// task 2

const buttonEl = document.getElementById('showDialog');
const dialogEl = document.getElementById('dialog');

buttonEl.addEventListener('click', () => {
  dialogEl.showModal();
});


// task 3

const redEl = document.querySelector('.red');
const yellowEl = document.querySelector('.yellow');
const greenEl = document.querySelector('.green');
const buttonTraffic = document.getElementById('changeColor');

buttonTraffic.addEventListener('click', () => {
  if (getComputedStyle(redEl).backgroundColor === 'rgb(255, 0, 0)') {
    redEl.style.backgroundColor = 'gray';
    yellowEl.style.backgroundColor = 'yellow';
    return;
  }

  if (getComputedStyle(yellowEl).backgroundColor === 'rgb(255, 255, 0)') {
    yellowEl.style.backgroundColor = 'gray';
    greenEl.style.backgroundColor = 'green';
    return;
  }

  if (getComputedStyle(greenEl).backgroundColor === 'rgb(0, 128, 0)') {
    greenEl.style.backgroundColor = 'gray';

    redEl.style.backgroundColor = 'red';
    return;
  }
});
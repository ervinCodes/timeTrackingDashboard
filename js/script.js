'use strict';

// Initiated variables for buttons and current & previous data
let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');
let current = document.querySelectorAll('.current');
let previous = document.querySelectorAll('.previous');

console.log(current);
console.log(previous);

window.onload = function () {
  fetch('./data.json')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      // Loads current weekly data on screen load
      for (let i = 0; i < data.length; i++) {
        current[i].textContent = `${data[i].timeframes.weekly.current}hrs`;
        previous[
          i
        ].textContent = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
      }
      // Loads daily information when daily button is clicked
      dailyBtn.addEventListener('click', function () {
        for (let i = 0; i < data.length; i++) {
          current[i].textContent = `${data[i].timeframes.daily.current}hrs`;
          previous[
            i
          ].textContent = `Last Week - ${data[i].timeframes.daily.previous}hrs`;
        }
      });
      // Loads weekly information when daily button is clicked
      weeklyBtn.addEventListener('click', function () {
        for (let i = 0; i < data.length; i++) {
          current[i].textContent = `${data[i].timeframes.weekly.current}hrs`;
          previous[
            i
          ].textContent = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
        }
      });
      // Loads monthly information when daily button is clicked
      monthlyBtn.addEventListener('click', function () {
        for (let i = 0; i < data.length; i++) {
          current[i].textContent = `${data[i].timeframes.monthly.current}hrs`;
          previous[
            i
          ].textContent = `Last Week - ${data[i].timeframes.monthly.previous}hrs`;
        }
      });
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
};

for (let i = 1; i <= 100; i++) {
  let result = '';
  if (i % 3 === 0) {
    result += 'Fizz';
  }
  if (i % 5 === 0) {
    result += 'Buzz';
  }
  if (result == '') {
    result = i;
  }
  console.log(result);
}

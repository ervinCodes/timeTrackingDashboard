'use strict';

// Variables
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
      for (let i = 0; i < data.length; i++) {
        current[i].textContent = `${data[i].timeframes.weekly.current}hrs`;
        previous[
          i
        ].textContent = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
      }

      dailyBtn.addEventListener('click', function () {
        for (let i = 0; i < data.length; i++) {
          current[i].textContent = `${data[i].timeframes.daily.current}hrs`;
          previous[
            i
          ].textContent = `Last Week - ${data[i].timeframes.daily.previous}hrs`;
        }
      });

      weeklyBtn.addEventListener('click', function () {
        for (let i = 0; i < data.length; i++) {
          current[i].textContent = `${data[i].timeframes.weekly.current}hrs`;
          previous[
            i
          ].textContent = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
        }
      });

      monthlyBtn.addEventListener('click', function () {
        for (let i = 0; i < data.length; i++) {
          current[i].textContent = `${data[i].timeframes.monthly.current}hrs`;
          previous[
            i
          ].textContent = `Last Week - ${data[i].timeframes.monthly.previous}hrs`;
        }
      });
      //loading content once page loads
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
};

/* jshint esversion: 6 */
/* jshint devel: true */
/* jshint node: true */
/* jshint browser: true */
'use strict';

//==============================================================================
// Part 1
// 1
document.addEventListener('DOMContentLoaded', function() {

  // 2
  var h1 = document.getElementById('change_heading');
  h1.innerText = 'Hello World!';

  // 3
  var section = document.querySelector('section');
  section.addEventListener('mouseover', function(e) {
    var span = document.getElementsByClassName('selected')[0];
    span.innerText = e.target.className;
  });

  // 4
  var newDiv = document.createElement('div');

  // 5
  newDiv.className = 'purple';
  newDiv.style.backgroundColor = 'purple';

  // 6
  section.appendChild(newDiv);


  //==============================================================================
  // Part 2
  var button = document.querySelector('button');
  var car1 = document.querySelector('.car1');
  var car2 = document.querySelector('.car2');

  car1.style.marginLeft = 0;
  car2.style.marginLeft = 0;

  // reset function to clear the timers so that the cars don't keep going forever
  function resetGame(carTimer1, carTimer2) {
    clearInterval(carTimer1);
    clearInterval(carTimer2);
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;
  }

  // event listener to start the cars racing when the button is clicked
  button.addEventListener('click', function() {
    var end = window.innerWidth;

    var carTimer1 = setInterval(function() {
      car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 10 + 'px';

      if (parseInt(car1.style.marginLeft) > end) {
        alert("Car 1 wins!");
        resetGame(carTimer1, carTimer2);
      }
    }, 50);

    var carTimer2 = setInterval(function() {
      car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 10 + 'px';

      if(parseInt(car2.style.marginLeft) > end) {
        alert("Car 2 wins!");
        resetGame(carTimer1, carTimer2);
      }
    }, 50);

  });









});

/* jshint esversion: 6 */
/* jshint devel: true */
/* jshint node: true */
'use strict';


//==============================================================================
// countdown
function countdown(num) {
	var timer = setInterval(function() {
		num--;

		if (num <= 0) {
			clearInterval(timer);
			console.log('DONE!');
		} else console.log(num);
	}, 1000);
}

//==============================================================================
// randomGame
function randomGame() {
	var number = 0;
	var count = 0;

	var timer = setInterval(function() {
		number = Math.random();
		console.log(number);
		count++;

		if (number > 0.75) {
			clearInterval(timer);
			console.log('It took ' + count + ' try(tries)');
		}
	}, 1000);
}

//==============================================================================
// isEven
function isEven(number) {
	return number % 2 === 0;
}

//==============================================================================
// isOdd
function isOdd(number) {
	return number % 2 !== 0;
}

//==============================================================================
// isPrime
function isPrime(number) {
	if (number === 2) return true;
	if (number === 1 || number % 2 === 0) return false;

	for (var i = 3; i < number; i++) {
		if (number % i === 0) return false;
	}

	return true;
}

//==============================================================================
// numberFact
function numberFact(number, cb) {
	return cb(number);
}

//==============================================================================
// find
function find(array, cb) {
	for (var i = 0; i < array.length; i++) {
		if (cb(array[i])) return array[i];
	}
}

//==============================================================================
// findIndex
function findIndex(array, cb) {
	for (var i = 0; i < array.length; i++) {
		if (cb(array[i])) return i;
	}
}

//==============================================================================
// specialMultiply
function specialMultiply(num1, num2) {
	if (arguments.length === 2) return num1 * num2;
	else {
		return function(num2) {
			return num1 * num2;
		};
	}
}

specialMultiply(3,4);
specialMultiply(3)(4);
specialMultiply(3);

/* jshint esversion: 6 */
/* jshint devel: true */
/* jshint node: true */
'use strict';


//==============================================================================
// rotate
function rotate(array, number) {
  var element;

  for (var i = 0; i < number; i++) {
    element = array.pop();
    array.unshift(element);
  }

  return array;
}

console.log(rotate([1,2,3], 1));
console.log(rotate([1,2,3], 2));
console.log(rotate([1,2,3], 3));

//==============================================================================
// makeXOGrid
function makeXOGrid(rows, columns) {
  var grid = [];
  var element = 0;

  for (var i = 0; i < rows; i++) {
    var row = [];

    for (var j = 0; j < columns; j++) {
      if (element % 2 === 0) row.push('X');
      else row.push('O');

      element++;
    }

    grid.push(row);
  }

  return grid;
}

console.log(makeXOGrid(1,4));
console.log(makeXOGrid(3,2));
console.log(makeXOGrid(3,3));



// end

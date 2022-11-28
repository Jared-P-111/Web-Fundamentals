//a great way to start is by making a loop that prints out each number individually!

function isPresent2d(arr2d, value) {
  var moeFlat = flatten(arr2d);

  for (let i = 0; i < moeFlat.length; i++) {
    if (moeFlat[i] === value) {
      return true;
    }
  }
  return false;
}

var arr2d2 = [
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7],
];

console.log(isPresent2d(arr2d2, 6)); //should return true
console.log(isPresent2d(arr2d2, 9)); //should return false

// complete the following function
function flatten(arr2d) {
  var flat = [];
  for (let i = 0; i < arr2d.length; i++) {
    for (let j = 0; j < arr2d[i].length; j++) {
      flat.push(arr2d[i][j]);
    }
  }
  return flat;
}
//                                         i     j
//                                         ⬇     ⬇
var result = flatten([
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7],
]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

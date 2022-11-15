// swap the array

function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    var temp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
//             0  1  2   3    4   5
//             ⬇i                 ⬇arr.length
var testArr = [4, 8, 15, 16, 23, 42];

console.log(reverse(testArr));

console.log(reverse(testArr)); //should print out [42,32,16,15,8,4]
var testArr2 = ['vanilla', 'chocolate', 'pistachio', 'strawberry'];
console.log(reverse(testArr2)); //should print out ["strawberry","pistachio","chocolate","vanilla"]

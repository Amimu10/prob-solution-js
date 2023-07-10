// var business = 450;
// var minister = 650;
// var sochib = 550;

// var max = Math.max(business, minister);
// console.log(max);

// var numbers = [2, 5, 8, 1, 3];
// var maxNumber = Math.min(...numbers);

// console.log(maxNumber);

// var marks = [120, 235, 435, 453, 456, 354];
// var maxNum = marks[0];

// for(var i = 1; i < marks.length; i++){
//     if(marks[i] > maxNum){
//      maxNum = marks[i];
// }

// }
// console.log(maxNum);

// var numbers = [120, 235, 435, 453, 456, 354];
// var maxNumber = numbers[0]; // Assume the first element as the initial maximum

// for (var i = 1; i < numbers.length; i++) {
//   if (numbers[i] > maxNumber) {
//     maxNumber = numbers[i]; // Update the maximum if a larger number is found
//   }
// }

// console.log(maxNumber); // Output: 8

var marks = [243, 342, 435, 645, 235];
var maxNum = marks[0];

for( var i = 1; i < marks.length; i++){
  if(marks[i] > maxNum){
    maxNum = marks[i];
  }
}

console.log(maxNum);


// function shuffleArray(array) {
//   array.sort(function() {
//     return Math.random() - 0.5;
//   });
//   return array;
// }
// const myArray = [1, 2, 3, 4, 5];
// const shuffledArray = shuffleArray(myArray);
// console.log(shuffledArray);


// function shuffleArray(array){
//     array.sort (function(){
//         return Math.random() - 0.5;
//     })
//    return array;
// }

// var array = [12, 45, 67, 35];
// var result = shuffleArray(array);
// console.log(result);

function shuffleArray(array) {
    array.sort(function() {
      return Math.random() - 0.5;
    });
    return array;
  }
  
  var imageArray = [
   "images/1.avif",
   "images/2.avif",
   "images/3.avif",
   "images/4.avif",
   "images/5.avif"
  ];
  
  var shuffledImages = shuffleArray(imageArray);
  console.log(shuffledImages);
  

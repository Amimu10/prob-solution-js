

// function reverseString(str){
//     var reverse = " ";

//     for(var i = 0; i < str.length; i ++){
//         var char = str[i];
//         reverse = char + reverse;
//     }
//     return reverse;
// }

// var statement = "Hello Alien bhai brother";
// var forAlien = reverseString(statement);
// console.log(forAlien);

// var foodBlog = reverseString("its a good food.");
// console.log(foodBlog);


function reverseString(str){
    var reverse = "";

    for(i = 0; i < str.length; i ++){
        var char = str[i];
        reverse = char + reverse;
    }

    return reverse;
}

var statement = reverseString("hello brother how are you doing?");
console.log(statement);

var foodBlog = reverseString("wow ! this is a interesting food");
console.log(foodBlog);







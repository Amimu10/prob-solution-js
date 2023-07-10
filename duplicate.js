var num = [1, 2, 3, 4, 2, 3, 5, 6, 6];

var uniqueNum = [];

for(i = 0; i < num.length; i ++){
    var element = num[i];

    var index = uniqueNum.indexOf(element);

    if(index == -1){
        uniqueNum.push(element);
    }
}

console.log(uniqueNum);
function randomRange(minNum, maxNum){
    //Math floor runs up numgenerated to whole numbers
    return Math.floor(Math.random()* (maxNum -minNum + 1))+ minNum;
}

let randomNum = randomRange(10, 30);
console.log(randomNum);
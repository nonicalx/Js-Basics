const sum = (...numbers)=>{
    let sum = numbers.reduce((a,b)=> a+b,0);

    return sum;
}

console.log(sum(2,4,6,8,10));
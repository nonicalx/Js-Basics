function multiplyAll(arr){
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
         for (let j = 0; j < arr[i].length; j++) {
             product *= arr[i][j];
              
         }
        
    }
    return  product;
}

let myArray = [[2,4], [4,5], [7,6,8], [3,8,9,1]];

let product = multiplyAll(myArray);

console.log(product);
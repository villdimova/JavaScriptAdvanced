function sumFirstAndLast(numbers){
let first= Number(numbers[0]);
let last= Number(numbers[numbers.length-1]);
let sum= first+last;
console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);

function solve(numbers){
let result=[];
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i]<0){
        result.unshift(numbers[i]);
        
    }else{
        result.push(numbers[i]);
        
    }
    
}
for (let index = 0; index < result.length; index++) {
    console.log(result[index]);
    
}
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
function solve(matrix){
let firstSum=0;
let secondSum=0;

let elementfirstIndex=0;
let elementLastIndex=matrix.length-1;
matrix.forEach((row)=>{
    firstSum+=row[elementfirstIndex];
    elementfirstIndex++;
})
matrix.forEach((row)=>{
    secondSum+=row[elementLastIndex];
    elementLastIndex--;
})

console.log(firstSum + ' ' + secondSum);

}
solve([[20, 40],
    [10, 60]]);

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );        
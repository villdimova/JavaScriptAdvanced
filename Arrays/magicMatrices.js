function solve(matrix){
for (let i = 0; i < matrix.length-1; i++) {
    let firstRow=matrix[i].reduce((a,b)=>a+b,0);
    let secondRow= matrix[i+1].reduce((a,b)=>a+b,0);
    let firstCol=0;
    let secondCol=0;
    for (let j = 0; j < matrix.length; j++) {
        firstCol+=matrix[i][j];
        secondCol+=matrix[i+1][j];
        
    }
    if(firstRow!==secondRow||firstCol!==secondCol){
        return false;
        
        }
        else{
            return true;
        }
    
}
    
      

}
console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));
  console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   )); 
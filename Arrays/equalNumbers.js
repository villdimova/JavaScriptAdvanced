function solve(matrix){
    let pairsCount=0;
matrix.forEach((row,i)=>{
    row.forEach((element,j)=>{
        
        if(element===row[j+1]){
            pairsCount++;
        }
        if (matrix[i+1] && element===matrix[i+1][j]) {
            pairsCount++;
        }
        
    });       
});
    console.log(pairsCount);
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);
solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);
function solve(array){
    let biggestNumber=array[0][0];
    for (const row of array) {
        for (const item of row) {
            if(item>biggestNumber){
                biggestNumber=item;
            }
        }
    }

    console.log(biggestNumber);

}
solve([[20, 50, 10],
    [8, 33, 145]]);

    solve([[3, 5, 7, 12],
        [-1, 4, 33, 2],
        [8, 3, 0, 4]]
       );
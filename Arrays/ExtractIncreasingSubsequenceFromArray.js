function solve(input){
    let output=[];
    let lastElement=null;
    
for (let i = 0; i < input.length; i++) {
    if(input[i]>=lastElement){
        output.push(input[i]);
        lastElement=input[i];
    }
    
}
console.log(output.join("\n"));
}
solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );
    solve([1, 
        2, 
        3,
        4]
        );
    solve([20, 
        3, 
        2, 
        15,
        6, 
        1]
        );    
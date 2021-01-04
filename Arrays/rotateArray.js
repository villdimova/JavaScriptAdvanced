function solve(input){
    let rotations=input.pop();
    for (let i = 0; i < rotations; i++) {
        let element= input.pop();
        input.unshift(element);
        
    }
    console.log(input.join(" "));
}
solve(['1', 
'2', 
'3', 
'4', 
'2']
);

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
);
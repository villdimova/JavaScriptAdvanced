function solve(input){
let n=input.pop();
for (const key in input) {
    if (key%n===0) {
        console.log(input[key]);
        
    }
}
}
solve(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
)
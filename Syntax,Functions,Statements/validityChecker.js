function solve(input){
let x1= Number(input[0]);
let y1= Number(input[1]);
let x2= Number(input[2]);
let y2= Number(input[3]);
let firstDistanceToCenter=Math.sqrt((x1-0)**2+(y1-0)**2);
let secondDistanceToCenter=Math.sqrt((x2-0)**2+(y2-0)**2);
let distance=Math.sqrt((x1-x2)**2+(y1-y2)**2);
if(Number.isInteger(firstDistanceToCenter)){
console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
}
else{
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)   
}

if(Number.isInteger(secondDistanceToCenter)){
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }
    else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)   
    }

    if(Number.isInteger(distance)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        }
        else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)   
        }
}
solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);

function solve(numbers){
let filteredNumbers= numbers
            .filter((x,i)=>i%2!=0);
let doubledResult= filteredNumbers
            .map(x=>x*2)
            .reverse();  
    console.log(doubledResult.join(' '));                      
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);
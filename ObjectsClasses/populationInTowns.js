function solve(input){
    
    let result= input
    .map(x=>x.split(' <-> '))
    .reduce(
        (a,x)=>{
            let currentTown=x[0];
            let population= Number(x[1]);
            if(!a.hasOwnProperty(currentTown)){
                a[currentTown]=0;
            }
            a[currentTown]+=population;
            return a;
        },
        {}
        )
    Object.keys(result).forEach(x=> console.log(`${x} : ${result[x]}`))
    
}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);
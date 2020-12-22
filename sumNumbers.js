function sumNumbers(numOne,numTwo){
    let n=Number(numOne);
    let m=Number(numTwo);
    let result;
    result=0;

    for(let i=n;i<=m;i++){
        result+=i;
    }
    return result;
}

let sum= sumNumbers(5,10);
console.log(sum);
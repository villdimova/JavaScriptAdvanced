function calculateLength(firstString,secondString,thirdString){
    let sumLength;
    let averageLength;

    let firstStringLength=firstString.length;
    let secondStringLength=secondString.length;
    let thirdStringLength=thirdString.length;
    sumLength= firstStringLength+secondStringLength+thirdStringLength;
    averageLength=Math.floor((sumLength)/3);
    console.log(sumLength);
    console.log(averageLength);
}

calculateLength('chocolate', 'ice cream', 'cake');
calculateLength('pasta', '5', '22.3');
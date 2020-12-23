function calculateNeededMoney(typeFruit,inputWeight,inputPrice){
    let fruit=typeFruit;
    let weight=Number(inputWeight)/1000;
    let price=weight*inputPrice; 
    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}
calculateNeededMoney('apple', 1563, 2.35);
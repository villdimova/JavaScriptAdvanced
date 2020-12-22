function getCircleArea(param){
    let paramtype=typeof(param);
    if(paramtype==='number') {
        let area;
        area=Math.pow(param,2)*Math.PI;
        console.log(area.toFixed(2));
    } else{
        console.log(`We can not calculate the circle area, because we receive a ${paramtype}.`)
    }

    
}

    getCircleArea(5);
    getCircleArea('teri');
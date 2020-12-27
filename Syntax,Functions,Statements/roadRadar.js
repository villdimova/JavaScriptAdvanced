function roadRadar(speed,area){
    let speedSurplus;
    let speedArea=0;
        
    
        if(area==='motorway'){
            speedArea=130;
            
        }   
        else if(area==='interstate'){
             speedArea=90;   
            
        }
        else if(area==='city'){
              speedArea=50;  
            
        }
        else if(area==='residential'){
               speedArea=20;
        }
        speedSurplus=Number(speed)-speedArea;
        if(speedSurplus>0){
            printMessage(speedSurplus);
        }
        else{
            console.log('');
        }

    function printMessage(surplus){
       
         if(speedSurplus<=20){
            console.log('speeding');
        }
        else if(speedSurplus<=40){
            console.log('excessive speeding');
        }
        else if(speedSurplus>40){
            console.log('reckless driving');
        }
        
    }
    
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
       
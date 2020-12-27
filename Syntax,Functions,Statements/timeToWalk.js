function timeToWalk(steps,footLength,speed){
    let distance= steps*footLength;
    let speedInMetersPerSeconds=speed/3.6;
    let additionalTime= Math.floor(distance/500);
    let time= distance/speedInMetersPerSeconds+additionalTime*60;
    
    let timeInHours=Math.floor(time/3600); 
    let timeInMinuts=Math.floor(time/60);
    let timeInSeconds=Math.ceil(time%60);
    
   console.log(`${timeInHours<10 ? 0 : ''}${timeInHours}:${timeInMinuts<10 ? 0 : ''}${timeInMinuts}:${timeInSeconds<10 ? 0 : ''}${timeInSeconds}`);
    
   
}
 
 

timeToWalk(4000, 0.60, 5);
timeToWalk(2504, 0.70, 5.5);

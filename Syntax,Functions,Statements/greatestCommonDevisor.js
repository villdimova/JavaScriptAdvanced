function getCommonDevisor(numberOne,numberTwo){
   let greaterValue;
   let devisor=0;
   let maxDevisor=0;
   if(numberOne>numberTwo){
    greaterValue=numberOne;
   }else{
    greaterValue=numberTwo;
   }
   for(i=0;i<=greaterValue;i++){

    if(numberOne%i===0&&numberTwo%i===0){
        devisor=i;
        if(devisor>maxDevisor){
            maxDevisor=devisor;
        }
    }

   }
   console.log(maxDevisor);

}

getCommonDevisor(5,15);
getCommonDevisor(240,80);
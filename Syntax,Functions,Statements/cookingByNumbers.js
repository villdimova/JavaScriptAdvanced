function solve(input){
    let number= Number(input[0]);

    for(let i = 1;i<input.length;i++){
        switch(input[i]){
            case'chop':
            number/=2;
            break;

            case'dice':
            number=Math.sqrt(number);    
            break;

            case'spice':
            number+=1;
            break;

            case'bake':
            number*=3;
            break;

            case 'fillet':
            number-=number*20/100;
            break;

        }
        console.log(number);
    }



}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
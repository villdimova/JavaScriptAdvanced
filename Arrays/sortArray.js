function sortArray(input){
    input.sort(twoCriteriaSort);
    input.forEach(e=>console.log(e));
     
    function twoCriteriaSort(current,next){
        if(current.length===next.length){
            return current.localeCompare(next);
        }
        return current.length-next.length;
    }
}

sortArray(['alpha', 'beta', 'gamma']);
sortArray(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);
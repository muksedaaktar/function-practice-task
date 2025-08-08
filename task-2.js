function findNum(number){
    if(number%2==1){
        const multiply = number*2;
        return multiply;
    }
    else{
        const divide = number/2;
        return divide;
    }
}
 const output = findNum(20);
 console.log(output);
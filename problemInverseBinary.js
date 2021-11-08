function inverseBinary(num){
    let number = num.toString();
    let numberArray = [];
    let lastArray = [];
    for (let i = 0; i < number.length; i++){
        numberArray.push(Number(number.charAt(i)));
    }
    for (let i=0; i < numberArray.length; i++){
        if (numberArray[i] === 0){
            lastArray.push(numberArray[i] + 1);
        }
        else if (numberArray[i] === 1){
            lastArray.push(numberArray[i] - 1);
        }
    }
    if (lastArray.length % 4 !== 0){
        lastArray.unshift(1)
    }
    return lastArray.join("")
}
console.log(inverseBinary(111))
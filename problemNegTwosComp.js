function sumBinary(numA, numB){
    let numberA = numA.toString();
    let numberB = numB.toString();
    let arrayA = [];
    let arrayB = [];
    for (let i = 0; i < numberA.length; i++){
        arrayA.push(Number(numberA.charAt(i)));
    }
    for (let i = 0; i < numberB.length; i++){
        arrayB.push(Number(numberB.charAt(i)));
    }
    if (arrayA.length > arrayB.length){
        for (let i = (arrayA.length - arrayB.length); i > 0; i--){
            arrayB.unshift(0);
        }
    }
    if (arrayB.length > arrayA.length){
        for (let i = (arrayB.length - arrayA.length); i > 0; i--){  
            arrayA.unshift(0);
        }        
    }
    let lastArray = [];
    let carry = 0;
    for (let i = arrayA.length - 1; i >= 0; i--){
        let result = carry + arrayA[i] + arrayB[i];
        if (carry === 1){
            carry--
        }
        if (result === 2){
            lastArray.unshift(0);
            carry++;
        }
        else if (result === 3){
            lastArray.unshift(1);
            carry++;
        }
        else{
            lastArray.unshift(result);
        }
    }
    if (carry ===1){
        lastArray.unshift(1);
    }
    return lastArray.join("")
}


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
function negTwosComp(num){
    return sumBinary(inverseBinary(num), 1);
}
console.log(negTwosComp(100))
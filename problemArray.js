function isPrime(num){ 
    if  (num === 1) {return false; 
    }        
    if (num === 2) {return true;
    }     
    for (let i=2; i<=Math.sqrt(num); i++){
        if (num % i === 0) {return false; 
    }}
    return true;
}
function getPrimes(firstNum, lastNum){
    let primes = [];
    for(let i = firstNum; i <= lastNum; i++){
        if (isPrime(i) === true){
            primes.push(i);
        }
    }
    return primes
}
console.log(getPrimes(2,9))
function reverseNum(num){
    let reverse = [];
    while (num > 0) {
        reverse.push(num % 10);
        num = Math.floor(num / 10);
    }
    reverse = reverse.join("")
    return reverse
}
function isPalindrome(num){
    if (num == reverseNum(num)){
        return true;
    } 
    else {
        return false;
    }
}
console.log(isPalindrome(3003))
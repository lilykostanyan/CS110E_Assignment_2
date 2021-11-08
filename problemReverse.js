function reverseNum(num){
    let reverse = [];
    while (num > 0) {
        reverse.push(num % 10);
        num = Math.floor(num / 10);
    }
    reverse = reverse.join("")
    return reverse
}
console.log(reverseNum(3456));
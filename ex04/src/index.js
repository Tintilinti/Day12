function sumFibonacci(num) {
    var number = 0;
    var nextNumber = 1;
    var sum = 0;
    while (nextNumber <= num) {
        if ( nextNumber % 2 !== 0) {
            sum += nextNumber;
        }
        nextNumber += number;
        number = nextNumber - number;
    }
    return sum;
}
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
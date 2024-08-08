function FizzBuzz(num) {
// Reminder: % (Modulo operator) returns the remainder of the division of the first operand by the second operand.
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {
    return num;
  }
}

const result1 = FizzBuzz(3);
const result2 = FizzBuzz(5);
const result3 = FizzBuzz(15);

console.log(`Output with 3: ${result1}`); // Output: Fizz
console.log(`Output with 5: ${result2}`); // Output: Buzz
console.log(`Output with 15: ${result3}`); // Output: FizzBuzz

module.exports = FizzBuzz;
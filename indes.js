// Part 1 FizzBuzz
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }
  
  // Prime numbers

  /*/*Declare an arbitrary number, n.
Create a loop that searches for the next prime number, 
starting at n and incrementing from there.
As soon as you find the prime number, 
log that number and exit the loop. */

  //For loop:

  /*
let n = 89;
let i;
let prime;
for (i=n+1; true; i++)
{
    prime = true;
    for (j = 2; j < i; j++){
        if (i % j == 0){
            prime = false;
            break;
        }
    }

    if (prime) {
        console.log(`Prime number is  ${i}`);
        break;
    }
}

*/

// While Loop

let n = 89
let foundPrime = false
let i = n + 1
let nextPrime;

outerLoop: while (!foundPrime) {

  for (let j = 2; j < i; j++){
    if (i % j === 0){
      // this is not a prime number, because it was divisible
      i++
      continue outerLoop
    }
  }
  // If I get to this line of the while loop, you have found a prime number

  nextPrime = i 
  foundPrime = true 
}

console.log(nextPrime)
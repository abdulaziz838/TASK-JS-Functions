/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {

  console.log (` Hello ${name} `);
}
greet(`abdulaziz`);

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  let message;

  if ( n % 2 === 0 ) {
    message = ` The Number ${n} is even`;
  } else {
       message = ` The Number ${n} is odd`;
    }
    console.log (message);
  }
isOdd(11);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  let message;

  if ( n % 2 === 0 ) {
    message = `${n+n}`;
  } else {
       message = `${n*n}`;
    }
    console.log (message);
}
squareOrDouble(9);
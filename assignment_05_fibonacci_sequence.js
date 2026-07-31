// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

const readlineSync = require('readline-sync');

function generateFibonacciTerms(n) {
    if (n <= 0) {
        return [];
    }

    const terms = [0];
    if (n === 1) {
        return terms;
    }

    terms.push(1);
    for (let i = 2; i < n; i++) {
        const nextValue = terms[i - 1] + terms[i - 2];
        terms.push(nextValue);
    }
    return terms;
}

function printFibonacciSequence(n) {
    if (n <= 0) {
        console.log('Error: N must be a positive integer.');
        return;
    }

    const terms = generateFibonacciTerms(n);
    console.log(`Fibonacci sequence: ${terms.join(' ')}`);
}

function isFibonacciNumber(number) {
    if (number < 0) {
        return false;
    }

    let previous = 0;
    let current = 1;
    while (current <= number) {
        if (current === number) {
            return true;
        }
        const nextValue = previous + current;
        previous = current;
        current = nextValue;
    }

    return false;
}

function main() {
    console.log('1. Print first N terms');
    console.log('2. Check if a number is Fibonacci');
    console.log('3. Quit');
    const choice = readlineSync.questionInt('Select an option (1-3): ');

    if (choice === 1) {
        const n = readlineSync.questionInt('How many terms? ');
        printFibonacciSequence(n);
    } else if (choice === 2) {
        const number = readlineSync.questionInt('Enter a number to check: ');
        const result = isFibonacciNumber(number);
        if (result) {
            console.log(`${number} is a Fibonacci number.`);
        } else {
            console.log(`${number} is NOT a Fibonacci number.`);
        }
    } else if (choice === 3) {
        console.log('Goodbye!');
    } else {
        console.log('Invalid option.');
    }
}

main();



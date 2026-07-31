// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

const readlineSync = require('readline-sync');

function readMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const rowInput = readlineSync.question(`Enter row ${i + 1}: `);
        const values = rowInput.split(' ').map(Number);
        matrix.push(values);
    }
    return matrix;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let rowText = '';
        for (let j = 0; j < matrix[i].length; j++) {
            rowText += matrix[i][j] + ' ';
        }
        console.log(rowText.trim());
    }
}

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];

    for (let col = 0; col < cols; col++) {
        const newRow = [];
        for (let row = 0; row < rows; row++) {
            newRow.push(matrix[row][col]);
        }
        transposed.push(newRow);
    }

    return transposed;
}

function addMatrices(matrixA, matrixB) {
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        return null;
    }

    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
        const row = [];
        for (let j = 0; j < matrixA[i].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;

    if (colsA !== rowsB) {
        return null;
    }

    const result = [];
    for (let i = 0; i < rowsA; i++) {
        const row = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}

function main() {
    console.log('1. Transpose matrix');
    console.log('2. Add two matrices');
    console.log('3. Multiply two matrices');
    console.log('4. Quit');

    const choice = readlineSync.questionInt('Select an option (1-4): ');

    if (choice === 1) {
        const rows = readlineSync.questionInt('Enter number of rows: ');
        const cols = readlineSync.questionInt('Enter number of columns: ');
        const matrix = readMatrix(rows, cols);
        console.log('\nOriginal Matrix:');
        printMatrix(matrix);
        console.log('\nTransposed Matrix:');
        printMatrix(transposeMatrix(matrix));
    } else if (choice === 2) {
        const rows = readlineSync.questionInt('Enter number of rows: ');
        const cols = readlineSync.questionInt('Enter number of columns: ');
        console.log('Enter matrix A:');
        const matrixA = readMatrix(rows, cols);
        console.log('Enter matrix B:');
        const matrixB = readMatrix(rows, cols);
        const result = addMatrices(matrixA, matrixB);
        if (result === null) {
            console.log('Error: Matrices must be the same size.');
        } else {
            console.log('\nResult:');
            printMatrix(result);
        }
    } else if (choice === 3) {
        const rowsA = readlineSync.questionInt('Enter number of rows for matrix A: ');
        const colsA = readlineSync.questionInt('Enter number of columns for matrix A: ');
        const rowsB = colsA;
        const colsB = readlineSync.questionInt('Enter number of columns for matrix B: ');
        console.log('Enter matrix A:');
        const matrixA = readMatrix(rowsA, colsA);
        console.log('Enter matrix B:');
        const matrixB = readMatrix(rowsB, colsB);
        const result = multiplyMatrices(matrixA, matrixB);
        if (result === null) {
            console.log('Error: Invalid matrix dimensions for multiplication.');
        } else {
            console.log('\nResult:');
            printMatrix(result);
        }
    } else if (choice === 4) {
        console.log('Goodbye!');
    } else {
        console.log('Invalid option.');
    }
}

main();


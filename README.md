# TypeScript Type Mismatch Bug

This repository demonstrates a common type mismatch error in TypeScript. The `add` function is defined to accept two numbers, but the code calls it with a number and a string, resulting in a compilation error.

## Bug

The `bug.ts` file contains the code that produces the type mismatch error. TypeScript's type system catches this error at compile time, preventing runtime issues.

## Solution

The `bugSolution.ts` file shows how to correct the error by ensuring that both arguments passed to the `add` function are numbers.  This involves either explicitly converting the second argument to a number (using `parseInt` or `Number`), or ensuring the data type is correct at the source.
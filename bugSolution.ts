function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, Number('2')); // Correct: Convert string to number

// Alternatively, ensure type correctness at the source:
let num1 = 1;
let num2 = 2;
let correctResult = add(num1, num2); 
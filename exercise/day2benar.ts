// No 1
/* Write a code to check whether the number is odd or even
○ Example: 25 → odd number, 2 → even number*/
const angka1: number = 8;

if (angka1 % 2 === 0) {
  console.log("genap");
} else {
  console.log("ganjil");
}

console.log(angka1 % 2 === 0 ? "genap" : "ganjil");

// No 2
/* Write a code to check whether the number is prime number or not
○ Example: 7 → 7 is a prime number
○ Example: 6 → 6 is not a prime number */
//Bilangan prima adalah bilangan asli yang lebih besar dari 1 dan
// hanya habis dibagi oleh 1 dan bilangan itu sendiri.
/*Asumsikan bilangan tersebut prima.
Periksa apakah bilangan kurang dari atau sama dengan 1. Jika ya, bukan prima.
Lakukan perulangan untuk memeriksa apakah bilangan habis dibagi oleh bilangan lain selain 1 dan dirinya sendiri.
Jika ditemukan pembagi, bukan prima.
Jika tidak ditemukan pembagi, maka bilangan tersebut adalah prima.*/
const num: number = 4;
let isPrime: boolean = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % 2 === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(isPrime);

// No 3
// CARA 1
/*Write a code to find the sum of the numbers 1 to N
○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
○ Example: 3 → 1 + 2 + 3 = 6 */
const number2: number = 5;
const result2: number = (number2 * (number2 + 1)) / 2;
console.log(result2);
// CARA 2
const angka2: number = 5;
let sum: number = 0;
let message: string = "";

for (let i = 1; i <= angka2; i++) {
  sum += i;
  console.log(sum);

  if (i === angka2) {
    message += i;
  } else {
    message += i + " + ";
  }
}

console.log(sum);
console.log(`${message} = ${sum}`);

// No 4

/*Write a code to find factorial of a number
○ Example: 4! → 4 x 3 x 2 x 1 = 24
○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720 */

const num4: number = 4;
let result4: number = 1;
let message4: string = "";

for (let i = num4; i >= 1; i--) {
  result4 *= i;

  if (i === 1) {
    message4 += i + " ";
  } else {
    message4 += i + " x ";
  }
}

console.log(result4);
console.log(`${message4} = ${result4}`);

// No 5
/* Write a code to print the first N fibonacci numbers
○ Example: 15 → 610 */
const n1: number = 15;

let a1: number = 0;
let b1: number = 1;

for (let i = 0; i < n1; i++) {
  let next: number = a1 + b1;
  a1 = b1;
  b1 = next;
}

console.log(a1);
console.log(a1);

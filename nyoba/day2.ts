//problem 1

const n: number = 25;
const r: number = n % 2;
if (r == 0) {
  console.log(`${n} ini bilangan genap`);
} else {
  console.log(`${n} ini bilangan ganjil`);
}

//problem2
//ini adalah imputan
const input: number = 10;
let isprime = true;

//mengecek apakah input setara 1 ()

if (input === 1) {
  console.log(`${input} bukan bilangan prima`);
}

//mengecek input lebih besar dari 1
else if (input > 1) {
  //looping
  for (
    let i = 2;
    i <= input / 2; // 2 <= 3.5 (true)
    i++ //?
  ) {
    if (input % i == 0) {
      //7 % 2 === 0  (false)
      isprime = false;
      break;
    }
  }
  if (isprime) {
    console.log(`${input} ini bilangan prima`);
  } else {
    console.log(`${input} ini bukan bilangan prima`);
  }
}

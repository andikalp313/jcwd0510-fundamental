// 1. git add .
// 2. git commit -m "exercise day 3"
// 3. git push origin main

//problem1
const int: number = 9;
for (let i = 1; i <= 10; ++i) console.log(int + " x " + i + " = " + int * i);

//problem2
// function isPalindrome(str) {
//     let j = str.length - 1
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] != str[j]) {
//             return false;
//         }
//         j--;
//     }
//     return true;
// }

// let str1 = "racecar";
// let str2 = "nitin";
// let str3 = "Rama";

// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));
// //////////////
// const strr1 = "katak"
// let j = strr1.length - 1
// for (let i = 0; i < strr1.length / 2; i++) {
//     if (strr1[i] != strr1[j]) {
//        false;
//     }
//     j--;

// }

//problem3

const cm: number = 100000;
const km: number = cm / 100000;
console.log(`${cm} CM =  ${km} KM`);

//problem4
const price: number = 1500000;
const IDR = new Intl.NumberFormat("IDR", {
  style: "currency",
  currency: "IDR",
});
console.log(`angka ${price} jika di ubah ke rupiah = ${IDR.format(price)}`);

//problem5
let theString: string = "andika luhur pambudi";
const findString: string = "andika";
theString = theString.replaceAll(findString, "");
console.log(theString);

//problem6
////////
////////////////

//problem7

//problem8
const num1: number = 42;
const num2: number = 27;
const perbandingan: number = Math.max(num1, num2);
console.log(
  `yang paling besar antara ${num1} dan ${num2} adalah = ${perbandingan}`
);

//problem9
const x = 2;
const y = 2;
const z = 2;
if (x <= y && x <= z) {
  if (y <= z) {
    console.log(x, y, z);
  } else {
    console.log(x, z, y);
  }
} else if (y <= x && y <= z) {
  if (x <= z) {
    console.log(y, x, z);
  } else {
    console.log(y, z, x);
  }
} else if (z <= x && z <= y) {
  if (x <= y) {
    console.log(z, x, y);
  } else {
    console.log(z, y, x);
  }
}

//problem 10

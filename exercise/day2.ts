//=======================problem 1\
// mencari ganjil genap
const n: number = 35; //Program mendeklarasikan variabel n dengan nilai 35.
const r: number = n % 2; //Program menghitung sisa pembagian dari 35 dibagi 2 dan menyimpan hasilnya dalam variabel r.
if (r === 0) {
  //Program memeriksa nilai r.
  console.log(`${n} ini bilangan genap`); //Jika r adalah 0, maka program menyimpulkan bahwa 35 adalah bilangan genap dan mencetak pesan sesuai.
} else {
  console.log(`${n} ini bilangan ganjil`);
  //Jika r bukan 0 (dalam hal ini 1), maka program menyimpulkan bahwa 35 adalah bilangan ganjil dan mencetak pesan sesuai.
}

//========================= problem2

//mencari bilangan prima
//bilangan prima  hanya bisa dibagi habis oleh 1 dan bilangan itu sendiri
const angka: number = 7;
let pembagi = 0;
for (let i = 1; i <= angka; i++) {
  if (angka % i == 0) {
    pembagi++;
    console.log(i);
    console.log(pembagi);

    // 7 % 1 = 0 kondisi terpenuhi (true) jadi pembagi yang tadinya 0 (pembagi++) jadi 1
  } // 7 % 2 = 1 (false)  7 % 3 = 1 (false) 7 % 4 =3 (false) 7 % 5 =2 (false) 7 % 6 = 1 ( false)
  //  7 % 7 = 0 ( true)
}
if (pembagi == 2) {
  console.log(`${angka} Bilangan prima`);
} else {
  console.log(`${angka} bukan bilangan prima `);
}

//=====================problem3
/// sum of the numbers 1 to N
/* Pada iterasi pertama, i bernilai 1, sehingga total menjadi 0 + 1 = 1.
Pada iterasi kedua, i bernilai 2, sehingga total menjadi 1 + 2 = 3.
Pada iterasi ketiga, i bernilai 3, sehingga total menjadi 3 + 3 = 6.*/
const sumN: number = 3;
let total: number = 0;
for (let i = 1; i <= sumN; i++) {
  total += i;
}
console.log(`${total}`);

//============================problem 4

// program to find the factorial of a number

// masukkan angka
const number: number = 6;
//mengecek jika negatif maka eror
if (number < 0) {
  console.log("bilanganya ngak boleh negatif bosku eror.");
}
// jika number === 0 maka
else if (number === 0) {
  console.log(`The factorial of ${number} adalah 1.`);
}
// jika faktornya positive
else {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i; //
    /////
    // console.log(i);
    // console.log(factorial);

    /////
  }
  console.log(`faktor dari ${number} adalah ${factorial}.`);
}

//problem 5

///////////////////////

// Kode di atas dirancang untuk menghasilkan deret Fibonacci hingga suku ke-nn
/* Deret Fibonacci adalah barisan bilangan dimana setiap
 bilangan adalah hasil penjumlahan dari dua bilangan sebelumnya.*/
const nn = 15; //menghitung 15 suku pertama
let aa: number = 0; //aa adalah sebuah variabel yang menyimpan nilai awal dari barisan Fibonacci, yaitu 0.
let bb: number = 1; //Mirip dengan aa, bb juga menyimpan nilai awal dari barisan Fibonacci, yaitu 1.
let cc: number; //cc digunakan untuk menyimpan hasil penjumlahan aa dan bb pada setiap iterasi, yang kemudian akan menjadi suku berikutnya dalam barisan Fibonacci.

console.log(aa);
console.log(bb);
console.log(cc);

for (let i = 2; i <= nn; i++) {
  // Perhatikan tanda "=" pada kondisi for
  cc = aa + bb; //cc = 0 + 1 = 1   c yang tadi belum ada valuenya sekarang 1
  aa = bb; //0 = 1      terus a yang tadi 0 berubah jadi 1
  bb = cc; // 1 = 1     bb jadi 1
  console.log(cc);
  console.log(i);
}
console.log(cc);

//ARRAY

// const arr = []; //cara1 (sering dipakai)
// const arr2 = new Array(); //cara2
const arr: string[] = ["A", "B", "C"];
const arr2: string[] = new Array("A", "B", "C");

const arr3: number[] = [1, 2, 3, 4];
const arr4: number[] = new Array(1, 2, 3, 4);

//array of object

const student: { name: string; email: string }[] = [
  { name: "budi", email: "budi@mail.com" },
  { name: "siti", email: "siti@mail.com" },
  { name: "budi", email: "budi@mail.com" },
  { name: "andika", email: "andika@gamil.com" },
];

//pascalCase
//Singular

//fitur yang hanya ada di typescript
interface student {
  name: string;
  email: string; //tidak ada ? harus ada
  hobby?: string; //opsional/cadangan ///boleh ada atau enggak
  address?: Address;
}

// type Student = {  // sama kaya interface
//     name: string;
//   email: string;
// }

interface Address {
  street: string;
  city: string;
}

const students: student[] = [
  { name: "budi", email: "budi@mail.com", hobby: "futsal" },
  {
    name: "siti",
    email: "siti@mail.com",
    address: {
      street: "jalan xyz",
      city: "xyz",
    },
  },
  { name: "budi", email: "budi@mail.com" },
];

//FOR OF ============================================
const fruits: string[] = ["apple", "banan", "orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

//exercise for of
//hitung jumlah semua bilangan dalam array menggunakan for of
//ex input = [1,2,3,4,5,6] -> 21

const numbers: number[] = [1, 2, 3, 4, 5, 6];
let total: number = 0;

for (const number of numbers) {
  total += number;
}
console.log(total);

//FUNCTION=============================================
//ada dua cara untuk menuliskan fungsi
//1.function declaration // sering dipake
//bisa digunakan berkali kali
function square(number: number) {
  ///parameter //parameter bisa lebih dari satu
  return number * number; //
}
const result = square(4); //argument
const result2 = square(8); //argument

console.log(result); //bisa digunakan berkali kali
console.log(result2);

//2.function expression//jarang dipake

const square1 = function (number: number) {
  return number * number;
};

const result3 = square1(4);
const result4 = square1(2);

console.log(result3);
console.log(result4);

//FUNCTION SCOPE =========================================
//variable yang di define didalam function hanya bisa diakses
//didalam fucntion tsb

function greeting() {
  const hello = "hello";

  console.log(hello);

  return hello;
}

// console.log(hello);  // ni gak bakalan bisa karena function scope hanya bisa didalam kurung saja
greeting(); // harus ada kalo tidak didalam tidak bisa memunculkan console log

//PARAMETER & ARGUMENT
//parameter -> variable yang mewakili value dari argument yang dimasukkan

//argument -> value yang dimasukkan saat pemanggilan function

//                     PARAMETER
function greeting2(name: string) {
  const hello = "hello";
  return hello + " " + name;
}

//                    ARGUMENT
console.log(greeting2("andika"));
console.log(greeting2("andika"));
console.log(greeting2("andika"));

//DEFAULT PARAMETER================================

function multiply(a: number, b: number = 2) {
  // nilai default harus paling belakang
  console.log(a);
  console.log(b);
  return a * b;
}

console.log(multiply(5)); //di b tidak dikasih argument tidak eror karena udah ada nilai default
console.log(multiply(5, 10)); //di b tidak dikasih argument tidak eror karena udah ada nilai default

//REST PARAMETER=================================================
//mewakili sisa argument ke dalam 1 variable parameter

function myFunc(a: number, b: number, ...manyMoreargs: number[]) {
  console.log(a);
  console.log(b);
  console.log(manyMoreargs);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//NESTED FUNCTION =======================================
//fungsi yang berada didalam fungsi

function getMessage(firstName: string) {
  //inner function 1
  function sayHello() {
    return "hello " + firstName + ",";
  }
  //inner function 2
  function welcomeMessage() {
    return "Welcome to purwadhika!";
  }
  return sayHello() + " " + welcomeMessage();
}
console.log(getMessage("budi"));

//CLOSURE=================================

function greeting4(name: string) {
  const defaultMessage: string = "hello";
  return function () {
    return defaultMessage + " " + name;
  };
}

const result5 = greeting4("budi");

console.log(result5());

//RECURSIVE
//fungsi yang memanggil dirinya sendiri

function countDown(number: number) {
  console.log(number);
  let nextNumber = number - 1;
  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(10);

//ARROW FUNCTION=========================
// SHORTCUT UNTUK MENULISKAN FUNCTION EXPRESSION

//CONTOH FUNCTION EXPRESSION
const square2 = function (number: number) {
  return number * number;
};

//CONTOH JIKA DIUBAH KE ARROW FUNCTION
const square3 = (number: number) => {
  return number * number;
};

//kalo misalnya cuma 1 line bisa di bikkin kaya gini
const square4 = (number: number) => number * number;

//ARRAY BUILD IN METHOD ====================================
//---JOIN -> menggabungkan value yang ada dalam array ke dalam bentuk string
const words: string[] = ["hello", "world"];
console.log(words.join(" "));

//---POP -> menghilangkan isi value paling akhir dalam array

const words2: string[] = ["hello", "world", "hello"];
words2.pop();
console.log(words2);

//---SHIFT -> menghilangkan value paling depan dalam array
const words3: string[] = ["test", "world", "hello"];
words3.shift();
console.log(words3);

//---PUSH -> menambahkan value ke dalam array di paling akhir

const words4: string[] = ["hello", "world"];
words4.push("purwadhika");
console.log(words4);

//---UNSHIFT -> menambahkan value ke urutan paling depan array
const words5: string[] = ["hello", "world"];
words5.unshift("jogja");
console.log(words5);

//CONCAT -> menggabungkan 2 array menjadi 1 array
const aar1: string[] = ["hello"];
const aar2: string[] = ["world"];
const aar3: string[] = ["world", "ssss"];

console.log(aar1.concat(aar2));
console.log(aar1.concat(aar2).concat(aar3));

//another option
const mergeArr = [...aar1, ...aar2, ...aar3];
console.log(mergeArr);

//SPLICE -> UNTUK MENGHAPUS, MENGGANTI, ATAU MENAMBAHKAN
//VALUE PADA SEBUAH ARRAY
//RUMUS -> splice(startIndex, brpYgMauDiDelete, item)

const months: string[] = ["jan", "march", "april", "june"];

months.splice(1, 0, "feb"); //menambahkan pada index 1
console.log(months);

months.splice(4, 1); //menghapus pada index 4
console.log(months);

months.splice(3, 1, "may"); //mengganti value pada index 3
console.log(months);

//--SLICE -> mereturn array baru dengan value yang sudah ditentukan
//index start dan index end dari array tsb
//rumus :slince(startIndex, endIndex)

const fruits1: string[] = ["Apple", "Banana", "Orange", "Lemon", "Manggo"];
console.log(fruits1.slice(1, 4)); //dari depan
console.log(fruits1.slice(-4, -1)); //dari belakang

//--INDEXOF -> mencari index dari value yang kita search
//kalo tidak ditemukan akan me return -1

const fruit2: string[] = ["Apple", "Banana", "Orange", "Lemon", "Manggo"];
console.log(fruit2.indexOf("Lemon"));

//--SORT -> mengurutkan isi array berupa string atau number
//versi string
const fruits3: string[] = ["Apple", "Banana", "Orange", "Lemon", "Manggo"];
fruits3.sort();
console.log(fruits3);
//versi number tanpa conpare function
const points: number[] = [3, 5, 1, 9, 6, 2];
points.sort();
console.log(points);

//versi number menggunakan compare function
const points2: number[] = [3, 5, 1, 9, 6, 20];
points2.sort((a, b) => a - b); //asc (kecil ke besar)
// points2.sort((a,b) => b-a); //asc (besar ke kecil)

console.log(points2);

//REVERSE -> mengembalikan urutan element dalam array
const points3: number[] = [3, 5, 1, 9, 6, 2];
points3.reverse();
console.log(points3);

//FOREACH -> melakukan looping pada array tapi tidak mereturn apapun
const fruits4: string[] = ["Apple", "Banana", "Orange", "Lemon", "Manggo"]; //hanya melakukan looping saja
fruits4.forEach((fruit, index) => {
  console.log(index);
  console.log(fruit);
});

//MAP -> melakukan looping sama kaya forEach tapi mereturn arrau baru//sering dipake
const fruits5: string[] = ["Apple", "Banana", "Orange", "Lemon", "Manggo"]; //hanya melakukan looping saja

const result7 = fruits5.map((fruit) => {
  return fruit;
});
console.log(result7);

//FILTER -> melakukan looping juga sama kaYA map dan menghasilkan
// array baru berdasarkan kondisi pada return function

const ages: number[] = [32, 15, 29, 21, 40];
const result8 = ages.filter((age) => {
  return age > 17;
});

console.log(result8);

//FIND -> mencari value yang ditemukan pertama kali dalam array
const ages2: number[] = [3, 15, 29, 15, 40];
const result9 = ages2.find((age) => age > 14);

console.log(result9);

//FINDINDEX -> mirip kaya find tapi yang dihasilkan adalah indexnya
const ages3: number[] = [3, 15, 29, 15, 40];

const result10 = ages3.findIndex((age) => age > 14);

console.log(result10);

//REDUCE ->BIASA DIGUNAKAN UNTUK MELAKUKAN OPERASI ARETMATIKA PADA
//TIAP ISI ARRAY

const numbers1: number[] = [175, 50, 25, 50];
const result11 = numbers1.reduce((a, b) => a + b);
console.log(result11);

// INCLUDES -> mengecek value pada array ada apa tidak.
//hasil return nya adalah boolean
const fruits6: string[] = ["Apple", "Banana", "Orange", "Lemon", "Manggo"]; //hanya melakukan looping saja
console.log(fruits6.includes("Apple"));

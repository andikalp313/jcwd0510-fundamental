// IF STATEMENT
// SYNTAX
// if(CONDITION) {
// code block
//}

const age: number = 18;
if (age >= 17) {
  // kondisi harus boolean ( true / false)
  console.log("anda bisa buat KTP");
} // false code block tidak akan dijalankan jika umur 17 kebawah
// true code block dijalankan 17 ke atas

//==================================ELSE STATEMENT
//backup plan dari if statement

const age1: number = 10; //jika age kurang dari 17 "false" tahun makan menjalankan else
if (age1 >= 17) {
  //jika age lebih dari 17 "true" tahun makan menjalankan if
  console.log("anda bisa buat KTP");
} else {
  console.log("anda belum bisa buat KTP");
}

// =================================ELSE IF STATEMENT
//if berdiri sendiri
// else & else if tidak bisa dijalankan tanpa if
// else sebagai pembackup jika data tidak diketahui

const input: string = "A";
const grade: string = input.toLowerCase(); //karena JS sangat sensitive dengan hurup besar kecil maka menggunakan tolowercase

if (grade === "a") {
  console.log("nilai bagus");
} else if (grade === "b") {
  console.log("nilai lumayan");
} else if (grade === "c") {
  console.log("nilai buruk");
} else {
  console.log("nilai tidak diketahui");
}

//===========================SWITCH CASE
//kondisi ribet dan susah pake if else jika satu saja value pake switch case
//pake break biar tidak lanjut ke sintak berikutnya jadi suah satu paket antara case dan break

const day: string = "senin";
switch (day) {
  case "senin":
    console.log("hari senin");
    break;
  case "selasa":
    console.log("hari selasa");
    break;
  case "rabu":
    console.log("hari rabu");
    break;
  default: // default sama dengan else di if else statement
    console.log("hari tidak diketahu");
    break;
}

//=================LOGICAL OPERATOR
// && -> and
// || -> or
// ! -> not

// OR
// salah satu true maka true
const car: string = "mercy";
// false              //true        -> true  ///kalau or salah satu true maka if dijalankan
if (car === "bmw" || car === "mercy") {
  console.log("mobil jerman");
} else {
  console.log(" mobil jepang");
}

//AND
//dua duanya harus true kondisinya maka true. jika salah satu false atau dua duanya maka false

const umur: number = 18;
const punyaSIM: boolean = true;
// false                     true       -> false
if (umur >= 18 && punyaSIM === true) {
  console.log("boleh bawah kendaraan");
} else {
  console.log("belom boleh bawa kendaraan");
}

//NOT -> membalikan nilai boolean

const isSunny: boolean = true; //untuk variable boolean kita menggunakan is di awal
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

//================= TERNARY OPERATOR
//shortcut untuk if else condition
// condition ? true : false

const str: string = "typescript";

//biasa if else
if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}

//shortcut if else
console.log(str === "javascript" ? "javascript" : "not javascript");

//shortcut if  else if elseif  else
console.log(
  str === "javascript"
    ? "javascript"
    : str === "typescript"
    ? "typescript"
    : "not found"
);

//====================================LOOP STATEMENT ( PERULANGAN)
//RANGKAIAN INTRUSKSI YANG DILAKUKAN BERULANGKALI HINGGA KONDISINYA TIDAK TERPENUHI

//type loop : for loop, while loop, dan do while loop

//FOR LOOP --> mempunyai 3 statement
//statement 1 : menginisialisasikan variabel dari looping itu sendiri
//statement 2 : mendefine kondisi dari looping tersebut
//statement 3 : kode yang di eksekusi di akhir setiap iterasi

//syntax : for ( statement1;statement2;statement3){
// code block yang akan diulang ulang
//}

///////////
// 1. let i = 0 dieksekusi  2.jika i  < 5  maka menampilkan hello world
//2.jika i  < 5  maka menampilkan hello world
// 3. i ++ / i ditambah 1
// 4. mengulang terus sampai i !< 5

for (let i = 0; i < 5; i++) {
  console.log(`${i} hello world`);
}

//WHILE LOOP

//mirip kaya if diganti while

let i: number = 1;
while (i < 10) {
  console.log("hello world");
  i++;
}

//DO WHILE LOOP
//melakukan do sekali artinya akan menampilkan console.log sekali/count++ baru cek apakah count <= 5
// pengecekan di akhir

let count: number = 1;
do {
  console.log("ini iterasi ke: " + count);
  count++;
} while (count <= 5);

//===========================BREAK
// UNTUK MENGHENTIKAN LOOP
//jika satu line tidAK usah pake kurung kurawa
//jika lebih pake kurung kurawa

let sum: number = 0;
while (true) {
  console.log("sum : " + sum);

  if (sum >= 5) break;
  sum++;
}

//==========================================CONTINUE
//melakukan skip pada looping

for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

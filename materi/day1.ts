//versi JS
// const message = "Hello world";

//versi TS

const message: string = "hello world"; // harus tipe data string kalau tidak nanti bakal eror

// ==================string build in method

const nama: string = "SItIS Khotijah";
const nama2: string = " Metal";
const nama3: string = " SANGAR";

console.log(nama.toLowerCase()); // cara langsung //(mengubah ke huruf kecil)
console.log(nama.toUpperCase()); // cara langsung// (mengubah ke huruf Besar)
console.log(nama.replace("S", "o")); //cara langsung// mengganti huruf "S" ke huruf "o"
console.log(nama.replace("I", "K")); // mengganti huruf "I" ke huruf "K"
console.log(nama.replaceAll("I", "K")); //replaceAll mengganti semua huruf I ke K
console.log(nama.replaceAll("S", "j")); //replaceAll mengganti semua huruf S ke j
console.log(nama.split("")); //split merubah menjadi array per huruf
console.log(nama.split(" ")); //(spasi)setiap ketemu spasi maka dipisah dan dijadikan array
console.log(nama.split("I")); //setiap ketemu I maka dipisah dan I menghilang
console.log(nama.concat(nama2)); //menggabungkan nama satu dan nama dua
console.log(nama.concat(nama2).concat(nama3)); //menggabungkan nama satu dan nama dua
console.log(nama.slice(0, 4)); //MEMOTONG POSISI dari 0 sampai index dibawah 4
console.log(nama2.slice(4)); // memotong index 4 ke belakangnya jadi al
console.log(nama2.slice(3)); // memotong index 3 kebelakangnya

const nama1: string = nama.toLowerCase(); //mengambil dari nama lalu dimasukkan ke nama1
console.log(nama1); // cara di tampung dulu di variable
console.log(nama.slice(1, 3)); //memotong index 1 sampai sebelum 3

//======================= TEMPLATE LITERAL / TEMPLATE STRING
const nama4: string = "jack";
const message1: string = `welcome ${nama4}`; //pake template riteral LANGSUNG BISA DIKASIH SPASI
console.log(message1);
console.log("Welcome" + " " + nama4); //CARA MANUAL HARUS MASUKKAN SECARA MANUAL

//=================NUMBER BUILD IN METHOD
const ANGKA: string = "2000";
console.log(typeof Number(ANGKA)); //1.membuat string teridentifikasi menjadi number
console.log(typeof ANGKA); //2.mengecek tipe data
console.log(typeof parseInt(ANGKA)); //3.mencovert tipe data string ke number sama seperti 1
console.log(Number.MAX_VALUE); //menunjukan maksimal number
console.log(Number.MIN_VALUE); // menunjukan minimal value yang dapat disimpan

///====================TYPE CONVERSION

//String conversion
console.log(String(123)); // convert number ke string cara 1

const angka1: number = 20;
console.log(angka1.toString()); //convert number ke string cara 2

//boolean conversion

console.log(Boolean(1)); // type data "number" angka berapa saja asal bukan 0 pasti true
console.log(Boolean(0)); //type data "number" value 0 paati false
console.log(Boolean("")); //type data "string" ngak ada valuenya pasti false
console.log(Boolean("false")); //type data "string" ada value pasti true
console.log(Boolean("0")); //type data "string" ada value pasti true walaupun isinya 0

//===================== Date data Types
const now = new Date(); //new date() satu frasa
console.log(now); // mengambil tanggal hari ini

console.log(now.getFullYear()); //mengambil tahun
console.log(now.getMonth() + 1); // di JS bulan dimulai dari 0 makanya kit tambah  +1(khusus bulan) biar dimulai dari 1
console.log(now.getDate()); //mengambil tanggal
console.log(now.getHours()); //mengubah jam
//untuk pembuatan tanggal hari dan tahun get method

//set method
// now.setDate(10); // mengubah tanggal
// now.setMonth(5); // mengubah bulan
// now.setFullYear(2040); //mengubah tahun
now.setFullYear(2030, 3, 4); //merubah semuanya

console.log(now);

//==========================BASIC OPERATOR
//+
//-
// *
// /
// % //modulus ( )
// ** //PANGKAT

//////////////
console.log(1 + 1);
console.log(12 - 2);
console.log(2 * 4);
console.log(4 / 2);
console.log(9 % 2); //modulus(sisa hasil bagi)
console.log(3 ** 2); //PANGKAT

//example pake variable
const a = 20;
const b = 10;
const c = a + b;
console.log(c);

//=======================================MODIFY IN PLACE
// n = n + 2
//  example 1 penambahan
let n: number = 4;
n += 2; //shortcut
console.log(n);
//n = n + 2  //cara panjang
//example 2 perkalian
let j: number = 4;
j *= 2; //shortcut
console.log(j);

//=============================INCREMENT & DECREMENT

let counter: number = 2;
counter--; //decrement
console.log(counter);
//////////////////
let counter2: number = 2;
counter2++; // increment
console.log(counter2);

//===============================POSTFIX & prefix

let counter3: number = 2;
console.log(++counter3); //prefix (angkanya ditambah dibalik layar dan ditampilkan langsung)

let counter4: number = 2;
console.log(counter4++); //postfix (angkanya  ditambah dibalik layar setelah ditampilkan)

//=================================COMPARISON OPERATOR
//sering ditanyain saat interview
// console.log(5 == "5"); //bernilai "true" karena tidak di cek sampai type data
// console.log(5 === "5"); //bernilai "false" karena dicek sampai type data

console.log(5 > 2); //benar karena 5 lebih dari 2
console.log(5 < 2); //
console.log(5 <= 5);
console.log(5 < 5);

//=============================Math

//Math ceil -> membulatkan ke atas
console.log(Math.ceil(4.2)); //5
//Math floor -> membulatkan ke bawah
console.log(Math.floor(4.7)); //4
//Math round -> membulatkan angka ke bilangan bulat yang terdekat
console.log(Math.round(4.3)); //4
console.log(Math.round(4.6)); //5

//Math max -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(1, 2, 3, 4, 5, 6));

//Math min -> mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(2, 3, 4, 1, 5, 6));

//Math abs -> menghilangkan tanda negatif
console.log(Math.abs(-11));

// Math random -> menghasilkan angka acak antara 0 dan 1
console.log(Math.random());

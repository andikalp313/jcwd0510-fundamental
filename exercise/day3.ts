// 1. git add .
// 2. git commit -m "exercise day 3"
// 3. git push origin main

//problem1
const int: number = 9;
for (let i = 1; i <= 10; i++) {
  console.log(`${int} x ${i} = ${int * i}`);
}
//problem2
const str2 = "madam";
let reversedStr = ""; //Membuat variabel kosong reversedStr yang nantinya akan digunakan untuk menyimpan hasil pembalikan string str2

// Membalikkan string secara manual
for (let i = str2.length - 1; i >= 0; i--) {
  reversedStr += str2[i];

  console.log(i, str2, reversedStr);
  //
}

// Membandingkan string asli dengan string yang dibalik
let isPalindrome = str2 === reversedStr;

console.log(isPalindrome); // Output: true

//problem3
//CONVERT CM KE KM
const cm: number = 200000;
const km: number = cm / 100000;
console.log(`${cm} CM =  ${km} KM`);

//=======================problem4
const price: number = 1500000; //Adalah nama variabel yang akan menyimpan nilai harga.
const IDR = new Intl.NumberFormat("ID", {
  //MEWAKILI LOKASI LOKAL
  ////new Intl.NumberFormat: Membentuk sebuah objek baru yang digunakan
  style: "currency", //untuk memformat angka menjadi format mata uang.
  currency: "IDR",
});
console.log(`angka ${price} jika di ubah ke rupiah = ${IDR.format(price)}`);
// ${IDR.format(price)}: Menyisipkan hasil pemformatan angka price oleh objek IDR

//============================problem5
let theString: string = "andika luhur pambudi"; ///Menyimpan teks "andika luhur pambudi" ke dalam variabel theString.
const findString: string = "luhur"; //Menyimpan teks "andika" ke dalam variabel findString.
theString = theString.replaceAll(findString, ""); //Menghapus semua kemunculan kata "andika" dari theString.
console.log(theString); // Mencetak hasil akhir ke konsol, yang dalam hal ini adalah "luhur pambudi

//problem6
// Kode ini bertujuan untuk mengubah huruf pertama setiap kata dalam sebuah kalimat menjadi
//huruf kapital. Mari kita bedah satu per satu:
const str: string = "andika luhu";
let result: string = "";
let isNewWord: boolean = true;

for (let i = 0; i < str.length; i++) {
  let char = str[i];

  console.log(i, char);

  if (isNewWord) {
    //jika kita menulisakan huruf pertama kali maksa hasilnya menjadi char ditambah topuppercase
    result += char.toUpperCase();
    isNewWord = false;
  } else {
    //huruf kedua dst
    result += char; //menambahka hasil dengan char
  }

  if (char === " ") {
    isNewWord = true; //Setiap kali ditemukan spasi (" "), artinya kita sudah mencapai akhir sebuah kata dan akan memulai kata baru.
  }
}

console.log(result); // Output: Hello World
////////
////////////////

//problem7
const originalString: string = "anN QuiCk BrOwN Fox";
let swappedString = "";

for (let i = 0; i < originalString.length; i++) {
  //for loop digunakan untuk memeriksa setiap karakter dalam
  let char = originalString[i]; // originalString satu per satu.
  console.log(char, i);

  if (char >= "a" && char <= "z") {
    //ika karakter saat ini adalah huruf kecil (antara 'a' dan 'z'):
    swappedString += char.toUpperCase(); // diubah ke huruf kapital
  } else if (char >= "A" && char <= "Z") {
    //jika (antara A dan Z)
    swappedString += char.toLowerCase(); //diubah ke huruf kecil
  } else {
    swappedString += char; //Jika karakter bukan huruf (angka, simbol, spasi) ditambahkan tanpa perubahan
  }
}

console.log(swappedString);

//problem8
const num1: number = 42;
const num2: number = 27;
const perbandingan: number = Math.max(num1, num2);
console.log(
  `yang paling besar antara ${num1} dan ${num2} adalah = ${perbandingan}`
);

//problem9
const x: number = 2;
const y: number = 3;
const z: number = 4;
if (x <= y && x <= z) {
  // jika 2 <= 3 &&  2 <== 4
  if (y <= z) {
    //3 <= 4 (true)
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

const inputValue: number = 3; // Ganti dengan nilai yang ingin Anda periksa

if (typeof inputValue === "string") {
  console.log(1); // String
} else if (typeof inputValue === "number") {
  console.log(2); // Number
} else {
  console.log(3); // Tipe data lain
}

//problem11
let kalimat = "An apple A day keeps the doctor AWAY";
let kalimatBaru = kalimat.toLowerCase().replaceAll("a", "*");

console.log(kalimatBaru);

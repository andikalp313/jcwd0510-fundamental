//problem 1

//1.Fungsi ini bertujuan untuk mencetak pola segitiga dari angka. Misalnya, jika tinggi segitiga adalah 5, hasilnya akan seperti ini:
//2.Kita mendefinisikan fungsi bernama createTrianglePattern yang menerima satu angka
//(height) sebagai input. Ini adalah tinggi segitiga yang ingin kita buat
//3.Kita menggunakan for loop untuk menghitung setiap baris dari 1 hingga height. Jadi,
//jika height adalah 5, kita akan memiliki 5 iterasi (1, 2, 3, 4, 5)

function createTrianglePattern(height: number) {
  for (let row = 1; row <= height; row++) {
    let patternRow = ""; //// Menyimpan isi dari setiap baris pola

    console.log(patternRow);
    console.log(row);

    for (let col = 1; col <= row; col++) {
      const formattedNumber = col < 10 ? `0${col}` : `${col}`; //// Format angka menjadi dua digit kalau benar 01
      patternRow += formattedNumber + " "; //// Menambahkan angka ke patternRow
    }
    console.log(patternRow);
  }
}

const triangleHeight = 5;
createTrianglePattern(triangleHeight);

//problem 2

//
//Fungsi FizzBuzz ini sadalah mengubah angka dari 1 hingga n2 menjadi string berdasarkan aturan:

//Kelipatan 3 menjadi "Fizz"
//Kelipatan 5 menjadi "Buzz"
//Kelipatan 15 menjadi "FizzBuzz"
//Angka lainnya tetap dalam bentuk string

function fizzBuzz(n2: number) {
  const result: string[] = [];

  for (let i = 1; i <= n2; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result;
}

const n2 = 15;
const fizzBuzzResult = fizzBuzz(n2);
console.log(fizzBuzzResult.join(", "));

//problem 3
function calculateBMI(weight: number, height: number) {
  const bmi = weight / (height * height);

  console.log(bmi);

  if (bmi < 18.5) {
    return "KURANG BERAT";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "IDEAL";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return "GEMUK";
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    return "KEGEMUKAN";
  } else {
    return "OBESITAS";
  }
}

// Example usage:
const weight = 64; // in kilograms
const height = 1.72; // in meters`
const bmiCategory = calculateBMI(weight, height);
console.log(`BMI category:  ${bmiCategory} `);

//problem 4
//Metode .filter() digunakan untuk menyaring elemen-elemen dalam array.
//Hanya elemen yang memenuhi kondisi tertentu yangg akan dimasukkan dalam hasil baru.
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0); // 0 genap   //1 ganjil
}
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(inputArray);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

//pronblem5

//Metode .split() digunakan untuk memecah string menjadi bagian-bagian (dalam hal ini, kata-kata) berdasarkan pemisah yang ditentukan.
//Metode .filter() digunakan untuk menyaring elemen-elemen dalam array.
//Hanya elemen yang memenuhi kondisi tertentu yang akan dimasukkan dalam hasil baru.
function splitStringIntoWords(str: string): string[] {
  console.log(str.split(" "));

  return str.split(" ").filter((st) => st); //truethy ti value
}

const inputString2 = "  Hello     World    ";
const words = splitStringIntoWords(inputString2);
console.log(words); // Output: ["Hello", "World"]

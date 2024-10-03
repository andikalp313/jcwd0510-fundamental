{
  {
    /*problem 1
tulis kode untuk mencari luas persegi panjang
hint:
1.cari tahu cara menghitung luas persegi panjang
2. leng(panjang) x with(lebar) = luas persegi panjang (rumus)

solusi dengan pseudocode
1. definisikan variabel dan menetapkan nilai ke variabel
        const rectangleLength = 5;
        const rectangleWidth = 3;
2.define variabel to keep the result
and implement the formula luas persegi panjang
       const rectangleArea = rectangleLength * rectangleWidth;*/

    const rectangleLength = 5;
    const rectangleWidth = 3;

    const rectangleArea = rectangleLength * rectangleWidth;

    console.log(rectangleArea);

    /*problem 2
write a code to find perimeter of rectangle
Hint:
1.find out how to count perimeter of rectangle
2.leng + width + leng + width (the formula)

solution in pseudocode

1.define variable and assign value to variable
    const rectangleLeng = 5
    const rectangleWidth = 3
2.define variable to keep the result
and implement the formula perimeter of rectangle
    const perimeterRectangle = rectangleLeng + rectangleWidth +rectangleLeng + rectangleWidth
*/

    const rectangleLength2 = 5;
    const rectangleWidth2 = 3;
    const perimeterRectangle =
      rectangleLength2 + rectangleWidth2 + rectangleLength2 + rectangleWidth2;

    console.log(perimeterRectangle);
  }
}

// problem 3
/*
Write a code to find diameter, circumference and area of a circle
hint :
1.find out how to count diameter 
 diameter =radius * 2 (the formula) 
 
2.find out how to count circumference
  Circuference = PI(3.14) * Diameter (the formula)
  
3.find out how to count area
  area =radius^2 * PI(3.14) (the formula)

  solution in pseudocode

 1. define variabel and assign value to variabel
   const PI = 3.14
   const RadiusCircle = 5

   const diameterCircle = RadiusCircle * 2
   const circumferenceCircle = PI * diameterCircle
   const AreaCircle = Radiuscircle^2 * PI 
  */

const PI = Math.PI;
const RadiusCircle = 5;

const diameterCircle = RadiusCircle * 2;
const circumferenceCircle = PI * diameterCircle;
const AreaCircle = RadiusCircle * RadiusCircle * PI;

console.log(
  `diameternya adalah:${diameterCircle}, circumferenceCircle adalah: ${circumferenceCircle}, AreaCircle adalah: ${AreaCircle}`
);

//problem 4

/*
write a code to find angles of triangle if two angles are given

hint :
1.find out how to code angles of triangle if two angles are given
anglesTotal = 180 //if angles of triangle count
anglesAB = anglesA + anglesB 
angleC = anglesTotal - anglesAB 

solution in pseudocode

1.define  variabel and assign value to variabel
const anglesTotal = 180
const anglesA = 80
const anglesB = 65

const anglesAB = 80 + 65
const anglesC = 180 - anglesAB



*/
const anglesTotal = 180;
const anglesA = 80;
const anglesB = 65;

const anglesAB = 80 + 65;
const anglesC = 180 - anglesAB;

console.log(`angles C adalah : ${anglesC}`);

//problem 4

/*
write a code to convert days to years,months and day

Berikut adalah pseudocode berdasarkan kode yang Anda berikan:

```
Mulai

    Deklarasikan variabel totalDays dengan nilai 2300

    // Hitung jumlah tahun
    Set years = totalDays dibagi 365 (dibulatkan ke bawah)

    // Hitung sisa hari setelah tahun
    Set remainingDays = totalDays mod 365

    // Hitung jumlah bulan dari sisa hari
    Set months = remainingDays dibagi 30 (dibulatkan ke bawah)

    // Hitung sisa hari setelah bulan
    Set days = remainingDays mod 30

    // Tampilkan hasil dalam format: tahun, bulan, hari
    Cetak "tahun : " + years + ", bulan : " + months + ", hari : " + days

Selesai
```

### Penjelasan Pseudocode:
1. **Langkah pertama:** Menginisialisasi variabel `totalDays` dengan nilai 2300.
2. **Langkah kedua:** Menghitung jumlah tahun dengan membagi `totalDays` dengan 365 dan membulatkannya ke bawah.
3. **Langkah ketiga:** Menghitung sisa hari setelah dikonversi menjadi tahun menggunakan modulus (`%`).
4. **Langkah keempat:** Menghitung jumlah bulan dari sisa hari dengan membagi sisa hari tadi dengan 30 dan membulatkannya ke bawah.
5. **Langkah kelima:** Menghitung sisa hari setelah dikonversi menjadi bulan menggunakan modulus 30.
6. **Langkah terakhir:** Mencetak hasil berupa tahun, bulan, dan hari ke layar.

Pseudocode ini menjelaskan alur logika yang sama seperti yang ada di kode asli Anda tetapi dalam bentuk yang lebih sederhana dan mudah dipahami.*/

let totalDays = 400;

const years = Math.floor(totalDays / 365);
const remainingDays = totalDays % 365; //?
const months = Math.floor(remainingDays / 30); //?
const Days = remainingDays % 30; //?

console.log(`${years} tahun, ${months} bulan, ${Days} hari`);

//problem 5
/*Start
Input date1 (string in format "YYYY-MM-DD")
Input date2 (string in format "YYYY-MM-DD")
Convert date1 to Date object:
Parse year, month, and day from date1 string
Create new Date object for date1
Convert date2 to Date object:
Parse year, month, and day from date2 string
Create new Date object for date2
Calculate the time difference in milliseconds:
timediff = absolute value of (date2 - date1)
Convert milliseconds to days:
Divide timediff by the number of milliseconds in a day (1000 * 60 * 60 * 24)
Round up to the nearest whole number
Output the difference in days
End */

const date1 = new Date(2022, 1, 20);
const date2 = new Date(2023, 1, 22);

const timediff = Math.abs(date2 - date1); //?

const diffInDays = Math.ceil(timediff / (1000 * 60 * 60 * 24)); //?
console.log(diffInDays);

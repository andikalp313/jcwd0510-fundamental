{
  {
    //problem 1
    let lengthRectangle: number = 5;
    let widthRectangle: number = 3;
    const areaRectangle = widthRectangle * lengthRectangle;
    console.log(areaRectangle);

    //problem 2
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
    let Length: number = 5;
    let Width: number = 3;
    const perimeterRectangle = (Length + Width) * 2;
    console.log(perimeterRectangle);

    //problem 3
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

    const radius: number = 5;
    const diameter = radius * 2;
    console.log(diameter); //diameter

    const PI = Math.PI;
    const cincumference = PI * 2 * radius;
    console.log(cincumference); //keliling

    const area = PI * radius ** 2;
    console.log(area);

    //problem 4
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
    let a: number = 80;
    let b: number = 65;
    const abc: number = 180;
    const c = abc - (a + b);
    console.log(c);

    //problem 5

    const totalDays: number = 400;
    const years = Math.floor(totalDays / 365); //?
    const sisaHari = totalDays % 365; //?
    const Months = Math.floor(sisaHari / 30); //?
    const days = sisaHari % 30; //?
    console.log(`${years} Tahun, ${Months} bulan, ${days} Hari `);
    ///////////////
    const totalDays2: number = 366;
    const years2 = Math.floor(totalDays2 / 365); //?
    const sisaHari2 = totalDays2 % 365; //?
    const Months2 = Math.floor(sisaHari2 / 30); //?
    const days2 = sisaHari2 % 30; //?

    console.log(`${years2} Tahun, ${Months2} bulan, ${days2} Hari `);

    //problem 6
    const date1 = new Date();
    const date2 = new Date();

    const newdate1 = date1.setFullYear(2023, 1, 22);
    const newdate2 = date2.setFullYear(2022, 1, 4);

    const timediff = Math.abs(newdate2 - newdate1); //?

    const diffInDays = Math.ceil(timediff / (1000 * 60 * 60 * 24)); //?
    console.log(diffInDays);
  }
}

// ?1. Array icinde en boyuk ededi tapin:
// let numbers = [1, 3, 5, 7, 9, 2, 8, 6, 4, 0];
// c = 0;
// for (i = 0; i < numbers.length; i++) {
//   if (c < numbers[i]) {
//     c = numbers[i];
//   }
// }
// console.log(c);

//!2. Array icinde sade ededleri tap:
// let numbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 21];
// const numbers_prime = (num) => {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// const cavab = numbers.filter((num) => numbers_prime(num));

// console.log(cavab);

//?3. Arrayda uzunlugu 7 olan sozleri ekrana cixardin:
// let data = [
//   "Salam",
//   "Dünyalı",
//   "JavaScript",
//   "Programlaşdırma",
//   "Kod",
//   "Frontend",
//   "Backend",
//  ];

// const data_filter = data.filter((x) => x.length === 7);
// console.log(data_filter);

//?4. İstifadeciden kilosunu ve boyunu isteyin. Daha sonra onun Bədən kütlə indeksini tapın.(kilo / boy ** 2). Tapilan bmi deyerine gore usere asagidaki sekilde mesaj verin:
// 18-dən aşağı nəticələr: İdeal çəkidən aşağı
// 18 ilə 25 arasında nəticələr: İdeal çəki
// 25 ilə 30 arasında nəticələr: İdeal çəkidən yuxarı
// 30 ilə 40 arasında nəticələr: Artıq çəki (obez)
// 40-dən yuxarı nəticələr: Artıq çəki (morbid dərəcədə piylənmə)

// kq=+prompt("Kilonuzu daxil edin: ");
// boy=+prompt("Boyunuzu daxil edin: ");
// kutle_index=kq/(boy**2);

// if(kutle_index<18){
//     console.log("İdeal çəkidən aşağı")
// }
// else if(kutle_index>=18 && kutle_index<=25){
//     console.log("İdeal çəki")
// }
// else if(kutle_index>25 && kutle_index<=30){
//     console.log("İdeal çəkiden yuxari")
// }
// else if(kutle_index>30 && kutle_index<=40){
//     console.log("Artıq çəki (obez)")
// }
// else{
//     console.log("Artıq çəki (morbid dərəcədə piylənmə)")
// }

//?5. Userin daxil etdiyi qiymetin (Ela (100-90), Yaxsi(90-75), Orta(75-55), , Pis(55-35), Kafi(35-0)) oldugunu yoxlayin:
// let point = +prompt("Qiymətinizi daxil edin (0 - 100):");
// if(point>=90 && point<=100){
//     console.log("Ela")
// }
// else if(point>=75 && point<90){
//     console.log("Yaxsi")
// }
// else if(point>=55 && point<75){
//     console.log("Orta")
// }
// else if(point>=35 && point<55){
//     console.log("Pis")
// }
// else if(point=0 && point<35){
//     console.log("Kafi")
// }

//?6. Ucbucagin 2 terefini daxil edin. Hipetonuzu hesablayin (Arrow function):
// let a=+prompt("Ucbucagin ilk terefini daxil edin: ");
// let b=+prompt("Ucbucagin ikinci terefini daxil edin: ");
// const hipetonuz = (a, b) => (a**2+ b**2)**0.5;
//  console.log(hipetonuz(a,b));

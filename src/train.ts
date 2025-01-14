/* Project Standards:
- Logging standards
-Naming standards
     function, method, variable => CAMEL  goHome
     class => PASCAL                       MemberService 
     folder, file => KEBAB
     css => SNAKE                           button_style
- Error handling

*/    

/* Request:
 Traditinal Api
 Rest Api
 GrapHQL Api
 ...
 */


/* Frontend Development:
Traditional Frontend Developent (FD) => BSSR (BURAK Admin) => EJS
Modern Frontend Developent (FD)      => SPA  (Users application) => REACT 
*/

/* Cookies:
request jola
self destroy
*/ 

/* VALIDATION:
    1) CLIENT VALIDATION (Frontend) 
    2) DTO VALIDATION (Pipe)
    3) SERVER VALIDATION (Backend)
    4) SCHEMA VALIDATION (DB)
*/
//==========================================================================//


// TASK R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.


function calculate(expression: string): number {
  const parts = expression.split(' ').filter(Boolean);
  const num1 = parseFloat(parts[0]);
  const operator = parts[1];
  const num2 = parseFloat(parts[2]);

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : NaN;
    default:
      throw new Error('Invalid operator');
  }
}

console.log(calculate("1 + 3"));
console.log(calculate("10 - 2"));
console.log(calculate("4 * 5"));
console.log(calculate("20 / 4"));

// Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

// function hasProperty<T extends object>(obj: T, prop: string): boolean {
//   return Object.prototype.hasOwnProperty.call(obj, prop);
// }

// // Примеры использования:
// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  // false


// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray<T extends { [key: string]: any }>(obj: T): [string, T[keyof T]][] {
//   const result: [string, T[keyof T]][] = [];
//   for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//           result.push([key, obj[key]]);
//       }
//   }
//   return result;
// }

// // Misol
// const resultObjectToArray = objectToArray({ a: 10, b: 20 });
// console.log(resultObjectToArray); // [['a', 10], ['b', 20]]

// // Yana bir misol
// const anotherResult = objectToArray({ name: "John", age: 30 });
// console.log(anotherResult); // [['name', 'John'], ['age', 30]]


// ==================================================================================

// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// function calculateSumOfNumbers(array: any[]): number {
//   // Faqat sonlarni yig'indiga qo'shamiz
//   return array.reduce((sum: number, value: any) => {
//     // Agar qiymat son bo'lsa, uni yig'indiga qo'shamiz
//     if (typeof value === "number") {
//       return sum + value;
//     }
//     return sum;
//   }, 0); // Dastlabki yig'indi 0
// }

// // Misol uchun foydalanish
// const resultCalculateSum = calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);
// console.log(resultCalculateSum); // Natija: 45


// N-TASK: 

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function palindromCheck(word: string): boolean {
//   // Stringni kichik harflarga o‘tkazish va teskari versiyasini solishtirish
//   word = word.toLowerCase(); // Katta va kichik harflarni farqsiz qilish
//   return word === word.split('').reverse().join(''); // Teskari stringni solishtirish
// }

// // Misollar
// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("son")); // false


// M-TASK: 

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// function getSquareNumbers(numbers: number[]): { number: number, square: number }[] {
//     return numbers.map(num => ({ number: num, square: num ** 2 }));
// }

// // Misol uchun:
// const result = getSquareNumbers([1, 2, 3]);
// console.log(result);

// L-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding") return "ew ekil gnidoc";
//  function reverseSentence(sentence: string): string {
//     /**
//      * Takes a string and reverses each word in the string without changing the order of the words.
//      *
//      * @param sentence - Input string.
//      * @returns String with each word reversed and order preserved.
//      */
//     const words = sentence.split(" ");
//     let reversedWords: string[] = [];

//     for (let i = 0; i < words.length; i++) {
//         let reversedWord = "";
//         for (let j = words[i].length - 1; j >= 0; j--) {
//             reversedWord += words[i][j];
//         }
//         reversedWords.push(reversedWord);
//     }

//     return reversedWords.join(" ");
// }

// // Example usage
// const result = reverseSentence("we like coding");
// console.log(result);  // Output: "ew ekil gnidoc"


// K-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// function countVowels(str: string): number {
//      // Unli harflar ro'yxati
//      const vowels = "aeiouAEIOU";
//      let count = 0;
 
//      // Stringni harfma-harf tekshiramiz
//      for (const char of str) {
//          if (vowels.includes(char)) {
//              count++;
//          }
//      }
 
//      return count;
//  }
 
//  // Misol uchun:
//  console.log(countVowels("string")); // Natija: 1
//  console.log(countVowels("Hello World")); // Natija: 3
 
//==========================================================================//
//  J-TASK: 
//  Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
//  MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
 

//  function findLongestWordAlt(sentence: string): string {
//     // Stringни бўшлиқ бўйича бўлиб, reduce орқали энг узун сўзни топамиз
//     return sentence.split(" ").reduce((longest, current) =>
//         current.length > longest.length ? current : longest, "");
// }

// // Мисол учун:
// console.log(findLongestWordAlt("I come from Uzbekistan")); // Натижа: "Uzbekistan"
//==========================================================================//

 //  I-TASK:

//  Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
//  MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4
 
//  function majorityElement(arr: number[]): number | null {
//   if (arr.length === 0) return null;

//   const countMap: { [key: number]: number } = {};

//   // Elementlarning chastotalarini hisoblaymiz
//   for (const num of arr) {
//       countMap[num] = (countMap[num] || 0) + 1;
//   }

//   // Eng ko'p uchraydigan elementni topamiz
//   let maxCount = 0;
//   let mostFrequent: number | null = null;

//   for (const key in countMap) {
//       if (countMap[key] > maxCount) {
//           maxCount = countMap[key];
//           mostFrequent = parseInt(key, 10);
//       }
//   }

//   return mostFrequent;
// }

// // Misol uchun:
// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); // Natija: 4
//==========================================================================//



// H2-TASK: 

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"   ts


// function getDigits(input: string): string {
//     return input.replace(/\D/g, ""); // \D bu "digit emas" degani, uni bo'sh joy bilan almashtiramiz
//   }
  
//   // Sinov
//   console.log(getDigits("m14i1t")); // "141"
//   console.log(getDigits("abc123xyz456")); // "123456"
//   console.log(getDigits("no-digits")); // ""
  



// // console.log("Hello World!");

// function getPositive(arr: number[]): string {
//     // Faqat musbat sonlarni tanlab, string holatida qaytaramiz
//     const positiveNumbers = arr.filter(num => num > 0);
//     return positiveNumbers.join('');
// }

// // Misol:
// console.log(getPositive([1, -4, 2])); // Natija: "12"
//==========================================================================//

/*
  request join
  self destroy
*/

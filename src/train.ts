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
// ZS-TASK:

// Shunday function yozing, u parametridagi arrayni ichidagi 1 marta kelgan elemnetni qaytarsin.
// MASALAN: singleNumber([4, 2, 1, 2, 1]) return 4

function singleNumber(nums: number[]): number {
  let result = 0;
  for (let num of nums) {
      result ^= num; // XOR har bir element bilan
  }
  return result;
}

console.log(singleNumber([4, 2, 1, 2, 1])); // Output: 4

// ===============================================================================
// ZR-TASK:

// Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
// MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}

// function countNumberAndLetters(str: string): { number: number, letter: number } {
//   let numberCount = 0;
//   let letterCount = 0;
  
//   for (const char of str) {
//       if (/[0-9]/.test(char)) {
//           numberCount++;
//       } else if (/[a-zA-Z]/.test(char)) {
//           letterCount++;
//       }
//   }
  
//   return { number: numberCount, letter: letterCount };
// }

// // Test
// console.log(countNumberAndLetters("string152%\¥")); // { number: 3, letter: 6 }

// ============================================================================
// ZQ-TASK:

// Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]

// function findDuplicates(arr: number[]): number[] {
//   const count: Record<number, number> = {};
  
//   for (const num of arr) {
//       count[num] = (count[num] || 0) + 1;
//   }
  
//   return Object.keys(count)
//       .map(Number)
//       .filter(num => count[num] === 2);
// }

// // Test
// console.log(findDuplicates([1,2,3,4,5,4,3,4]));  // [3, 4]
// ==============================================================================
// ZP-TASK
// Shunday function yozing, u 2 ta array parametr qabul qilsin.
// Siz bu ikki arrayning qiymatlari o'xshash bo'lishini 
// (ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.

// MASALAN:
// areArraysEqual([1, 2, 3], [3, 1, 2]) // true
// areArraysEqual([1, 2, 3], [3, 1, 2, 1]) // true
// areArraysEqual([1, 2, 3], [4, 1, 2]) // false

// function areArraysEqual(arr1: number[], arr2: number[]): boolean {
//   const countElements = (arr: number[]) => {
//       return arr.reduce((acc, num) => {
//           acc[num] = (acc[num] || 0) + 1;
//           return acc;
//       }, {} as Record<number, number>);
//   };

//   const count1 = countElements(arr1);
//   const count2 = countElements(arr2);

//   return JSON.stringify(count1) === JSON.stringify(count2);
// }

// console.log(areArraysEqual([1, 2, 3], [3, 1, 2])); // true
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1])); // true
// console.log(areArraysEqual([1, 2, 3], [4, 1, 2])); // false

// ============================================================================
// ZO-TASK:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

// function areParenthesesBalanced(input: string): boolean {
//   let count = 0;
//   for (const char of input) {
//       if (char === '(') count++;
//       else if (char === ')') {
//           if (count === 0) return false;
//           count--;
//       }
//   }
//   return count === 0;
// }

// console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda")); // true
// console.log(areParenthesesBalanced("(())")); // true
// console.log(areParenthesesBalanced("(()")); // false
// console.log(areParenthesesBalanced("())(")); // false

// =================================================================================
// ZN-TASK:

// Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]

// function rotateArray(arr: number[], index: number): number[] {
//   if (!arr.length || index <= 0) {
//       return arr;
//   }
  
//   index = index % arr.length;  // Agar index array uzunligidan katta bolsa
//   return [...arr.slice(-index), ...arr.slice(0, -index)];
// }

// // Test qilish
// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));  // [5, 6, 1, 2, 3, 4]

// =============================================================================
// TASK ZM:

// Shunday function yozing, va bu function parametr
// sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
// raqamlarni orqasiga o'girib qaytarsin

// MASALAN: reverseInteger(123456789); return 987654321;

// Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
// o'girib (reverse) qilib qaytarmoqda.

// function reverseInteger(num: number): number {
//     return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
// }

// // Test
// console.log(reverseInteger(123456789)); // 987654321
// console.log(reverseInteger(-123));      // -321
// console.log(reverseInteger(100));       // 1


// =============================================================================
// ZL-TASK:

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

// function stringToKebab(str: string): string {
//     return str
//         .toLowerCase() // Hammasini kichik harfga o'tkazish
//         .replace(/\s+/g, '-') // Bo'sh joylarni "-" bilan almashtirish
//         .replace(/[^a-z0-9\-]/g, ''); // Maxsus belgilarni olib tashlash
// }

// console.log(stringToKebab("I love Kebab")); // "i-love-kebab"
// console.log(stringToKebab("Hello World! 123")); // "hello-world-123"
// console.log(stringToKebab("TypeScript & JavaScript")); // "typescript-javascript"

// =============================================================================
// ZK-TASK:

// Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
// MASALAN: printNumbers()

// function printNumbers() {
//     let num = 1;
//     const interval = setInterval(() => {
//         console.log(num);
//         num++;
//         if (num > 5) {
//             clearInterval(interval);
//         }
//     }, 1000);
// }

// printNumbers();


// ============================================================================
// Shunday function yozing, u berilgan array ichidagi
// raqamlarni qiymatini hisoblab qaytarsin.

// MASALAN: reduceNestedArray([1, [1, 2, [4]]]); return 8;

// Yuqoridagi misolda, array nested bo'lgan holdatda ham,
// bizning function ularning yig'indisini hisoblab qaytarmoqda.

// function reduceNestedArray(arr: unknown): number {
//   if (!Array.isArray(arr)) {
//       throw new Error("Input must be an array");
//   }

//   let sum = 0;
//   let stack: unknown[] = [...arr]; // Stack yaratamiz

//   while (stack.length > 0) {
//       const item = stack.pop();

//       if (typeof item === "number") {
//           sum += item; // Agar raqam bo‘lsa, yig‘indiga qo‘shamiz
//       } else if (Array.isArray(item)) {
//           stack.push(...item); // Agar array bo‘lsa, ichidagi elementlarni stackga qo‘shamiz
//       }
//   }

//   return sum;
// }

// // Sinovlar
// console.log(reduceNestedArray([1, [1, 2, [4]]])); // 8
// console.log(reduceNestedArray([[1, 2], [3, [4, 5]]])); // 15
// console.log(reduceNestedArray([10, [20, [30, 40]], 50])); // 150
// console.log(reduceNestedArray([1, [2, [3, [4, [5]]]]])); // 15

// ==============================================================================
// ZI-TASK:

// Shunday function yozing, u function ishga tushgandan 3 soniyadan keyin "Hello World" ni qaytarsin.
// MASALAN: delayHelloWorld("Hello World") return "Hello World"

// function delayHelloWorld(message: string): Promise<string> {
//   return new Promise((resolve) => {
//       setTimeout(() => {
//           resolve(message);
//       }, 3000);
//   });
// }

// // Ishlatish
// delayHelloWorld("Hello World").then(console.log);


// =============================================================================
// ZH-TASK:

// Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin. 
// MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]

// function findDisappearedNumbers(arr: number[]): number[] {
//   const maxNum = Math.max(...arr); // Eng katta sonni topamiz
//   const missingNumbers: number[] = [];

//   for (let i = 1; i < maxNum; i++) {
//     if (!arr.includes(i)) {
//       missingNumbers.push(i);
//     }
//   }

//   return missingNumbers;
// }

// // Test
// console.log(findDisappearedNumbers([1, 3, 4, 7])); // [2, 5, 6]
// console.log(findDisappearedNumbers([2, 5, 8])); // [1, 3, 4, 6, 7]
// console.log(findDisappearedNumbers([1, 2, 3, 4])); // []

// ==================================================================================
// ZG-TASK:

// Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin. 
// MASALAN: capitalizeWords('name should be a string') return 'name_should_be_a_string'

// function toSnakeCase(sentence: string): string {
//   return sentence.toLowerCase().split(" ").join("_");
// }

// // Test
// console.log(toSnakeCase("name should be a string")); // 'name_should_be_a_string'
// console.log(toSnakeCase("Hello World")); // 'hello_world'
// console.log(toSnakeCase("This is a Test")); // 'this_is_a_test'

// ======================================================================================
// ZF-TASK:

// Shunday function yozing, uni string parametri bolsin. String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
// MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'

// function capitalizeWords(sentence: string): string {
//   return sentence
//     .split(" ")
//     .map(word => (word.length > 2 ? word.charAt(0).toUpperCase() + word.slice(1) : word))
//     .join(" ");
// }

// // Test
// console.log(capitalizeWords("name should be a string")); // 'Name Should be a String'
// console.log(capitalizeWords("i am happy")); // 'i Am Happy'
// console.log(capitalizeWords("a big apple")); // 'a Big Apple'



// ==============================================================================
// ZE-TASK:

// Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
// MASALAN: removeDuplicate('stringg') return 'string'
// const removeDuplicate = (input: string): string => {
//   let result = '';
//   for (let char of input) {
//     if (!result.includes(char)) {
//       result += char;
//     }
//   }
//   return result;
// };

// console.log(removeDuplicate('stringg')); // "string"

// =============================================================================
// ZD-TASK:

// Shunday function yozing, uni number, array va number parametrlari bolsin va berilgan 1-parametr numberga teng indexni array ichidan topib 3-parametrdagi raqam bilan almashtirib yangilangan arrayni qaytarsin
// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]

// function changeNumberInArray(
//   number: number,
//   array: number[],
//   newValue: number
// ): number[] {
//   const index = array.indexOf(number);
//   if (index !== -1) {
//     array[index] = newValue;
//   }
//   return array;
// }

// // Sinov
// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2)); // [2, 3, 7, 2]

// ==============================================================================
// ZC-TASK:

// Shunday function yozing, uni number parametri bolsin va function qabul parametrni selsiy miqdori sifatida qabul qilib uni farenhitga ozgartirib bersin
// MASALAN: celsiusToFahrenheit(0) return 32

// function celsiusToFahrenheit(number: number): number {
//   return (number * 9/5) + 32;
// }

// // Sinov uchun
// console.log(celsiusToFahrenheit(0));   // 32
// console.log(celsiusToFahrenheit(100)); // 212
// console.log(celsiusToFahrenheit(-40)); // -40

// ==============================================================================
// ZA-TASK:

// Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin.
// MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

// function sortByAge(arr: { age: number }[]): { age: number }[] {
//   return arr.sort((a, b) => a.age - b.age);
// }

// // Test qilish
// console.log(sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]));
// // Natija: [{ age: 13 }, { age: 21 }, { age: 23 }]

// console.log(sortByAge([{ age: 40 }, { age: 18 }, { age: 25 }, { age: 30 }]));
// // Natija: [{ age: 18 }, { age: 25 }, { age: 30 }, { age: 40 }]

// =============================================================================
// TASK Z

// Shunday function yozing. Bu function sonlardan iborat array
// qabul qilsin. Function'ning vazifasi array tarkibidagi juft
// sonlarni topib ularni yig'disini qaytarsin.

// MASALAN:
// sumEvens([1, 2, 3]); return 2;
// sumEvens([1, 2, 3, 2]); return 4;

// Yuqoridagi misolda, bizning funktsiya
// berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
// sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.

// function sumEvens(arr: number[]): number {
//   return arr
//     .filter((num: number) => num % 2 === 0) // Juft sonlarni tanlaymiz
//     .reduce((sum: number, num: number) => sum + num, 0); // Ularning yig‘indisini topamiz
// }

// // Test qilish
// console.log(sumEvens([1, 2, 3])); // 2
// console.log(sumEvens([1, 2, 3, 2])); // 4
// console.log(sumEvens([5, 7, 9])); // 0 (juft son yo‘q)
// console.log(sumEvens([10, 20, 30])); // 60

// ==================================================================================
// Y-TASK:

//  Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
//  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// function findIntersection<T>(array1: T[], array2: T[]): T[] {
//   return array1.filter(value => array2.includes(value));
// }

// // Example usage:
// const result = findIntersection([1, 2, 3], [3, 2, 0]);
// console.log(result); // Output: [2, 3]

// ==========================================================================
// X-TASK:

//  Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
//  MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// function countOccurrences(obj: { [key: string]: any }, key: string): number {
//   let count = 0; // Буюм ичидаги қайтарилган сўзларни санаш учун.

//   // Рекурсив қидирув функцияси
//   function recursiveSearch(currentObj: { [key: string]: any }): void {
//       for (const prop in currentObj) {
//           if (prop === key) {
//               count++; // Агар калит топилса, саноқни ошир.
//           }
//           if (typeof currentObj[prop] === 'object' && currentObj[prop] !== null) {
//               recursiveSearch(currentObj[prop]); // Агар қиймат объект бўлса, яна қидирувга кир.
//           }
//       }
//   }

//   recursiveSearch(obj); // Бошланғич объектдан қидирувни бошлаш.
//   return count; // Умумий саноқни қайтариш.
// }

// // Мисол учун:
// const obj = {
//   model: 'Bugatti',
//   steer: {
//       model: 'HANKOOK',
//       size: 30
//   }
// };

// console.log(countOccurrences(obj, 'model')); // Натижа: 2

// ====================================================================================
// W-TASK:

// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

// function chunkArray<T>(array: T[], chunkSize: number): T[][] {
//   const result: T[][] = [];

//   for (let i = 0; i < array.length; i += chunkSize) {
//     result.push(array.slice(i, i + chunkSize));
//   }

//   return result;
// }

// // Test qilish
// const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// console.log(result); // Natija: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

// ================================================================================
// TASK V

// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.

// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// Yuqoridagi misolda, 'hello' so'zi tarkibida
// qatnashgan harflar necha marotaba takrorlangini bilan
// object sifatida qaytarilmoqda.

// function countChars(input: string): Record<string, number> {
//     const charCount: Record<string, number> = {};

//     for (const char of input) {
//       if (char in charCount) {
//         charCount[char]++;
//       } else {
//         charCount[char] = 1;
//       }
//     }

//     return charCount;
//   }

//   // Test qilish
//   const result = countChars("hello");
//   console.log(result); // Natija: { h: 1, e: 1, l: 2, o: 1 }

// =============================================================================================================
// U-TASK:

// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// function sumOdds(number: number): number {
//     let count = 0;
//     for (let i = 1; i <= number; i += 2) { // 1-dan boshlanadi va faqat toq sonlarni qamrab oladi
//         count++;
//     }
//     return count;
// }

// // Masalan:
// console.log(sumOdds(9));  // Natija: 4
// console.log(sumOdds(11)); // Natija: 5

// ========================================================================//
// TASK T

// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//     // Agar birinchi massiv bo'sh bo'lsa, ikkinchi massivni qaytaramiz
//     if (arr1.length === 0) return arr2;
//     // Agar ikkinchi massiv bo'sh bo'lsa, birinchi massivni qaytaramiz
//     if (arr2.length === 0) return arr1;

//     // Solishtiramiz va eng kichik elementni qaytarib, rekursiyani davom ettiramiz
//     if (arr1[0] < arr2[0]) {
//         return [arr1[0], ...mergeSortedArrays(arr1.slice(1), arr2)];
//     } else {
//         return [arr2[0], ...mergeSortedArrays(arr1, arr2.slice(1))];
//     }
// }

// // Misol
// const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// console.log(result); // [0, 3, 4, 4, 6, 30, 31]

// ===============================================================================================
// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// function missingNumber(nums: number[]): number {
//   // Вычисляем длину массива
//   const n = nums.length;

//   // Вычисляем ожидаемую сумму чисел от 0 до n
//   const totalSum = (n * (n + 1)) / 2;

//   // Суммируем все элементы массива
//   const arraySum = nums.reduce((sum, num) => sum + num, 0);

//   // Пропущенное число — разница между полной суммой и суммой элементов массива
//   return totalSum - arraySum;
// }

// // Пример использования
// const result = missingNumber([3, 0, 1]); // Ожидается 2
// console.log(result); // Вывод: 2

// TASK R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.

// function calculate(expression: string): number {
//   const parts = expression.split(' ').filter(Boolean);
//   const num1 = parseFloat(parts[0]);
//   const operator = parts[1];
//   const num2 = parseFloat(parts[2]);

//   switch (operator) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case '*':
//       return num1 * num2;
//     case '/':
//       return num2 !== 0 ? num1 / num2 : NaN;
//     default:
//       throw new Error('Invalid operator');
//   }
// }

// console.log(calculate("1 + 3"));
// console.log(calculate("10 - 2"));
// console.log(calculate("4 * 5"));
// console.log(calculate("20 / 4"));

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

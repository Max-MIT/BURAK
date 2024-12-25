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

/* Validations:
Frontend validation
Backend validation
Database validation
*/
//==========================================================================//

// L-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding") return "ew ekil gnidoc";
 function reverseSentence(sentence: string): string {
    /**
     * Takes a string and reverses each word in the string without changing the order of the words.
     *
     * @param sentence - Input string.
     * @returns String with each word reversed and order preserved.
     */
    const words = sentence.split(" ");
    let reversedWords: string[] = [];

    for (let i = 0; i < words.length; i++) {
        let reversedWord = "";
        for (let j = words[i].length - 1; j >= 0; j--) {
            reversedWord += words[i][j];
        }
        reversedWords.push(reversedWord);
    }

    return reversedWords.join(" ");
}

// Example usage
const result = reverseSentence("we like coding");
console.log(result);  // Output: "ew ekil gnidoc"


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

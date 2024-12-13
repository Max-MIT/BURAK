/* Project Standards:
- Logging standards
-Naming standards
     function, method, variable => CAMEL  goHome
     class => PASCAL                       MemberService 
     folder => KEBAB
     css => SNAKE                           button_style

- Error handling

*/    


// H2-TASK: 

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"   ts


function getDigits(input: string): string {
    return input.replace(/\D/g, ""); // \D bu "digit emas" degani, uni bo'sh joy bilan almashtiramiz
  }
  
  // Sinov
  console.log(getDigits("m14i1t")); // "141"
  console.log(getDigits("abc123xyz456")); // "123456"
  console.log(getDigits("no-digits")); // ""
  



// // console.log("Hello World!");

// function getPositive(arr: number[]): string {
//     // Faqat musbat sonlarni tanlab, string holatida qaytaramiz
//     const positiveNumbers = arr.filter(num => num > 0);
//     return positiveNumbers.join('');
// }

// // Misol:
// console.log(getPositive([1, -4, 2])); // Natija: "12"


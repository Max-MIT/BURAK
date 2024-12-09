// console.log("Hello World!");

function getPositive(arr: number[]): string {
    // Faqat musbat sonlarni tanlab, string holatida qaytaramiz
    const positiveNumbers = arr.filter(num => num > 0);
    return positiveNumbers.join('');
}

// Misol:
console.log(getPositive([1, -4, 2])); // Natija: "12"


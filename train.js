// Терминал орқали массивни оламиз
const args = process.argv.slice(2).map(Number); // Аргументларни сонга айлантирамиз

function getHighestIndex(arr) {
    if (arr.length === 0) {
        console.log("Массив бўш"); // Агар массив бўш бўлса
        return null;
    }
    let maxValue = Math.max(...arr); // Энг катта қийматни топамиз
    let index = arr.indexOf(maxValue); // Биринчи учрайдиган индексни топамиз
    console.log(`Энг катта қиймат (${maxValue}) биринчи учраган индекс: ${index}`);
    return index;
}

// Функцияни массив билан чақириш
getHighestIndex(args);

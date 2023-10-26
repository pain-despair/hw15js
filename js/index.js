function findAverage(array) {
    let sum = 0
    let count = 0
    
    for (let i = 0; i < array.length ; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i]
            count++
        }
    }
    
    if (count > 0) {
        return sum / count
    } else {
        return null
    }
}

const first =  [16, 37, 'red', 4, 72, 'peach', 47, 25, 'apple', 46, 4, 'pink', 4, 12, 'carrot']
const avg = findAverage(first)
console.log(avg);



function doMath(x, znak, y) {
    if (znak === '+') {
        return x + y;
    } else if (znak === '-') {
        return x - y;
    } else if (znak === '*') {
        return x * y;
    } else if (znak === '/') {
        if (y === 0) {
            return "Деление на 0 невозможно";
        }
        return x / y;
    } else if (znak === '%') {
        return x % y;
    } else if (znak === '^') {
        return Math.pow(x, y);
    } else {
        return "Ошибка";
    }
}

const x = parseFloat(prompt("Введите число x:"));
const znak = prompt("Введите оператор (+, -, *, /, %, ^):");
const y = parseFloat(prompt("Введите число y:"));

const result = doMath(x, znak, y);
console.log("Результат: " + result);


function x2Array() {
    let rows = parseInt(prompt("Введите количество строк:"));
    let cols = parseInt(prompt("Введите количество столбцов:"));

    let arr = new x2Array(rows);
    for (let i = 0; i < rows; i++) {
        arr[i] = new x2Array(cols);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            arr[i][j] = prompt("Введите значение для элемента [" + i + "][" + j + "]:");
        }
    }

    return arr;
}
const userArray = x2Array();
console.log(userArray);

function removeChars(inputStr, charsToRemove) {
    let inputArray = inputStr.split('');

    let filteredArray = inputArray.filter(char => !charsToRemove.includes(char));

    let resultStr = filteredArray.join('');

    return resultStr;
}

let inputStr = prompt("Введите входную строку:");
let charsToRemove = prompt("Введите символы для удаления (без пробела):").split('');

let res = removeChars(inputStr, charsToRemove);
console.log(res);
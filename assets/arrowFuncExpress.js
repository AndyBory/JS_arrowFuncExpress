// 1. Создайте функцию, которая принимает неограниченное количество входящих данных, и возвращает количество строк, переданных ей в этом массиве. Решить с использованием стрелочных функций.

const numberOfStrings = (...incomingData) => incomingData.filter((elem) => typeof elem === 'string').length;

numberOfStrings(5, 2, 455, 284, 1541, 'good', 'nice', 1526, 658, 98798);

// 2. Создайте функцию продвинутого калькулятора. Он принимает знак, а  затем неограниченное количество чисел, над которыми проведет указанную операцию.

function calc (sign, ...numbers) {
  switch (sign) {
    case "+": {
      return numbers.reduce((res, currentNumber) => res + currentNumber);
    }
    case "-": {
      return numbers.reduce((res, currentNumber) => res - currentNumber);
    }
    case "*": {
      return numbers.reduce((res, currentNumber) => res * currentNumber);
    }
    case "/": {
      return numbers.reduce((res, currentNumber) => res / currentNumber);
    }
    case "^": {
      return numbers.reduce((res, currentNumber) => res ** currentNumber);
    }
    default:
      return null;
  }
  };

calc('+', 2, 5, 1, 4, 3, 7, 9);

// 3. Имея массив чисел, найдите в нем самое большое. Не используйте циклы или методы перебора массива.

const arr = [5, 8, 4, 75, 62, 108, 9];
const getMaxNumber = (...numbers) => Math.max(...numbers); 
console.log(getMaxNumber(...arr));
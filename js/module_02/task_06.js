console.log('Module_02 Task_06');

console.log('-----');

'use strict';

// const arrFast = []; // быстрее
// const arrSlow = new Array(3); // медленнее

// console.log(arrFast);
// console.log(arrSlow);

function mapArray(array) {
  const numbers = new Array(array.length);
    const newArr = [];
  for(let i = 0; i < array.length; i += 1) {
      //   console.log(array[i]);
      newArr.push(array[i]*10);
  }
  return newArr;
}

console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]


// Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел.
// Функция создает новый массив numbers размером в длину массива array
// и заполняет его числами из массива array умноженными на 10.
// Для перебора массива и добавления новых значений используй цикл for.
// По завершению перебора массива array возвращается массив numbers.
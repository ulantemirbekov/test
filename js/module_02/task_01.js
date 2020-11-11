console.log('Module_02 Task_01');

console.log('-----');


'use strict';

const getItemsString = function(array) {
    
  let result = '';
  let length = array.length;
  
   for (let i = 0; i < length; i += 1) {
     result += `${i + 1} - ${array[i]} \n`;   
   }
  return result;
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

console.log('-----');

// example

const logItems= function(array) {
    let index = 1;
    for (const item of array) {
        console.log(`${index} - ${item}`);
        index += 1;
    }
}
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// const pets = ['Mango', 'Poly', 'Ajax'];
// console.log(pets)

// console.log('1 -', pets[0]);
// console.log('2 -', pets[1]);
// console.log('3 -', pets[2]);



// for (let i = 0; i < pets.length; i += 1) {
//   console.log('pets: ', pets[i]);
// }

// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }

// console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']
console.log('Hello');
console.log('-----');

const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers[2]);
console.log(numbers[4]);
console.log('-----');

console.log(numbers[numbers.length-1]);
console.log('-----');

const length = numbers.length;
for (let i = 0; i < length; i += 1){
    console.log(numbers[i]);
}
console.log('-----');

for (const number of numbers) {
    console.log(number);
}
console.log('-----');

const products = ['bread', 'milk', 'eggs', 'tea'];
function findProduct(array, item) {
    for (const item of array) {
        if (item === array[item]) {
            return true;
        }
    }
    return false;
}

console.log(findProduct(products, 'mik'));
console.log('-----');


const arr = ['bob', 'doc', 'rom', 'cat']
const findElement = (arr, elementToFind) => {
    let length = arr.length
    for (let i = 0; i < length; i += 1){
        // console.log(arr[i]);
        if (elementToFind === arr[i]) {
            return true;
        } 
    }
    return false;
}
console.log(findElement(arr, 'rom'));
console.log('-----');


let carArray = ['audi', 'bmw', 'audi', 'mazda', 'audi'];
const letFindCar = (anyArray, anyElemToFind) => {
    let sumCars = [];
    let message = "";

    for (const elem of anyArray) {

        if (elem === anyElemToFind) {
            sumCars.push(elem);
        }
    }

    if (sumCars.length) {
        return message = `Мы нашли ${anyElemToFind} ${sumCars.length} раза!!!`
    } else {
        return message = 'Не нашли';
    }
}
console.log(letFindCar(carArray, 'audi'));
console.log('-----');

const num = [1, 2, 3, 4, 9, -5];
console.log(Math.min(...num));



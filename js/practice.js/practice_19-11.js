// const string = 'Lorem spam find you';

// function findVowelLetter(string) {

//     const LITERAL = 'aeiou';
//     let total = 0;

//     const words = string.split(' ');

//     for (const word of words) {
//         let letters = word.split('');

//         for (const letter of letters) {
//             let symbol = LITERAL.includes(letter);

//             if (symbol) {
//                 total += 1;
//             }
//         }
//     }
//     return total;
// }

// console.log(findVowelLetter(string));

//============================================

// for (let i = 10; i >= 0; i -= 1) {
//     console.log(i);
// }

//============================================

// const string = 'abcdefg';

// console.log(string);

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString(string));


// function reverseString(str) {
//     let newStr = '';
//     for (let letter of str) {
//         newStr = letter + newStr;
//     }
//     return newStr;
// }

// console.log(reverseString(string));

// const reverseString = function (str) {
//     let newStr = '';
//     for (let i in str) {
//         newStr = str[i] + newStr;
//         // console.log(i);
//     }
//     return newStr;
// }
// console.log(reverseString('abcdefj'));

// ==================================================
// const array = [1, 2, 3, 4, 5];

// // const max = Math.max(arr);
// // console.log(max);

// function maxNum(arr) {
//     // return Math.max.apply(Math, arr)
//     return Math.max.bind(Math, ...arr)();
// }

// console.log(maxNum(array))


//================================================

const user = {
    name: 'vova',
    age: 30,
    showData: function () {
        console.log(this.name, this.age);
    },
    showName() { },
}

// user.showData();

const cars = [
    { name: 'bmw', age: 2 },
    { name: 'audi', age: 4 },
    { name: 'mini', age: 6 }
];

// console.log(cars[0]);

for (const car of cars) {
    // console.log(car.name, car.age);
    // user.showData.call(car)
    user.showData.bind(car)()
}




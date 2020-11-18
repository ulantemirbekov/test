console.log('Hello');

// 1. Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.

// function func(a) {
//     // console.log(a);
//     return function (b) {
//         // console.log(b);
//         return function (c) {
//             // console.log(c);
//             return a + b + c;
//         }
//     }
// }

// const result = func(2)(3)(4);
// console.log(result);


// 2. Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), 
//    вернет массив переданных в параметры чисел.

// function func(a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return function () {
//                     return [ a, b, c, d ];                    
//                 }                
//             }
//         }
//     }
// }

// const result = func(2)(3)(4)(5)();
// console.log(result);

// 3. Реализуйте счетчик вызова функции, работающий на замыканиях. 

// const addOne = function () {
//     let num = 0;
//     return function () {
//         return (num += 1);
//     }
// }

// const counter = addOne();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());


// 4. Пусть функция в замыкании хранит число 10. 
//    Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число.

// 5. Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, 
//    а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.

// function createCounter(num = 10) {
//     return function (step = -1) {
//         // return num === 0 ? 'Отсчет окончен' : num += step;
//         // return !num ? 'Отсчет окончен' : num += step;
//         return num ? num += step : 'Отсчет окончен';
//     }    
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());


// 6. Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. 
//    Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.

// const obj = {
//     pow(array, x) {
//         let sum = 0;
//         for (const arr of array) {
//             sum += Math.pow(arr, x);
//         }
//         return console.log(sum);;
//     },

//     sum: function (array) {
//         // let sum = 0;
//         // for (const arr of array) {
//         //     sum += Math.pow(arr, 1);
//         // }
//         // return sum;
//         this.pow(array, 1);
//     },
//     quadrate(array) {
//         // let sum = 0;
//         // for (const arr of array) {
//         //     sum += Math.pow(arr, 2);
//         // }
//         // return sum;
//         this.pow(array, 2);
//     },
//     cube(array) {
//         // let sum = 0;
//         // for (const arr of array) {
//         //     sum += Math.pow(arr, 3);
//         // }
//         // return sum;
//         this.pow(array, 3);
//     },
// }

// obj.sum([1, 2, 3, 4]);
// obj.quadrate([1, 2, 3, 4]);
// obj.cube([1, 2, 3, 4]);


// *** 7. Создайте функцию высшего порядка cartCounter(), 
//        в которой будет реализован функционал увеличения 
//        или уменьшения количества выбраного товара в корзине в зависимости от передаваемого id товара.
//        Используйте механизм замыкания для решения задачи.

// const cart = {
//     products: [
//         {
//             id: 1,
//             name: "Milk",
//             price: 20,
//             quantity: 1
//         },
//         {
//             id: 2,
//             name: "Juice",
//             price: 30,
//             quantity: 2
//         },
//         {
//             id: 3,
//             name: "Fresh juice",
//             price: 40,
//             quantity: 3
//         }
//     ]
// }

// function cartCounter(quantity) {

//     return function (step = 1) {
//         return quantity += step;
//     }
// };

// function findProductById(array, id) {
//     for (const product of array) {
//         if (product.id === id) return product;
//     }
// };

// // console.log(findProductById(3));

// function getValue(array, id) {
//     const product = findProductById(array, id)
//     const counter1 = cartCounter(product.quantity);
//     console.log(counter1(1));
//     console.log(counter1(2));
//     console.log(counter1(3));
// };

// getValue(cart.products, 2)

// const counter1 = cartCounter(cart.products[1].quantity);
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());


// 8. В примере выше создайте методы, которые будут логировать данные всех продуктов массива.
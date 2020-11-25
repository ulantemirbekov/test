// =======================================
// Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.

// const array = [
//     {
//         name: 'number 1',
//         value: 4
//     },
//     {
//         name: 'number 2',
//         value: 9
//     },
//     {
//         name: 'number 3',
//         value: 16
//     },
//     {
//         name: 'number 4',
//         value: 25
//     }
// ];

// const result = array.map(arr => Math.sqrt(arr.value));
// const result = array.map(({ value }) => Math.sqrt(value));
// console.log(result);


// =======================================
// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

// const str = array.map(arr => {
//     return { ...arr, name: arr.name + '!' };
// });
// console.log(str);


// =======================================
// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.

// const array = ['audi', 'bmw', 'honda', 'toyota'];

// const result = array.map(arr => {
//     return [...arr].reverse().join('');
// });
// console.log(result);


// =======================================
// Дан следующий массив:
// Используя метод map преобразуйте этот массив в следующий:
// let arr = [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
// ];

// let arr = ['123', '456', '789'];

// const result = arr.map((item) => {
//     return [...item].map((item) => Number(item));
// });
// console.log(result);


// =======================================
// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, 
// умноженное на его порядковый номер в массиве.

// const numberArray = ['123', '456', '789', '15', '45'];

// const result = numberArray.map((item, index) => Number(item) * (index + 1));
// console.log(result);


// =======================================
// Дан массив с числами. Оставьте в нем только положительные числа.


// const numbers = [1, 15, 7, -3, 19, -5, -2, 8];

// const result = numbers.filter((num) => num >= 0);
// console.log(result);


// =======================================
// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.

// const result = numbers.filter(num => num > 0 && num < 10);
// console.log(result);


// =======================================
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

// const array = ['loremdss', 'ipsumfg', 'dolor', 'sit', 'amet'];  //================================== check

// const result = array.filter(arr => arr.length > 5);
// console.log(result);


// const arrStrings = [
//     'Lorema',
//     'Linda',
//     'Toni',
//     'Number',
// ]

// const string = arrStrings.filter(str => str.length > 5)
// console.log(string);


// ==========================================
// Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.

// const numbers = [4, 6, 2, 9, 30, 10];

// const result = numbers.filter((num, index) => num * (index + 1) < 30);
// console.log(result);


// ==========================================
// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. 
// Оставьте в нем только обычные элементы.

// const array = [1, 2, [3, 4], 5, [6, 7]];

// const result = array.filter(arr => arr.constructor.name === 'Number');
// console.log(result);


// ==========================================
// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// =========================================
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// =========================================
// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
// =========================================
// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
// =========================================
// Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.
// =========================================
// const headerNavigation = [
//   {
//     name: "Home",
//     path: "/home",
//   },
//   {
//     name: "About",
//     path: "/about",
//   },
//   {
//     name: "Contacts",
//     path: "/contacts",
//   },
//   {
//     name: "Sign In",
//     path: "/signin",
//   },
//   {
//     name: "Sign Up",
//     path: "/signup",
//   },
//   {
//     name: "Logout",
//     path: "/logout",
//   },
// ];
// Напишите функцию:
// 1. которая в качестве параметров будет принимать указаннный массив объектов:
// 2. которая возвращает разметку формата
// '<li>
//     <a href="http://">
//     </a>
// </li>' для каждого из элементов массива
// =========================================
// const products = [
//     {
//         id: "1",
//         name: "Bread",
//         description:
//             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, at?",
//     },
//     {
//         id: "2",
//         name: "Milk",
//         description: "Lorem, ipsum dolor sit amet",
//     },
//     {
//         id: "3",
//         name: "Eggs",
//         description: "Lorem, ipsum dolor sit amet consectetur Temporibus, at?",
//     },
// ];
// const cart = [];

// Напишите функцию, которая будет добавлять элемент в массив cart и создавать ему дополнительное свойство quantity равное единице

// const addToCart = (arr, id) => {
//     const elem = arr.find(item => item.id === id);
//     elem.quantity = 1;
//     cart.push(elem)
// }

// addToCart(products, '3')
// addToCart(products, '2')
// console.log(cart);


// Напишите функцию, которая будет удалять элемент из массива cart по id

// const delFromCart = (id) => {
//     return cart.filter(item => item.id !== id);
// }

// console.log(delFromCart('3'));


// Напишите функцию, которая будет добавлять количество товаров (свойство quantity) на единицу

// const addQuantity = (id) => {
//     const product = cart.find(item => item.id === id);
//     product.quantity += 1
//     console.log(product);
// };

// addQuantity('3')
// addQuantity('3')

// const decrQuantity = (id) => {
//     const product = cart.find(item => item.id === id);
//     if (product.quantity < 1) {
//         return;
//     } else product.quantity -= 1;
// }

// decrQuantity('3')
// console.log(cart);


// Напишите функцию, которая будет фильтровать массив products по названию товара

// const filterByName = (arr, name) => {
//     return arr.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))
// };
// console.log(filterByName(products, 'milk'));

// Напишите функцию, которая будет возвращать разметку формата, пригодного для отображения информации о товаре в модальном окне.
// Обязательно добавить кнопки добавления товара и записать в них id товара


// const createMarkup = () => {

// }


// Модифицируйте функцию, которая добавляет элемент в массив cart, при этом использует id  для поиска элемента в массиве products и если он совпадает - добавляет объект с дополнительным свойством quantity
// =========================================
// =========================================
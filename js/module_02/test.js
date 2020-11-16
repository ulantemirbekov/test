// Объекты
// ==============================================================================
const products = [
  {
    id: "1",
    name: "milk",
    value: "Молоко",
    price: 20,
    sale: true,
    quantity: 10,
  },
  {
    id: "2",
    name: "water",
    value: "Вода",
    price: 10,
    sale: false,
    quantity: 50,
  },
  {
    id: "3",
    name: "juice",
    value: "Сок",
    price: 34,
    sale: true,
    quantity: 24,
  },
  {
    id: "4",
    name: "fruitDrink",
    value: "Морс",
    price: 32,
    sale: true,
    quantity: 25,
  },
  {
    id: "5",
    name: "milkShake",
    value: "Молочный коктейль",
    price: 37,
    sale: false,
    quantity: 37,
  },
];
// 1.Создайте функцию getSaleProducts(), которая вернет новый массив со свойством sale равным true.

// function getSaleProducts(array, prop) {
//   const arr = [];
//   for (const item of array) {
//     if (item[prop]) {
//       arr.push(item);
//     }
//   }
//   return arr;
// }

// console.log(getSaleProducts(products,'sale'));

// function getSaleProducts(array, prop) {
//   const arr = [];
//   for (const item of array) {
//     if (item[prop] > 30 && item[prop] < 35) {
//       arr.push(item);
//     }
//   }
//   return arr;
// }

// console.log(getSaleProducts(products,'price'));


// 2.Создайте функцию getProductsName(), которая вернет новый массив со всеми названиями продуктов на русском языке.

// function getProductsName(array) {
//   const arr = [];
//   for (const item of array) {
//     arr.push(item.value);
//   }
//   return arr;
// }

// console.log(getProductsName(products));


// 3.Создайте функцию getTotalQuantity(), которая вернет общую сумму всех товаров на складе (свойство quantity).

// function getTotalQuantity(array, prop) {
//   let sum = 0;
//   for (const item of array) {
//     sum += item[prop];
//   }
//   return sum;
// }

// console.log(getTotalQuantity(products,'quantity'));



// 4.Создайте функцию getProductById(), которая будет возвращать продукт по id.

// function getProductById(array, id) {
//   for (const item of array) {
//     if (item.id === id) {
//       return item;
//     }   
//   }
// }

// const result = getProductById(products, '3');
// console.log(result)


// 5.Создайте функцию deleteProductById(), которая будет удялять из исходного массива products товар по id.

// const deleteProductById = (array, prop, val) => {
//   for (const item of array) {
//     if (item[prop] === val) {
//       console.log(item);
//       array.splice(array.indexOf(item),1)
//     }
//   }
//   return array;
// }

// console.log(deleteProductById (products, 'id', '4'));


// 6.Создайте функцию createProduct(), которая будет добавлять новый продукт в исходный массив products. 
//   Товар передается в функцию в виде объекта.

// function createProduct(array, newObj) {
//   array.push(newObj)
// };

// createProduct(products,{
//     id: "6",
//     name: "coffee",
//     value: "Кофе",
//     price: 20,
//     sale: false,
//     quantity: 35,
// });

// console.log(products);

// createProduct(products, {
//   id: "7",
//   name: "bread",
//   value: "Хлеб",
//   price: 15,
//   sale: false,
//   quantity: 33,
// });

// console.log(products);
  

// 7.Создайте функцию findProductByName(), которая будет возвращать объект из массива products 
//   в зависимости от передаваемого значения name или value.

// function findProductByName(array, option) {
//   for (const item of array) {
//     if (item.name === option || item.value === option) {
//       return item;
//     }
//   }
// }

// console.log(findProductByName(products, "Сок"));


// 8.Создайте функцию editProduct(), которая будет изменять объект products. В качестве аргументов, 
//   в функцию будут передаваться id, а также ключ и его значение, которое нужно перезаписать.
// 9.Создайте функцию modifyProductList(), которая будет возвращать новый массив с продуктами 
//   у которых будут только свойства id, name, value и price
// 10.Создайте функцию addToCart(), которая будет записывать товар по id в новый массив cart.


// CRUD

class Shop {
    #shopItems

    constructor(name, address, items) {
        this.#shopItems = items;
        this.name = name;
        this.address = address;
        // this.items = items;
    }
    #generateId = function () {
        const randomNumber = Math.random();
        return randomNumber.toString().slice(3);
    };
    showItems() {
        for (const item of this.#shopItems) {
            const { id, name, price, amount, category } = item;
            console.log(
                `Id: ${id}, Name: ${name}, Price: ${price}, Amount: ${amount} Category: ${category}`
            );
        }
    }
    addItems(name, price, amount, category) {
        const item = {
            id: this.#generateId(),
            name,
            price,
            amount,
            category,
        };
        this.#shopItems.push(item);
    }
    removeItems(productName) {
        for (const item of this.#shopItems) {
            if (item.name === productName) {
                const index = this.#shopItems.indexOf(item);
                this.#shopItems.splice(index, 1)
            }
        }
    }
    updateItems(productName, newName) {
        let itemsLength = this.#shopItems.length;
        for (let i = 0; i < itemsLength; i += 1) {
            if (this.#shopItems[i].name === productName) {
                this.#shopItems[i].name = newName;
            }
        }
    }
    findItem(itemName) {

    }
    sortByCategory(categoryName) { }
    showCart() { }
    updateCart() { }
    removeFromCart() { }
}

const items = [
    { id: 1, name: "bananes", price: 25, amount: 200, category: "fruits" },
    { id: 2, name: "apples", price: 32, amount: 150, category: "fruits" },
    { id: 3, name: "tomato", price: 50, amount: 100, category: "vegetables" },
    { id: 4, name: "potato", price: 10, amount: 500, category: "vegetables" },
]
// instance
const shop = new Shop("Fruits Store", "Kiev", items);
// // console.log(shop.generateId());
// // console.log(shop.generateId());
// console.log(shop.showItems());

// console.log(shop.addItems("mealon", 30, 170, "fruits"));
// console.log(shop.showItems());

// shop.removeItems("tomato")
// console.log(shop.showItems());

// shop.removeItems("bananes")
// console.log(shop.showItems());

shop.updateItems("potato", "cucumber")
console.log(shop.showItems());

// console.log(shop.name);
// console.log(shop.address);
// console.log(shop.items);
// console.log(shop.#shopItems);
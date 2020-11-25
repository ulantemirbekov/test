const people = [
    { id: 1, name: 'Vova', age: 17, budget: 4000, isComplete: true },
    { id: 2, name: 'Mike', age: 25, budget: 3400, isComplete: false },
    { id: 3, name: 'Sara', age: 30, budget: 400, isComplete: true },
    { id: 4, name: 'Bob', age: 15, budget: 200, isComplete: false },
];

// console.log(people);

function findUserName(arr, userName) {
    // console.log(person);
    // console.log(arr);
    console.log(arr.find(person => person.name === userName));
}

findUserName(people, 'Sara')

function findIsComplete(arr) {

}
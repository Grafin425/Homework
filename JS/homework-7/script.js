// task1
//- создать массив с 20 числами.
let arrNumber = [2, 3, 12, 423, 8, 6, 21, 15, 87, 10, 46, 52, 34, 39, 101, 42, 98, 65, 49, 51]
console.log(arrNumber.length);
arrNumber.sort((a, b) => {
    return a - b;
})
console.log(arrNumber);
arrNumber.sort((a, b) => {
    return b - a;
})
console.log(arrNumber);

let arr3 = []
arrNumber.filter(value => {
    if (value === 3) {
        arr3.push(value)
    }
})
console.log(arr3);

let arr10 = []
arrNumber.filter(value => {
    if (value === 10) {
        arr10.push(value)
    }
})
console.log(arr10);

arrNumber.forEach(value => {
    console.log(value)
})

arrPlus3 = []
arrNumber.map((value) => {
    value += 3;
    arrPlus3.push(value)
})
console.log(arrPlus3);

//task2
// создать массив со словами на 15-20 элементов.
let stringArr = ['вася', 'машина', 'квартира', 'вода', 'стіл', 'дошка', 'вікно', 'дерево', 'кіт', 'ручка', 'маска', 'помилка', 'одиниця', 'верх', 'юрта']
stringArr.sort()
console.log(stringArr);
stringArr.sort((a, b) => {
    if (a > b) {
        return -1;
    }
})
console.log(stringArr);

stringArr.filter(value => {
    if (value.length <= 4) {
        console.log(value);
    }
})

let stringArr1 = []
stringArr.map(value => {
    value += '!'
    stringArr1.push(value)
})
console.log(stringArr1);

//task3
//Все робити через функції масивів (foreach, map ...тд)
// Дан масив :

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
    ];
//треба один закоментити !!!!
// users.sort((a, b) => {
//     return a.age-b.age
// })
// console.log(users);
// users.sort((a, b) => {
//     return b.age-a.age
// })
// console.log(users);
//
// users.sort((a, b) => {
//    return a.name.length-b.name.length
// })
// console.log(users);
// users.sort((a, b) => {
//     return b.name.length-a.name.length
// })
// console.log(users);

//пройтись по ньому та додати кожному юзеру поле id
let userId=users.reduce((acc, value) =>{
    value.id=acc.length;
    acc.push(value)
    return acc;
},[] )
//ПО дефолту він відсортований по зростаню )
console.log(userId);
userId.sort((a, b) => {
    return b.id-a.id;
})

//наисать функцию калькулятора с 2мя числами и колбеком

function calculator(a,b,callback){
    return callback(a,b)
}

calculator(1, 10, (a, b) => {
    return a + b;
});

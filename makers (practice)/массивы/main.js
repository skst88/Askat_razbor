// Arrays

// let numArr = [1, 2, 3, 4, 5];
// console.log(numArr);

// length
// console.log(numArr.length)

// доступ к элементам массива 
// console.log(numArr[3]);

// убрать последний элемент
// console.log(numArr[numArr.length - 1]);


// const guests = [
//     {
//         name: 'Alice'
//     },
//     {
//         name: 'John'
//     },
//     {
//         name: 'Emily'
//     },
//     {
//         name: 'Raychel'
//     }
// ]

// let newGuest = {
//     name: 'Alex'
// }

// // push 
// guests.push(newGuest)
// // console.log(guests)

// // pop
// let kickedGuest = guests.pop()
// // console.log(kickedGuest);
// // console.log(guests) 

// let importantGuest = {
//     name: 'Jack'
// }

// // unshift
// guests.unshift(
//     { name: 'Tom' },
//     importantGuest,
//     { name: 'Bill' });
// // console.log(guests)

// //shift 
// let kickedGuest2 = guests.shift()
// // console.log(kickedGuest2)
// // console.log(guests)

// // slice 
// // let a = guests.slice(2, 3)
// // console.log(a)

// // splice
// let john = guests.splice(3, 0, newGuest)
// console.log(guests)
// // console.log(john)

// let arrAge = [3, 90, 12, 34, 22, 9, 7]
// // arrAge.sort()
// // console.log(arrAge)

// arrAge.sort((a, b) => a - b)
// console.log(arrAge)



// урок с Асхатом (простые методы массивов)

// push, pop, shift, unshift

// let arr = [1, 2, 3]
// arr.push(4); //добавляет в конец
// console.log(arr)
// let num = arr.pop() // вырезает один элемент с конца
// arr.pop()
// console.log(arr)
// console.log(num)

// let arr = ['Kyrgyzstan', 'Uzbekistan', 'Rashka']
// arr.unshift('China') // добавляет в начало
// console.log(arr)
// let country = arr.shift //вырезает один эл. с начала 
// console.log(arr)
// console.log(country)

// splice - массив.splice(с какого начать, сколько вырезать, что вставить)

// let nums = [22, 40, 38, 50]
// let res = nums.splice(0, 1, '1')
// console.log(nums)
// console.log(res)

// slice - массив.slice (с какого начать, по какой не включительно)

// let arr = [100, 31, 47, 68]
// let num = arr.slice(1, 2,)
// console.log(arr)
// console.log(num)

// reverse 

// let arr = [1, 2, 3, 4, 5]
// // arr.reverse()
// let str = arr.join(" ") // из массива делает строку
// console.log(arr)
// console.log(str)
// let newArr = str.split("") //  из строки делает массив
// console.log(newArr)

// sort 

// let nums = [1, 2, 30, 11, 101, 22, 86]
// nums.sort((a, b) => a - b);
// console.log(nums)

//concat
// let res1 = [1, 2, 3]
// let res2 = [4, 5, 6]
// let result = res2.concat(res1, ['str', 'boolean'])
// console.log(result)

// let myArr = ['Daiana', 'Atay', 'Bael', 'Diana', 'Erlan']
// // let name1 = []
// for (let i = 0; i < myArr.length; i++) {
//     // name1.push([myArr[i], i])
//     myArr[i] = [myArr[i], i]
//     // myArr.splice(i, 1, [myArr[i], i])
// }
// console.log(myArr)


// let mixedUsers = [
//     {
//         role: "users"
//     },
//     {
//         role: "admin"
//     },
//     {
//         role: "users"
//     },
//     {
//         role: "users"
//     },
//     {
//         role: "admin"
//     }
// ]

// let admins = []
// let users = []

// for (let i = 0; i < mixedUsers.length; i++) {
//     if (mixedUsers[i].role === "admin") {
//         admins.push(mixedUsers[i])
//     } else if (mixedUsers[i].role === "users") {
//         users.push(mixedUsers[i])
//     }
// }

// console.log(admins)
// console.log(users);


let products = [
    { size: 's' },
    { size: 's' },
    { size: 's' },
    { size: 's' },
    { size: 'l' },
    { size: 'l' },
    { size: 'l' },
    { size: 'l' },
    { size: 'm' },
    { size: 'm' },
]

let sSizes = []
let mSizes = []
let lSizes = []
console.log(products)

for (let i = 0; i < products.length; i++) {
    if (products[i].size === "s") {
        sSizes.push(products[i])
    } else if (products[i].size === "l") {
        lSizes.push(products[i])
    } else if (products[i].size === "m") {
        mSizes.push(products[i])
    }
}

console.log(sSizes)
console.log(mSizes)
console.log(lSizes)

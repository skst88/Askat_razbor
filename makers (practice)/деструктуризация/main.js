// деструктуризация

// let list = [
//     'milk',
//     'sugar',
//     'salt',
//     'butter',
//     'bread'
// ]
// console.log(list[0])
// console.log(list[1])
// console.log(list)

// let [first, second, ...other] = list
// console.log(first, second, other)


// let arr = [
//     [1, 2, 3, 4, [9, 0]],
//     [5, 6, 7, 8]
// ]

// let [[a, b, c, d, [nine, zero]], [newArr, ...other]] = arr
// console.log(a, b, c, d, newArr, other)
// console.log(nine, zero)

// let person = {
//     age: 30,
//     name: 'John',
//     lastName: 'Snow'
// }

// // let name = person.name
// // let age = person.age
// // let lastName = person.lastName
// // console.log(name, age, lastName)

// let { age, name, lastName } = person
// console.log(name, age, lastName)

// let obj1 = {
//     subObj: {
//         name: 'Jack'
//     }
// }

// let { subObj: { name } } = obj1
// console.log(name)


// let obj = {
//     arr: [
//         {
//             name: 'Makers'
//         }
//     ]
// }

// let { arr: [{ name }] } = obj
// console.log(name)

// function foo({ name, age }) {
//     console.log(name)
// }

// let person = {
//     name: 'makers',
//     lastName: 'Bootcamp',
//     age: 3
// }

// foo(person)

// let ex1 = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];
// let [firstName, titul, ...other] = ex1;
// console.log(firstName,  titul, other);

// поверхностное и глубокое копирование объектов

// let user = {
//     name: 'Beksultan',
//     age: '20',
//     languages: {
//         english: '2 leve',
//         korean: '3 topik',
//     }
// };
// // let newUser = user
// // let newUser = Object.assign({}, user) // поверх-ое копирование
// let newUser = {...user } //(spred оператор) //поверх-ое копирование
// newUser.name = 'Aibek'
// newUser.languages.english = '6 level'
// console.log(user)
// console.log(newUser)

// let product = {
//     title: 'T-shirt',
//     price: {
//         s: 3000,
//         m: 4000,
//         l: 2000,
//     },
// };

// let newProduct = JSON.parse(JSON.stringify(product)) // глубокое копирование 
// newProduct.price.s = 10000
// console.log(product)
// console.log(newProduct)

// let str = JSON.stringify(product)
// let obj = JSON.parse(str)
// console.log(str)
// console.log(obj)
// console.log(product)

// деструктуризация с Аскатом

// let student = {
//     name: 'Melis',
//     lastName: 'Artykbaev'
// }

// // let name = student.name
// // let lastName = student.lastName
// let name1 = 'Sanzhar'
// let { name: studentName, lastName } = student
// console.log(studentName, lastName)


// let arr = ['true', 10, null, 'str', 77, false]
// // let boolean = arr[0]

// let [boolean, , type, ...rest] = arr
// console.log(boolean, type, reast)

// let obj = {
//     name: 'market place',
//     frameworks: ['React', 'Jango API'],
//     versions: {
//         legacy: [2011, 2012, 2013],
//     },
// };

// let { frameworks: [frontEndFrameworks] } = obj
// console.log(frontEndFrameworks)
// let { versions: { legacy: [, da] } } = obj
// console.log(da)

// let { name: projectName } = obj

// let products = {
//     // title: 'Pencil',
//     price: 100,
// }
// let { title = 'default title' } = products
// console.log(title)

// Запишите соответствующие значения в переменные name, и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало введенное значение с prompt.
// let user = {
//     // name: 'John', 
//     age: '22',
// }

// let { name = prompt('введите свое имя') } = user
// console.log(name)

// function showNameAndPhone({name, phone}) {
//     console.log(name, phone)
// }

// let obj = {
//     name: 'Shergazy',
//     phone: 7777777
// }
// showNameAndPhone(obj)


// function func([first, second]) {
//     console.log(first, second);
//     // let [first, second] = arg
//     //     arg.forEach((item) => {
//     //         console.log(item)
//     //     })
//     }
//     func([1, 2, 3, 4, 5]);


// function showUser({ name = 'Kuba', lastName, age }) {
//     console.log(name, lastName, age)
// }
// let obj = {
//     // name: 'ishak',
//     lastName: 'bolotbekov',
//     age: 24,
// }
// showUser(obj)

// Вам дан объект с информацией о книге.С помощью деструктуризации выведите
// серийный номер книжки ISBN в консоль

// const courseCatalogMetadata = [
//     {
//         title: 'The Hobbit, or There and Back Again',
//         description: 'The hobbit tells a fantastic story of adventure, danger, friendship, and courage',
//         texts: [{
//             author: 'J. R. R. Tolkien',
//             price: 120,
//             ISBN: '912-6-44-578441-0'
//         }]
//     }
// ];

// let [{ texts: [{ ISBN }] }] = courseCatalogMetadata
// console.log(ISBN)

// Переделайте следующую функцию через деструктуризацию.
// Сделайте так, чтобы если какое-либо из значений отсутствует,
//  то переменной присваивалось значение по умолчанию.

// Задание №1
// Дан объект {name: "John", years: 30}.
// Напишите деструктурирующее присваивание, которое:
// 	•	свойство name присвоит в переменную name.
// 	•	свойство years присвоит в переменную age.
// 	•	свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:
// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// let ex1 = {
//     name: 'John',
//     years: 30,
// };

// let { name, years, isAdmin = 'fasle' } = ex1;
// alert(name)
// alert(years)
// alert(isAdmin);
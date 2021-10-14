// let arr = [
//     { id: 1 },
//     { id: 1 },
//     { id: 1 },
//     { id: 1 },
//     { id: 2 },
//     { id: 2 },
//     { id: 3 },
//     { id: 3 },
//     { id: 3 },
// ]

// function uniq(arg) {
//     let uniqArr = []
//     arg.forEach((item) => {
//         let check = uniqArr.filter(elem => item.id === elem.id)
//         console.log(check)
//         if (check.length === 0) {
//             uniqArr.push(item)
//         }
//         console.log(uniqArr)
//     })
//     return uniqArr
// }

// let newArr = uniq(arr)
// console.log(newArr)

// let arr = [1, 1, 1, 2, 3, 3, 4, 5, 5]
// let newArr = []
// arr.forEach((item) => {
//     let check = newArr.filter(elem => {
//         console.log("это элем", elem, "это айтем", item)
//         return elem === item
//     })
//     if (check.length === 0) {
//         newArr.push(item)
//     }
// })
// console.log(newArr)


// let nums = [10, 21, 15, 5]
// let newArr = nums.map((item) => {
//     return item ** 2
// })
// console.log(newArr)

// let student = {
//     name: 'Aibek',
//     courses: {
//         javascript: {
//             price: 200,
//             duration: 3
//         },
//         python: {
//             position: "intro",
//             lesson: 1,
//         }
// //     }
// // }

// // let { courses: { python: { position } } } = student
// // console.log(position)

// let user = {
//     name: 'Igor',
//     age: 25,
//     friends: ['Ilyas', 'Kostya'],
//     children: [
//         {
//             name: "Nikolai",
//             age: 3
//         },
//         {
//             name: 'Petr',
//             age: 10
//         }
//     ],
//     parents: [
//         {
//             name: 'Victor',
//             age: 55
//         },
//         {
//             name: 'Vasilisa',
//             age: 53,
//             friends: {
//                 close: ['Shergazy', 'Aleksandra'],
//                 notClose: []
//             }
//         },
//     ],
//     jobs: {
//         frontEnd: {
//             language: 'JavaScript'
//         },
//         backEnd: {
//             languages: {
//                 java: {
//                     version: 8,
//                     frameworks: {
//                         spring: {
//                             version: 1
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// let { children: [, firstChild] } = user
// console.log(firstChild)

// let { parents: [, { friends: { close: [, closeFriend] } }] } = user
// console.log(closeFriend)

// let { jobs: { backend: { {languages: {java: {frameworks: {spring: { onevers } } } } } = user
// console.log(onevers)

// calcAge(23)
// function calcAge(age) {
//     let days = age * 365
//     console.log(days)
//     console.log(arguments)
// }

// const calcAge = (age) => {
//     let days = age * 365
//     console.log(days)
// }

// calcAge(20)

// const calcSquare = function () {
//     console.log(arguments)
//     let [firstNum, secondNum] = arguments
//     console.log(firstNum, secondNum)
// }
// calcSquare(3, 5)


// let arr = [-100, 100, 330, -500]
// let newArr = arr.filter((item) => {
//     return item < 0
// })
// console.log(newArr)

// let gamer = {
//     nickName: 'Tuda-Suda',
//     games: ["GTA", 'Dota', 'CS:GO'],
//     showUserGames() {
//         this.games.forEach((item) => {
//             console.log(item)
//         })
//     }
// }
// gamer.showUserGames()

// let arr = [20, -15, 30]
// let count = 0
// let newArr = arr.reduce((prevValue, currValue) => {
//     count++
//     return prevValue * currValue
// }, 1)
// console.log(count)
// console.log(newArr)

// function firstFunc() {
//     let str = ''
//     return function (word) {
//         return (str += word)
//     }
// }
// let func = firstFunc()
// console.log(func('Hello'))
// console.log(func(' World'))
// console.log(func(' !'))

// let newFunc = firstFunc()
// console.log(newFunc('Coding'))
// console.log(newFunc(' is easy'))


// let str = ''
// function func(word) {
//     return str += word
// }
// console.log(func('Hello'))
// console.log(func(' World'))
// console.log(func(' !'))
// console.log(func('Coding'))
// console.log(func(' is easy'))


// function rec(start) {
//     console.log(start)
//     if (start >= 100) return
//     return rec(start + 1)
// }
// rec(1)

// for (let i = 0; i <= 100; i++)
//     console.log(i)


// let i = 0
// while (i <= 100) {
//     console.log(i)
//     i++
// }

// let i = 101
// do {
//     console.log(i)
//     i++
// } while (i <= 101) { }


// console.log((true && true && false) || !true)

// if (!'') {
//     console.log('true')
// }

console.log('10' + 10)



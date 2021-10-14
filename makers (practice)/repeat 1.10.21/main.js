// let nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: "foo2",
//                     },
//                 },
//             },
//         },
//     },
// };

// function contains(obj, value) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             return contains(obj[key], value)
//         }
//         if (obj[key] === value) {
//             return true
//         }
//         return false
//     }
// }
// console.log(contains(nestedObject, 44))

// console.log(nestedObject.data.info.stuff.thing.moreStuff.magicNumber)
// contains(44)
// написать функцию, котрая находит значение в объекте 

// let rafael = [3, 3, 3]
// let novak = [2, 2, 1]

// function checkScore(player1, player2) {
//     let rafScore = 0
//     let nadScore = 0
//     player1.map((item, index) => {
//         if (item > player2[index]) {
//             rafScore++
//         } else {
//             nadScore++
//         }
//     })
//     return rafScore > nadScore
//         ? `Rafael won with ${rafScore} score`
//         : `Novak won with ${naScore} score`

// }

// console.log(checkScore(rafael, novak))

// let items = [
//     ["phone", "blue", "pixel"],
//     ["computer", "silver", "lenovo"],
//     ["phone", "gold", "iphone"],
//     ["computer", "red", "asus"],
// ];
// // items[i] = typei, colori, namei]

// let ruleKey = "color";
// let ruleValue = "silver";

// function checkRules(items, ruleKey, ruleValue) {
//     let count = 0
//     if (ruleKey === 'type') {
//         for (let index = 0; index < items.length; index++) {
//             const element = items[index][0];
//             if (element === ruleValue) {
//                 count++
//             }
//         }
//     } else if (ruleKey === 'color') {
//         for (let index = 0; index < items.length; index++) {
//             const element = items[index][1];
//             if (element === ruleValue) {
//                 count++
//             }
//         }
//     } else if (ruleKey === 'brand') {
//         for (let index = 0; index < items.length; index++) {
//             const element = items[index][2];
//             if (element === ruleValue) {
//                 count++
//             }
//         }
//     }
//     return count
// }
// console.log(checkRules(items, ruleKey, ruleValue))

// У нас есть число, посчитать сколько шагов нужно для того чтобы довести его до нуля.
// За один шаг, если число четное нужно разделить его на два, иначе вычесть 1

// function calcStep(num) {
//     let count = 0
//     while (num > 0) {
//         if (num % 2 === 0) {
//             num = num / 2
//             count++
//         }
//         else {
//             num -= 1
//             count++
//         }
//     }
//     return count
// }
// console.log(calcStep(14))

// Вам дано предложение и число, нужно вытащить в новую переменную кол-во слов равную числу

// function fixSentences(str, num) {
//     let arr = str.split(' ').splice(0, num)
//     console.log(arr.join(' '))
// }
// fixSentences('Hello World This is Dayana', 5)

// function func(arr, num) {
//     let newArr = arr.splice(0, num) //
//     for (let i = 0; i < num * 2; i += 2) {
//         newArr.splice(i + 1, 0, arr[i / 2])
//     }
//     return newArr
// }
// let nums = [1, 2, 3, 4, 4, 3, 2, 1]
// let n = 4
// console.log(func(nums, n))









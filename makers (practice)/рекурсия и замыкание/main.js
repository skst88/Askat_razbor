// Замыкание

// через глобальную переменную
// let count = 0;
// function counter() {
//     count++
//     return count
// }

// counter()
// counter()
// console.log(counter())

// function counter() {
//     let count = 0;
//     return function () {
//         count++
//         return count
//     }
// }

// let first = counter();
// first()
// first()
// console.log(first())

// let second = counter()
// second()
// console.log(second())

// Рекурсия

// let x = 0;
// function rec() {
//     if (x <= 10) {
//         console.log(x++)
//         rec()
//     }
// }

// rec()

// let i = 0
// function rec(arr, sum) {
//     i++
//     console.log(`Функция ${i} началась `)
//     sum += arr.shift()
//     if (arr.length != 0) {
//         sum = rec(arr, sum)
//     }
//     console.log(`Функция ${i} завершилась `)
//     i++
//     return sum
// }
// console.log(rec(arrNum, 0))


// let arrNum = [1, 2, 3, 4]
// let sum = 0
// for (let i = 0; i < arrNum.length; i++) {
//     console.log(`${i} Круг`)
//     sum += arrNum[i]
// }

// console.log(sum)


// Замыкание и рекурсия. Классная работа.

// Задание №1
// Создайте функцию, которая будет запрашивать
// у пользователя число, затем возвращать в
// консоли сумму всех чисел от введенного
// числа до 1.
// Например:
//    Ввод: 5
//    Вывод: 5 + 4 + 3 + 2 + 1 = 15


// let request = +prompt('Enter number')
// function recSum(num) {
//     if (num === 1) return 1;

//     return num + recSum(num - 1)
// }
// console.log(recSum(request))



// Задание №2
// 	Создайте функцию, которая запрашивает у
// пользователя число(в качестве порядкового
// числа по Фибоначи), затем выводит в консоли
// число Фибоначи по этому порядку.
// Например:
//    Ввод: 10;
//    Вывод: 55
// Числа Фибоначчи (ссылка):
// https://shorturl.at/cvE17

// function fib(n) {
//     if (n > 1) {
//         return fib(n - 1) + fib(n - 2)
//     } else {
//         return n
//     }
// }

// function fib(n) {
//     return n > 1 ? fib(n - 1) + fib(n - 2) : n
// }

// console.log(fib(10))

// Задание №3
// Создайте функцию, которая преобразовывает
// многомерный массив arr в одномерный массив.
// При помощи рекурсии!

// Вывод: [1,true,3,'hello'];

// let arr = [1, [true], [[3], ["hello"]]];
// let newArr = []
// const arrToFloat = function (arr, i = 0) {
//     if (i === arr.length) return
//     if (Array.isArray(arr[i])) arrToFloat(arr[i])
//     else newArr.push(arr[i])
//     arrToFloat(arr, i + 1)
// }
// arrToFloat(arr)
// console.log(newArr)


// Задание №4
// Создайте функцию, которая будет проверять - чётное ли число, или нечетное? В случае если число чётное - верните True, если нечётное - False

// Например
// console.log(recEven(234)); // выведет true
// console.log(recEven(-45)); // выведет false
// console.log(recEven(37)); // выведет false

// Замыкание

// function init() {
//     let name = 'Adilet'
//     return function () {
//         console.log(name)
//     }
// }

// let showHame = init()
// showHame()

// function words(arg1) {
//     return function (arg2) {
//         console.log(arg1, arg2)
//     }
// }

// let hello = words('Hello')
// hello('World')
// hello('Sanzhar')
// let count = words('count');
// count(5);


// function sum(num1) {
//     console.log(num1);
//     return function (num2) {
//         console.log(num1 + num2)
//     }
// }

// // let sum10 = sum(10)
// // sum10(20)
// sum(20)(40)

// рекурсия 


// let result = 0
// function toSum(num) {
//     for (let i = num; i >= 1; i--) {
//         result += i
//     }
// }
// toSum(5)
// console.log(result)

// function toSum(num) {
//     if (num <= 1) return num // точка выхода
//     return num + toSum(num - 1) // вызываем саму себя (функцию)
// }
// let result = toSum(5)
// console.log(result)

// function finder(arr) {
//     if (arr.length < 1) return 0 //точка выхода
//     let currentNum = arr.splice(0, 1)
//     console.log(currentNum)
//     return currentNum[0] === 1 ? 1 + finder(arr) : finder(arr)
// }
// let count = finder([1, 2, 22, 4, 1])
// console.log(count)

function dan(arr) {
    if (arr.length < 1) return 0;
    let elem = arr.splice(0, 1)

    if (typeof (elem[0]) === 'number') {
        return elem[0] += dan(arr)
    } else {
        return dan(arr)
    }
}
console.log(dan([true, 7, 2, 'Hello']))


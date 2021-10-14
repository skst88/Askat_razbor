//1 funtion declaration

// function showMessage(message) {
//     console.log(message)
// }

// showMessage('Makers Bootcamp!')
// showMessage('JavaScript') 

//2

// function calcMultiply(a, b) {
//     return a * b;
// }
// let result = calcMultiply(5, 6)
// console.log(result)

//1 function expression
// let showMessage = function (message) {
//     console.log(message)
// }

// showMessage('Hello World')

//2

// let calcMultiply = function (a, b) {
//     return a * b
// }

// console.log(calcMultiply(2, 7))

//hoisting 
// var a = 'makers'
// let b = 'bootcamp'
// console.log(a)
// console.log(b)


// scope (область видимости)

// let count = 10
// function counter() {

//     console.log(count)
// }
// counter()

// let personName = 'Kani'
// function func() {
//     let personName = 'Kubat'
//     function func2() {
//         let personName = 'Aidai'
//         console.log(personName)
//     }
//     func2()
// }
// func()

// function checkSum() {
//     let a = +prompt('Enter first number')
//     let и = +prompt('Enter second number')

//     let sum = a + b

//     if (sum === 15) {
//         alert('Сумма равна 15')
//     }
// }


// Функции, области видимости, хойстинг
// 1) function declaration
// 2) function expression


// function declaration

// function func() {
//     console.log('Hi')
// }
// func()

// function sayHello() {
//     alert('Hello')
// }
// sayHello()

// // объявляем функцию
// function имя(параметры) {
//      ...тело...
// }

// // вызов функции 
// имя()

// function sumTwoNumbers(num1, num2) {
//     let result = num1 + num2
//     return result;
// }
// let sum = sumTwoNumbers(10, 20)
// console.log(sum)

// function firstElem(arr) {
//     let elem = arr.shift()
//     return elem
// }
// let array = [true, 2, 3, 4, 5]
// let result = firstElem(array)
// console.log(result)


// mulTwoNumber(10, 20)
// function mulTwoNumber(arg1, arg2 = 1) {
//     console.log(arg1, arg2)
//     console.log(arg1 * arg2)

// }
// mulTwoNumber(2)
// console.log(num)
// var num = 20
// let str = '20'
// console.log(str)

// let message = 'Hello world'
// function showMessage(message) {
//     console.log(message)
// }
// showMessage(message)

// let arr = ['str']
// function array(arr) { // здесь функция принимает агрументы 
//     console.log(arr)
// }
// array(arr) // здесь передаются аргументы функции
// // если функция принимает аргументы, то аргументы нужно передавать

// let numbers = [100, 200, 300]

// function lastElemOfArray(array) {
//     let lastElem = array.pop()
//     console.log(lastElem)
// }


// lastElemOfArray(numbers)
// let boolValues = [true, false, true]
// lastElemOfArray(boolValues)


// let sayHello = function (arg) {
//     console.log(arg)
// }
// sayHello('Hello')

// let obj = {
//     title: "Makers",
// };
// function showTitle(arg1) {
//     document.write(`<h1>${arg1.title}</h1>`)
// }
// showTitle(obj)
// let school = {
//     title: "Gazprom"
// }
// showTitle(school)

// let num1 = 50
// function func() {
//     let num1 = 20
//     console.log(num1)
//     return num1
//     console.log('num')
// }
// func()
// console.log(num1)
// Тело функции - это локальная область видимости

// function pow(x, n) {
//     let result = x ** n
//     return result
// }
// let result = pow(2, 2)
// console.log(result)

//первый вариант

// let days = {
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesdat",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday",
//     7: "Sunday"
// }

// function dayOfTheWeek(num) {
//     return days[num]
// }

// let res = dayOfTheWeek(1);
// console.log(res)

//второй вариант 

// function dayOfTheWeek2(num) {
//     switch (num) {
//         case 1:
//             return "Monday"
//         case 2:
//             return "Tuesday"
//         case 3:
//             return "Wednesday"
//         case 4:
//             return "Thursday"
//         case 5:
//             return "Friday"
//         case 6:
//             return "Saturday"
//         case 7:
//             return "Sunday"
//     }
// }
// let res1 = dayOfTheWeek2(1);
// console.log(res1)

// function checkSum(num1, num2) {
//     if (num1 === num2) {
//         return num1 + num2 + num1
//     } else {
//         return num1 + num2
//     }
// }

// let sum = checkSum(2, 2)
// console.log(sum)

// let names = ['Maksat', 'Vladimir', 'Nurlan', 'Aidar', 'Sanjar', 'Adelina']

// function checkUser(arr, name) {
//     for (let i = 0; i < arr.length; i++) {
//         let check = arr[i]
//         if (check === name) {
//             return 'да';
//         }
//     }
//     return 'нет'
// }

// console.log(checkUser(names, 'Aidar'))






// Import stylesheets

// Функции и области видимости. Домашняя работа

// Группа С =======================================================
// Задание №1
// Создайте функцию которая выводит в
// консоль “Hello World!”

function showMessage(jj) {
    console.log(jj);
}
showMessage('Hello World!');

// Задание №2
// Напишите функцию hello(), которая при
// вызове будет возвращать строку:
// "Привет, JavaScript!"

function hello(hi) {
    console.log(hi);
}
hello('Привет, JavaScript!');

// Задание №3
// Создайте функцию которая принимает в качестве
// аргумента два числа и возвращает их сумму.

function sumTwoNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}
let sum = sumTwoNumbers(10, 20);
console.log(sum);

// Задание №4
// Напишите функцию, которая в качестве аргумента принимает
// число - возраст. Если возраст больше 18 выведите в
// консоль “Добро пожаловать”, иначе “Вход запрещен”

function age(num) {
    if (num > 18) {
        console.log('Добро пожаловать');
    } else {
        console.log('Вход запрещен');
    }
}
age(17);
age(19);

// Пример:
// console.log(func(18));
//  >>“Добро пожаловать”
// console.log(func(17));
//  >>“Вход запрещен”

// Задание №5
// Напишите функцию, которая принимает целое число и возвращает сумму всех его цифр.
// Например: ввод 456, функция должна вернуть число 15, так как 4 + 5 + 6 = 15

function allSum(num) {
    let sum = 0;
    let str = num.toString();
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    return sum;
}

let res = allSum(456);
console.log(res);

// Группа B =======================================================

// Задание №6
// Напишите функцию которая принимает
// массив с названиями стран и возвращает
// страну с самым длинным названием,
// затем напишите вторую функцию которая возвращает
// страну с самым коротким названием.

// Например:
// let countries = ['Финляндия', 'Япония', 'Лаос', 'Испания', 'Мексика']
// funcLongest(countries)
// Вернет строку 'Финляндия'
// funcShortest(countries)
// Вернет строку 'Лаос'

function countries(names) {
    names.sort((a, b) => b.length - a.length);
    return names[0];
}
function countries2(names) {
    names.sort((a, b) => a.length - b.length);
    return names[0];
}

let names2 = countries(['Финляндия', 'Япония', 'Лаос', 'Испания', 'Мексика']);
console.log(names2);

let names3 = countries2(['Финляндия', 'Япония', 'Лаос', 'Испания', 'Мексика']);
console.log(names3);

// Задание №7
// Напишите функцию которая принимает два аргумента, строку и букву.
// Функция должна возвращать число повторений переданной буквы в строке.
// Например:
// func('hello', 'l')
// Вернет число 2, т.к в слове 'hello' две буквы 'l'

function task7(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++
        }
    }
    return count
}

let save = task7('hello', 'l');
console.log(save)


// Задание №8
// Напишите функцию которая принимает число и возвращает его факториал.
// Факториал числа - это умножение всех порядковых чисел от 1 до самого числа:
// Пример:
// 5! = 1*2*3*4*5 // ответ 120
// 6! = 1*2*3*4*5*6 // ответ 720

function factorial(number) {
    return (number != 1) ? number * factorial(number - 1) : 1;
}

console.log(factorial(5));

function factorial(number1) {
    return (number1 != 1) ? number1 * factorial(number1 - 1) : 1;
}

console.log(factorial(6));

// Задание №9
// Напишите функцию, которая принимает два аргумента x и y, затем возвращает
// массив из чисел в диапазоне от x до y.
// Например:
// funс(1, 5)
// Вывод должен быть - [1, 2, 3, 4, 5]

function task9(x, y) {
    let arr = []
    for (let index = x; index <= y; index++) {
        arr.push(index)
    }
    return arr
}

let save1 = task9(1, 5)
console.log(save1)

// Задание №10
// Напишите функцию, которая будет принимать строку и проверять является ли
// она палиндромом. Пробелы и регистр учитывать не нужно.
// > Палиндро́м, пе́ревертень — число, буквосочетание, слово или текст, одинаково
// читающееся в обоих направлениях. Например, число 101; слова "кок", "топот",
// "комок" и т.д.

function checkPalindrom(str) {
    let reversed = ""
    for (let index = str.length - 1; index >= 0; index--) {
        reversed += str[index]
    }
    if (reversed === str) {
        return true
    } else {
        return false
    }
}
let res10 = checkPalindrom('комок')
console.log(res10)



// Группа A =======================================================

// Задание №11
// Создайте функцию которая принимает строку, удаляет все гласные буквы из строки,
// а согласные буквы в свою очередь переводит в заглавные и возвращает новую строку.
// Например: ввод - 'hello', функция должна возвратить 'HLL'

function letter(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] != "e" && string[i] != "o") {
            newString += string[i].toUpperCase();
        };
    };
    return newString;
}
let vowel = letter('hello')
console.log(vowel)

// Задача №12
// Напишите функцию которая принимает интервал в виде двух четырехзначных чисел,
// например 2000 и 3001 и выдает список всех чисел, в заданном интервале, состоящих из
// четных цифер, например:
// ['2000', '2002', '2004', '2006', '2008', '2020', '2022', '2024', '2026' ... ]



// Задание №13
// Напишите функцию-генератор паролей. Пароль должен быть из 8 случайных символов,
// состоять из строчных и заглавных букв, а также цифр.
// Пример выводы функции - jXfPEUlt
// Дополнительное условие: написать функцию как можно короче.
// Подсказка: погуглить и использовать модуль Math.random()

// Задание №14
// Вы используете приложение для построения маршрутов,
// приложение отправляет вам маршрут для прогулки в виде строки:
// (например, 'сюзв' - север, юг, запад и восток соответственно).
// Вы всегда проходите только один квартал для каждого направления, и тратите ровно одну минуту
// для пересечения одного городского квартала.
// Напишите функцию, которая вернет true, если прогулка, которую дает вам приложение,
// займет у вас ровно десять минут с учетом того, что вы также должны успеть вернутся
// в исходную точку. В противном случае программа должна вернуть false.
// Например:
// Ввод 'сювзсю'(север, юг. восток, запад, север, юг) должен возвратить false,
// т.к, во-первых прогулка короче 10 минут, данный маршрут займет 6 минут,
// во-вторых вы не возвратитесь в исходную точку.
// В свою очередь 'сюсюсюсюсю' возвратит true

// Задание №15
// Рафаель и Новак играют дружеский теннисный матч. Игроки сыграли три сета, очки за сеты каждый
// из игроков получил в виде списка с числами, например:  Рафаель [1, 0, 3], Новак [2, 2, 1].
// Напишите функцию которая поможет судье выявить победителя игры, за каждый выигранный сет игроку
// насчитывается один балл, например 1 < 2 Новак получает 1 балл за первый сет, 0 < 2 - еще один
// за второй сет и 3 > 1 - балл получает Рафаель, в итоге Новак выигрывает игру со счетом 2:1.
// Подсказка: для одного из вариантов решения погуглить про встроенную функцию map()



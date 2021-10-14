// const str = 'Привет Hello! my name is Kani. I am 22 years old i live in Bishkek for 12 years';
// const regexp = /Kani
// const regexp = /\d\d/g;
// const regexp = /\w\w\w\w\w\w/;
// const regexp = /\W\W\W/;
// const regexp = /\D\D/;

// const str = 'Hello! We are Alan and Ulan, Elan '
// const regexp = /[AUE]lan/g;

// const str = 'Today is 20.10.2020'
// // const regexp = /\d\d.\d\d.\d\d\d\d/
// // const regexp = /\d{2}.\d{2}.\d{4}/
// // const regexp = /\./
// const result = str.match(regexp)
// console.log(result)


// let str = ' We see you. we need you';
// let pattern = /we/gi
// console.log(str.replace(pattern, 'I'))

// let str = prompt('Enter word: ')
// let regexp = new RegExp(/[a-zA-ZА-Zа-я]/, 'g')
// console.log(regexp.test(str))


// let str = prompt('Enter word');
// let regexp = new RegExp(/\d+/, 'g')
// console.log(regexp.test(str))


// let str = prompt('Enter product weigth')
// let regexp = new RegExp(/^\d+(kg|t|g)$/, 'gi')
// console.log(regexp.test(str))

// let str = 'Name: Jack, LastName: Alan';
// // let newArr = [];
// // for (let i = 0; i < str.length; i++) {
// //     if (str[i].toLocaleLowerCase() !== 'a') newArr.push(str[i])
// //     else newArr.push('*')
// // }

// // let newStr = newArr.join('')
// console.log(str.replace(/a/gi, '*'))

// let str = prompt('Enter your phone number')
// let regexp = new RegExp(/^\+996\d{9}/, 'g')
// // console.log(regexp.test(str))

// if (regexp.test(str)) {
//     alert('Correct')
// } else {
//     alert('Wrong')
// }

// Регулярные выражения 

// 2 способа создания рег. выражения

// const regexp1 = /coding/ // 1 способ 
// const regexp2 = new RegExp('coding') // способ

// const str = 'code is easy'
// let result = str.match(regexp1) || []
// console.log(result)

// if (result.length > 0) {
//     console.log('Есть');
// } else {
//     console.log('Нет')
// }

// Флаги

//i - игнорирует регистр
//g - с этим флагом поиск ищет все совпадения, а без него - только первое
//метод match - поисковик
//метод строки match ищет и возвращает массив, если не найдено, то NULL

// let regexp = /code/gi
// let str = 'code, bad Code'
// let result = str.match(regexp)
// console.log(result)

// let str = 'Работайте братья, работайте'
// let regexp = new RegExp("работайте", "gi")
// let result = str.match(regexp)
// console.log(result)

// Метод строки replace ищет совпадения и заменяет их

// let str = 'Требуется middle разработчик'
// let regexp = /middle/
// let result = str.replace(regexp, 'junior')
// console.log(result)

// метод регулярного выражения test проверяет, есть ли хоть одно совпадение, если да,то true, если нет ,то false

// let str = 'We can'
// let regexp = /we/i
// let result = regexp.test(str)
// console.log(result)

// \d цифра от 0-9
// \s все пробелы
// \w символ, точнее строчные, латинские буквы или _
// \D не цифра, все кроме цифр от 0-9
// \S не пробел, все кроме пробела
// \W символ, кроме букв латинского алфавита и _
// \. любой символ

// let str = 'coding is easy'
// let regexp = /\w\w\w\w\w\w\s\w\w\s\w\w\w\w/
// let result = str.match(regexp)
// console.log(result)

// Якоря 
// ^ - начало строки
// $ - конец строки 


// let time = '20:12'
// let regexp = /^\d\d:\d\d$/
// let result = regexp.test(time)
// console.log(result)

// Наборы []

// let str1 = 'mad'
// let str2 = 'sad'
// let regexp = /[ms]ad/
// let result = str2.match(regexp)
// console.log(result)


// Диапазоны

// let str = '123456789'
// let regexp = /[1-9]/g
// let result = str.match(regexp)
// console.log(result)

// [0-9]
// [a-z]
// [A-Z] \w
// [а-я]
// [А-Я]

// Исключения 

// let regexp = /[^aeiou]/  // все, кроме этих букв

// Квантификаторы 

// {n} количество 

// let numbers = '12 555 3477'
// let regexp = /\d{3,}/g;
// let regexp = /\d+/
// + означает один или более сиволов 
// let regexp = /\d?/
//     let result = numbers.match(regexp)
// console.log(result)

// let string = 'color or colour'
// let regexp = /colou?r/g
// let result = string.match(regexp)
// console.log(result)

// Скобочные группы 

//mail.ru
//mail.gmail.ru

// let string = 'mail.gmail.ru'
// let regexp = /(\w+.)+\w+/g
// let result = string.match(regexp)
// console.log(result)


// let str = 'brown, black, blue, lightblue'
// let regexp = /[aieou]/gi
// let result = str.match(regexp)
// console.log(result.length)

//заменить первую 5 на 'пять'

// let str = '5 apples and 5 oranges'
// let regexp = /5/
// let newStr = str.replace(regexp, 'пять')
// console.log(newStr)

// Альтерация (или) '|'
let str = "I know Java, Python, Flutter, JavaScript, Dart"
let regexp = /Java(Script)?|Python|Flutter|Dart/g
let result = str.match(regexp)
console.log(result)















// let products = ['Nike', 'Puma', 'Adidas']
// // let newArr = products.forEach((item) => console.log(item));
// let newArr = products.map((item) => item)
// console.log(newArr)

// let arr = ["Есть", "жизнь", "на", "Марсе"];
// let newArr = arr.map(item => {
//     return item.length
// })
// console.log(newArr)

// let names = ['sam', 'luck', 'james']
// let newNames = names.map(item => {
//     return item[0].toUpperCase() + item.slice(1)
// })
// console.log(newNames)

// let arr = [1, 3, 10, -11, -55, 10]
// let newArr = arr.filter((item) => {
//     return item < 0
// })
// console.log(newArr)

// let arr = ['str', 1, [3, 4], true, ['str'], 10]
// let newArr = arr.filter((item) => {
//     return Array.isArray(item)
// })
// console.log(newArr)

// let num = 123456789
// let str = num.toString()
// let revFunc = str => str.split('').reverse().join('')
// console.log(revFunc(str))

// let num = 123456789
// let str = num.toString() // переводим в строку
// let arr = str.split("") // делим по буквам и переводим в массив
// arr = arr.reverse() // переворачиваем
// let newStr = +arr.join("") // из массива в строку, знак + их сткроки в число
// console.log(newStr) // выводим в консоль

// let reverseNum = +num.toString().split("").reverse().join("")
// console.log(reverseNum)


// Напишите функцию, которая будет принимать строку и проверять является ли 
// она палиндромом. Пробелы и регистр учитывать не нужно.
// > Палиндро́м, пе́ревертень — число, буквосочетание, слово или текст, одинаково 
// читающееся в обоих направлениях. Например, число 101; слова "кок", "топот", 
// "комок" и т.д.
function palindrome(word) {
    let secondWord = word.split("").reverse().join("");
    if (word.toLowerCase().trim() === secondWord.toLowerCase().trim()) {
        console.log('palindrome');
    } else {
        console.log('not a palindrome');
    }
}
palindrome('Азиза ')

// метод trim() убирает все пробелы до певрвого символа и после последнего символа
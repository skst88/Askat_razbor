// let result = +prompt('Enter your age')
// if (result > 23 && result < 40) {
//     alert('Hello')
// } else {
//     alert('Goodbye')
// }

// result > 23 && result < 40 ? alert('Hello') : alert('Goodbye')

// let arr = [{}]

// arr.length
//     ? console.log('Есть')
//     : arr.length > 10
//         ? console.log('Да, больше')
//         : console.log('Нет, меньше')

// let num = 8
// num > 0 && num < 10
//     ? num > 5
//         ? alert('num > 5')
//         : alert('num < 5')
//     : alert('Hi')

// if (num > 0 && num < 10) {
//     if (num > 5) {
//         alert('num > 5')
//     } else {
//         alert('num < 5')
//     }
// } else {
//     alert('Hi')
// }

// let seasons = +prompt('Введите число от 1-4')
// switch (seasons) {
//     case 1: alert("Зима")
//         break
//     case 2: alert("Весна")
//         break
//     case 3: alert("Лето")
//         break
//     case 4: alert("Осень")
// }


// let arr = [2, 5, 9, 15, 0, 4]
// let sum = 0
// for (let i of arr) {
//     if (i % 2 === 0) {
//         sum += i // sum + i
//     }
// }
// console.log(sum);

// let obj = {
//     'Бишкек': 'Кыргызстан',
//     'Минск': 'Беларусь',
//     'Москва': 'Россия',
//     'Киев': 'Украина',
// }
// for (i in obj) {
//     console.log(`${i} - это ${obj[i]}`)
// }

// let obj = {
//     title: 'Nike',
//     description: "Lorem ipsum",
//     count: 10
// }
// for (let key in obj) {
//     console.log(key, obj[key])
// }

// let count = 0
// for (let i = 100; i <= 500; i++) {
//     if (i % 3 === 0) {
//         count++
//     }
// }
// console.log(count)

// let arr = ['арбуз', 'дыня', 'вишня']
// arr.push('клубника')
// arr.splice(arr.length, 0, 'клубника')
// let arrNew = arr.splice(1, 1)
// let arrNew = arr.slice(1, 3)
// arr.unshift('10')
// console.log(arr) 
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] === 'дыня') {
//     arr.splice(i + 1, 0, 'помидор')
// }
//     let str = arr[i]  //записываем слово в переменную
//     let strArr = str.split("") //переводим наше слово в массив, 
//     let upperLetter = strArr[0].toUpperCase() //первый эл-т массива переводим в верхний регистр 
//     strArr.splice(0, 1, upperLetter) //заменяем первый эл-т массива на новую буквуы
//     let newStr = strArr.join('') //переводим наш массив strArr
//     arr.splice(i, 1, newStr) //заменяем старое слово на новое 
// }
// console.log(arr)

// for (let i = 0; i < arr.length; i++) {
//     let str = arr[i]
//     str = str[0].toUpperCase() + str.slice(1)
//     arr.splice(i, 1, str)
//     console.log(str)
// }

// let a = 1,
//     b = 2, c = " белых медведей";
// let sum = a.toString() + b + c;
// console.log(sum)

// let num = +prompt('Введите число:')
// if (num % 2 === 0) {
//     console.log(`число ${num} четное`)
// } else {
//     console.log(`число ${num} нечетное`)
// }

// for (let i = 50; i <= 1; i--) {
//     console.log(i)
// }

// let arr = [1, 2, 3, 4, 5]
// for (let i of arr)
//     console.log(i)

// for (let i = 0; i < arr.length; i++)
//     console.log(arr[i])

// let result = 1;
// for (let i = 0; i < arr.length; i++)
//     result *= arr[i]
// console.log(result)

// const num1 = +prompt('Your number')
// const num2 = +prompt('Your second num')

// let sum = 0
// let sum1 = 0
// sum1 = num1
// if (num1 > num2) {
//     let nem3 = num1;
//     num1 = num2num2 = num3
// }
// for (let i = num1; <num2; i++) {
//     if (i % 2 === 1)

// }

let a = 54, b = 24
let n = 0;
for (let i = 1; i <= a; i++) {
    if ((a % i === 0) && (b % i === 0)) {
        n = i
    } if ((a === i) || b === i) {
        break;
    }
}
console.log(n)


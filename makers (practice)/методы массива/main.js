// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (let i = 0; i < arr.length; i++)
//     console.log(arr[i])

//forEach ()
// arr.forEach((item, index, array) => {
//     console.log(item)
//     console.log(index)
//     console.log(array)
// })

// let newArr = arr.map((item) => {
//     return item + 10
// })
// console.log(newArr)

//map ()
// arr.map((item, index, array) => {
//     console.log(item)
//     console.log(index)
//     console.log(array)
// })

//filter 
// let newArr = arr.filter((item, index, array) => {
//     return item > 4
// })
// console.log(newArr)

//split

// let str = 'Ivan, Misha, Oleg, Aktan, Andrei'
// // let newStr = str.split(',')
// let filterArr = str.split(',').filter(item => {
//     // return item.length > 4
//     return /a/gi.test(item)
// })
// console.log(filterArr)
// // console.log(newStr)

//indexOf
// let arr = ['Ivan', 'Misha', 'Oleg', 'Aktan', 'Andrei']
// let index = arr.indexOf('Misha', 2)
// console.log(index)

//findIndex ()
// let index = arr.findIndex((item, index, array) => {
//     return item.length === 10
// })
// console.log(index)

// let arr = [
//     {
//         name: "Ivan"
//     },
//     {
//         name: 'Oleg'
//     },
//     {
//         name: 'Aktan'
//     },
//     {
//         name: 'Emily'
//     }
// ]
// find()
// console.log(arr.find(item => item.name === 'Oleg'))
// console.log(arr.findIndex(item => item.name === 'Oleg'))


//every()
// let arr = [1, 2, 3, 10, 12, 24]
// let result = arr.every((item, index, array) => {
//     return typeof item === 'number'
// })
// console.log(result)

//some 
// let arr = [1, 2, 3, '10', 12, 24]
// let result = arr.some((item) => {
//     return typeof item === 'string'
// })
// console.log(result)

//includes(elements, fromIndex)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = arr.includes(9, 3)
// console.log(result)

//reduce ()
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = arr.reduce((prevVal, currVal, currIndex, array) => {
//     // console.log(prevVal)
//     // console.log(currVal)
//     // console.log(currIndex)
//     // console.log(array)
// })

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = arr.reduce((a, b) => {
//     // console.log(a)
//     // return a + b
//     return [...a, b]
// }, [])
// console.log(result)


// разбор с Аскатом
// методы массивов (forEach, map, filter, reduce, indexOf, includes, every, some)

//forEach
// let arr = ['boolean', 34, {}, true]
// // // for (let i = 0; i < arr.length; i++) {
// // //     console.log(arr[i], i, arr)
// // }
// arr.forEach((item, index, array) => {
//     console.log(item, index, array)
// })

//map 
// let arr = [1, 2, 3, 4, 'a', 6]
// let newArr = arr.map(function (item, index, array) {
//     if (item === 'a') {
//         return 5
//     }
//     return item
// })
// console.log(newArr)

//filter 
// let numbers = [33, 2, 43, 10, 25]
// let newArray = numbers.filter(item => {
//     return item > 15
// })
// console.log(newArray)

// let films = [
//     {
//         title: 'Оно',
//         genre: 'horror'
//     },
//     {
//         title: 'Venom',
//         genre: 'fantasy'
//     },
//     {
//         title: 'Эки баатыр',
//         genre: 'comedy'
//     }
// ]
// console.log(films)
// function handleFilter(genre) {
//     let filteredArr = films.filter((item) => {
//         return item.genre === genre
//     })
//     console.log(filteredArr)
// }
// handleFilter('comedy')

// reduce 

// let arr = [2, 4, 10, 12]
// let result = arr.reduce((prevValue, currentValue, index, array) => {
//     return currentValue + currentValue
// })
// console.log(result)

// indexOf

// let arr = [true, 1, 0, 'str']
// let result = arr.indexOf('str')
// console.log(result)

// function cut(elem) {
//     let index = arr.indexOf(elem)
//     console.log(index)
//     arr.splice(index, 1)
// }
// console.log(arr)
// cut(false)
// console.log(arr)

//includes 

// let arr = [10, 20, 'array']
// let result = arr.includes('str')
// console.log(result)

// some and every

// let users = [
//     { id: 1, name: 'Санжар' },
//     { id: 2, name: 'Куба' },
//     { id: 3, name: 'Айдар' },
// ]
// let result = users.every((item) => {
//     return item.id === 1;
// });
// console.log(result)

// let arr = [1, 20, 30, -5]
// let result = arr.every((item) => item > 0)
// console.log(result)

// find
// let users = [
//     { id: 1, name: 'Санжар' },
//     { id: 2, name: 'Куба' },
//     { id: 3, name: 'Айдар' },
// ]
// let user = users.findIndex((item) => item.name === 'Айдар')
// console.log(user)


// в массиве есть градусы по цельсию. Нужно вернуть массив с градусами по фаренгейту
// let celsius = [-15, 10, 24, 36, 0]
// let fa = celsius.map((item) => {
//     return item * 1.8 + 32
// })
// console.log(celsius)
// console.log(fa)

// Создать новый список (массив) из массива studentRecords, где будут храниться только студенты, у которых баллы больше 50.
// После отфильтровки начислить каждому студенту по 15 баллов в качестве поощрения.
// В конце посчитать средний балл студентов (используйте метод reduce()). 

// let studentRecords = [
//     { name: 'John', id: 123, marks: 98 },
//     { name: 'Baba', id: 101, marks: 23 },
//     { name: 'John', id: 200, marks: 45 },
//     { name: 'Wick', id: 115, marks: 75 },
// ]
// let undatedList = studentRecords.filter((item) => item.marks > 50)
// let updatedList = undatedList.map((item) => {
//     item.marks += 15
//     return item
// })
// let ave = updatedList.reduce((prev, student) => {
//     console.log(prev, student)
//     return prev + student.marks
// }, 0)
// ave = ave / updatedList.length
// console.log(ave)
let arr = [1, 2, 3, 4, 5]
let isPositive() => {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] > 0) {
            return true
        } else {
            return false
        }
}


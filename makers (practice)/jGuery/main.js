// ! Селекторы jquery

// let title = document.getElementsByTagName('h1') //? NativeJS
// console.log(title)

// let title = $('h1')
// let welcome = $('.welcome')
// let titleById = $('#title')
// let inp = $('[name="inp.name"]')

// console.log(title, welcome, titleById, inp)

// titleById.style.color = 'red' // ? NativeJS

// title.css('color', 'red')
// welcome.css('background-color', 'pink')

// welcome.classList.add('example') // ? NativeJS
// welcome.addClass('example1')
// console.log(welcome.hasClass('welcome'))
// console.log(welcome.hasClass('welcome3'))

// welcome.removeClass('example2')

// ! разбор с Аскатом (селекторы jquery)

// let allElems = $('*')
// console.log(allElems)

// let inputs = $('input')
// let disabledInput = $('input:disabled')
// console.log(disabledInput)
// let value = disabledInput.val()
// disabledInput.val('Не работает')
// console.log(value)

// let liTags = $('li')
// liTags.addClass('list-items')
// liTags.toggleClass('list-items')
// liTags.toggleClass('active')
// liTags.removeClass()
// let result = liTags.hasClass('list-items')
// console.log(result)

// let findDiv = $('div:not(.block')
// console.log(findDiv)

// let paragraph = $('.text')
// let text = paragraph.text()
// console.log(text)
// paragraph.text(paragraph.text() + ' Hello')

// paragraph.html('<strong>JSFS-13</strong>')

// let div = $('#users')
// let users = [
//     {
//         name: 'Aibek',
//         age: 25,
//     },
//     {
//         name: 'Kuba',
//         age: 20,
//     },
//     {
//         name: 'Aidar',
//         age: 15,
//     }
// ]

// users.forEach((item) => {
//     div.append(`
// <p>Имя: ${item.name} <br> Возраст: ${item.age}</p>
// `)
// })

// let google = $('a[href="google.com"]')
// console.log(google)

let p =
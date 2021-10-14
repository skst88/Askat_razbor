// ! События JGuery

// $('#btn').on('click', function () {
//     alert('BTN CLICKED')
// })

// $('#btn').click(function () {
//     alert('BTN CLICKED')
// })

// $(window).on('mousemove', function (event) {
//     console.log(event)
// })

// $(window).mousemove(function (event) {
//     console.log(event)
// })

// $('.default-btn').on('click', function () {
//     $('.buttons').append('<button class="delete">Delete</button>')
// $('.delete').on('click', function () {
//     alert('DELETE BTN CLICKED')
// })
// })

// $('.buttons').click('.delete', function () {
//     alert('DELETE BTN CLICKED')
// })

// $('.block').fadeOut(2000)
// $('.block').fadeIn(2000)
// $('.block').hide(2000)
// $('.block').show(2000)

// $('.block').fadeOut(2000).delay(3000).show(2000)

// ! raedy = DOMContentLoaded
// $(document).ready(() => {
//     console.log('DOM загружен')
// })

// ! click
// let btn = $('button')
// btn.on('click', () => {
//     console.log("Hi")
// })

// ! doubl click
// let btn = $('button')
// function sayHello() {
//     console.log("Hello")
// }
// btn.on('dblclick', sayHello)

// ! focus 
// let input = $('input')
// input.on('focus', () => {
//     console.log('Есть фокус')
// })

// ! blur
// input.on('blur', () => {
//     console.log('Нет фокуса')
//     if (!input.val()) {
// alert('Это поле обязательно для заполнения')
//         input.css('border', '2px solid red')
//     } else {
//         input.css('border', '2px solid green')
//     }
// })

// ! input 
// input.on('input', (e) => {
//     console.log(e.target.value)
// })

// ! select 
// let input = $('input')
// input.on('select', (e) => {
//     console.log(e)
// })
// let p = $('p')
// ? нерабочий код
// p.on('select', (e) => {
//     console.log(e)
// })
// let strong = $('strong')
// ? рабочий код
// p.on('mouseup', (e) => {
//     let selectedText = window.getSelection().toString()
//     strong.text('Вы выделили: ' + selectedText)
// })

// ! hide, show, toggle

// let img = $('img')
// let btnHide = $('#btn-hide')
// let btnShow = $('#btn-show')
// let btnToggle = $('#btn-toggle')

// btnHide.on('click', () => {
//     img.hide(2000)
// })

// btnShow.on('click', () => {
//     img.show(1000)
// })

// btnToggle.on('click', () => {
//     img.toggle(1500)
// })

// ! fadeIn, fateOut, fadeTo,  fadeToggle

// let img = $('img')
// let btnFadeOut = $('#btn-hide')
// let btnFadeIn = $('#btn-show')
// let btnFadeTo = $('#btn-to')
// let btnFadeToggle = $('#btn-toggle')

// btnFadeOut.on('click', () => {
//     img.fadeOut(1000)
// })

// btnFadeIn.on('click', () => {
//     img.fadeIn(1000)
// })

// btnFadeTo.on('click', () => {
//     img.fadeTo(1000, 0.5)
// })

// btnFadeToggle.on('click', () => {
//     img.fadeToggle(1000)
// })

// * modal window

let btnShowModal = $('.show-modal')
let btnCloseModal = $('.my-modal button')
let modal = $('.modal')
let myModal = $('.my-modal')

function showModal() {
    modal.fadeIn(300).css('display', 'flex')
}
function closeModal() {
    modal.fadeOut(300).css('display', 'flex')
}

btnShowModal.on('click', showModal)
btnCloseModal.on('click', closeModal)

let h3 = $('.my-modal h3')
let p = $('.my-modal p')
modal.on('click', (e) => {
    if (e.target !== myModal[0] && e.target !== h3[0] && e.target !== p[0]) {
        closeModal()
    }
})

// ! range input
let range = $('#range')
let img = $('img')
range.on('change', (e) => {
    let value = e.target.value
    img.fadeTo(500, value)
})







// let btn = document.getElementById('btn')
// btn.addEventListener('click', function () {
//     console.log('Hello Makers!')
// })

// btn.addEventListener('click', () => {
//     console.log('Hello Bootcamp!')

// })

// btn.onclick = () => alert('Hello')

// btn.addEventListener('click', handler)
// btn.addEventListener('click', handler2)

// function handler() {
//     alert('Tnank you!')
// }

// function handler2() {
//     alert('Tnank you again!')
// }

// btn.removeEventListener('click', handler)

// let h1 = document.querySelector('h1')
// let inp = document.querySelector('#inp')
// inp.addEventListener('change', function (event) {
// console.log(event.target.value)
//     h1.innerText = event.target.value
//     event.target.value = ''
// })
// console.log(h1, inp)


// inp.addEventListener('keydown', function (event) {
//     console.log(event)
//     h1.innerText = event.key
// })

// let btn = document.querySelector('#btn')
// let inp = document.querySelector('#inp')
// let container = document.querySelector('#container')

// let addElemToContainer = function () {
// console.log(inp.value)
//     let newElem = document.createElement('div')
//     if (!inp.value) return
//     newElem.innerText = inp.value;
//     container.append(newElem)
//     inp.value = ''
// }

// btn.addEventListener('click', addElemToContainer);
// btn.addEventListener('change', addElemToContainer)


// document.addEventListener('mousemove', function (e) {
// console.log('mouse')
//     console.log(`X=${e.clientX} Y=${e.clientY}`)
// })


// let btn2 = document.querySelector('#btn2')

// btn1.addEventListener('click', function () {
//     alert('BTN 1 clicked')
// })

// let event = new Event('click')
// btn1.dispatchEvent(event)4
// btn2.addEventListener('click', () => {
//     btn1.dispatchEvent(event)
// })

// document.addEventListener('DOMContentLoaded', () => {
//     let btn1 = document.querySelector('#btn1')
//     console.log(btn1)
// })

// * разбор с Аскатом 

// ! DOMContentLoaded - тип события, нужен чтобы дождаться, пока весь HTML прогрузится 
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Дом полностью загружен')
// })


// ? второй и третий способ

// let btn = document.querySelector('button')
// второй способ
// btn.onclick = () => {
//     alert('clicked')
// }

// ? третий способ  
// ! event - объект самого события
// ! target -элемент, на котором произошло событие)
// btn.addEventListener('click', (event) => {
// alert('clicked')
// console.log(event)
// })

// online, offline

// window.addEventListener('offline', () => {
//     console.log('Пропал интернет')
// })

// window.addEventListener('online', () => {
//     console.log('Появился интернет')
// })

// ! mousemove - любое движение мыши
// ! mousedown -  при нажатии
// ! mouseup - при отпускании мыши

// document.addEventListener('mousemove', (e) => {
//     console.log(e)
// })

// document.addEventListener('mousedown', (e) => {
//     console.log(e)
// })

// document.addEventListener('mouseup', (e) => {
//     console.log(e)
// })

// ! input - срабатывает на каждое изменение input 
// ! value - значение input
// ! paste - срабатывает когда вставляем
// ! copy - срабатывает когда копируем

// let input = document.querySelector('input')
// let h3 = document.querySelector('h3')
// input.addEventListener('input', (e) => {
//     console.log(e.target.value)
//     h3.innerText = e.target.value
// })

// input.addEventListener('paste', (e) => {
//     alert('Нельзя копировать текст')
// })

// input.addEventListener('copy', (e) => {
//     alert('Нельзя cкопировать текст')
// })

// ! resize - спабатывает при изменении размера экрана (только window)

// window.addEventListener('resize', (e) => {
//     console.log(e)
// })

// ! submit - тип собития, кторый есть у тега form и срабатывает при нажатии на enter 

// let input = document.querySelector('input')
// let form = document.querySelector('form')
// let ul = document.querySelector('ul')
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let text = input.value;
//     let li = document.createElement('li');
//     li.innerText = text;
//     ul.append(li)
//     input.value = ""
// })

// ! keypress - любое нажатие на клавишу
// ! keydown - срабатывает при нажатии на какую-нибудь клавишу
// ! keyup -срабатывает при опускании какой-нибудь клавиши

// document.addEventListener('keypress', (e) => {
//     console.log(e)
// })

// document.addEventListener('keydown', (e) => {
//     console.log(e)
// })

// document.addEventListener('keyup', (e) => {
//     console.log(e)
// })

// let span = document.querySelector('.first-span')
// let btnChangeColor = document.querySelector('.change-color')
// let btnChangeSize = document.querySelector('.change-size')

// btnChangeColor.addEventListener('click', () => {
//     let red = Math.ceil(Math.random() * 50)
//     let green = Math.ceil(Math.random() * 50)
//     let blue = Math.ceil(Math.random() * 50)
//     span.style.color = `rgb(${red}, ${red}, ${red})`
// })
// btnChangeSize.addEventListener('click', () => {
//     span.style.fontSize = `${Math.ceil(Math.random() * 100)}px`;
// })

// * разбор тасков 

// let input = document.querySelectorAll('input')
// input[0].placeholder = 'Enter the text';


// let a = document.querySelectorAll('a');
// a.forEach((item) => {
//     item.style.textDecoration = 'none';
// });

// let ex7 = document.getElementsByTagName('a');
// let exe7 = window.getComputedStyle(ex7[1]);
// console.log(exe7.color);

// Создайте маркированный список, при помощи setInterval добавьте в маркированный список 20 li - элементы с текстом:
// "1 - овечка",
//     "2 - овечка",
//     "3 - овечка",
//     и так до "20-овечка"
//         (через NativeJS / DOM)


// let list = document.querySelectorAll('ul')
// let count = 1
// function sheep() {
//     list[0].innerHTML += `<li>${count} - sheep </li>`
//     count++
//     if (count === 21) {
//         clearInterval(x)
//     }
// }
// let x = setInterval(sheep, 500)

let p = document.querySelector('p');
p.addEventListener('click', () => {
    let letter = p.innerHTML.split(' ');
    console.log(`Количество пробелов: ${letter.length}`);
    console.log(`Количество букв: ${p.innerHTML.length}`);
});
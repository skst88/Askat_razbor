// console.log(document.getElementById('title'))
// let title = document.getElementById('title')
// let list = document.getElementsByTagName('ul')
// let items = document.getElementsByClassName('item')
// let inp = document.getElementsByName('inp-name')
// console.log(inp)


// let title = document.querySelector('#title')
// let list = document.querySelectorAll('lu')
// let items = document.querySelectorAll('.item')
// let inp = document.querySelectorAll('[name="inp-name"] ')
// console.log(inp)

// let items = document.getElementsByClassName('item')
// let items2 = document.querySelectorAll('.item')
// // let list = document.getElementsByTagName('ul')
// // list[0].innerHTML += '<li class="item">New elem</li>'
// // // console.log(list)
// // console.log(items)
// // console.log(items2)
// for (let i = 0; i < items.length; i++) {
//     console.log(items2[i])
// }

// let example = document.getElementById('Hello');
// console.log(example.innerHTML)
// example.innerText = 'New Data'
// console.log(example.innerHTML)

// // let h2s = document.querySelectorAll('h2')
// let h2s = document.getElementsByTagName('h2')
// h2s.forEach(item => {
//     item.innerText = 'Hello World'
// })

// let items = document.querySelectorAll('.item')
// console.log(items)
// items.forEach((item, index) => {
//     //     // item.innerHTML = `${item.innerHTML} ${index + 1}`
//     //     item.style.color = 'red'
//     //     item.style.backgroundColor = 'green'
//     if (index % 2 !== 0) {
//         item.style.backgroundColor = 'pink'
//     }
// })

//создание элемента

// let newElem = document.createElement('div')
// newElem.innerHTML = '<span>I am a new element</span>'

// // добавление элемента
// // console.log(container)
// container[0].appendChild(newElem)
// newElem.style.color = 'brown'
// newElem.style.fontSize = '25px'

// let container = document.querySelectorAll('.container')
// let elem1 = document.createElement('div')
// let elem2 = document.createElement('div')
// let elem3 = document.createElement('div')

// elem1.innerText = 'Element 1'
// elem2.innerText = 'Element 2'
// elem3.innerText = 'Element 3'

// container[0].append(elem1) // push
// container[0].prepend(elem2) //unshift
// container[0].appendChild(elem3) // push

// // удаление элементов 
// // container[0].removeChild(elem1)

// // добавление и удаление классов
// elem1.classList.add('foo')
// elem1.classList.remove('foo')
// elem1.classList.toggle()

// let date = new Date().getHours()
// // console.log(date)
// if (date > 21) {
//     document.body.classList.add('theme-dark')
// } else {
//     document.body.classList.add('theme-light')
// }

// DOM, селекторы  Native JS, разброр с Аскатом

// let h1 = document.getElementsByTagName('h1')
// console.log(h1)
// h1[0].style.color = 'red'
// let p = document.getElementsByClassName('paragraph')
// console.log(p)
// // p[0].style.fontSize = '24px'
// for (const val of p) {
//     // console.log(val)
//     val.style.fontSize = '24px'
// }
// let firstSpan = document.getElementById('first-span')
// console.log(firstSpan)
// firstSpan.style.fontWeight = 700

// let h1 = document.querySelector('h1')
// console.log(h1)
// h1.style.color = 'blue'
// let p = document.querySelectorAll('.paragraph')
// console.log(p)
// p.forEach((item) => {
//     item.style.fontSize = '23px'
// })
// let span = document.querySelector('#first-span')
// let span = document.querySelector('.paragraph span')
// span.style.background = 'lightblue'

// toggle

// let p = document.querySelector('.paragraph')
// p.classList.toggle('paragraph')
// p.classList.toggle('paragraph')

// p.classList.add('text')
// // p.classList.remove('paragraph')
// p.classList.replace('paragraph', 'para')
// console.log(p.classList.value)

// let div = document.querySelector('div')
// let btn = document.createElement('button')
// btn.innerText = 'Save'
// div.append(btn)

// let lastP = document.getElementById('last-p')
// let text = lastP.innerText
// // lastP.innerText += ' coding is easy'
// lastP.innerHTML += ' <strong class="str">coding is easy</strong>'


// let strong = document.querySelector('strong')
// console.log(strong)

// let allTags = document.querySelectorAll('*')
// console.log(allTags)

// let tagsAByGet = document.getElementsByTagName('a')
// let tagsAByQuery = document.querySelectorAll('a')
// let a = document.createElement('a')
// document.body.append(a)
// console.log(tagsAByGet)
// console.log(tagsAByQuery)

// let listItems = document.querySelectorAll('li')
// let listItemTag = listItems[0].outerHTML
// console.log(listItemTag)
// listItem.forEach((item, index) => {
//     if (index % 2 === 0) {
//         item.style.backgroundColor = 'pink'
//     }
// })

// let h3 = document.querySelector('h3')
// h3.outerHTML = `<h4>${h3.innerText}</h4>`

// let pTags = document.querySelectorAll('.p')
// pTags.forEach((item) => {
//     item.classList.toggle('second-list')

// })

// let h2 = document.querySelector('h2')
// // let res = h2.hasAttribute('class')
// h2.setAttribute('class', 'h2-title')
// h2.removeAttribute('id')
// h2.removeAttribute('class hghb')

// // console.log(res)


// let arrowFunc = () => {
//     console.log('Hello world')
// }

// let arrowFunc = () => console.log('Hello world')


// let arrowFunc = (arg1, arg2) => arg1 + arg2

// let arrowFunc = arg1 => console.log(arg1)
// arrowFunc(5)

// let arrowFunc = (arg1, arg2, arg3) => {
//     console.log(...arguments)
// }

// arrowFunc(true, 23, 'makers')

// методы объектов

// let person = {
//     name: 'John',
//     age: 22,

//     sayHello() {
//         console.log('Hello world')
//     },

//     sayName: function () {
//         console.log('my name is John')
//     } 

//     sayAge: () => 
// }

// console.log(person.age)
// person.sayHello()
// person.sayName

// стрелочные функции (arrow function)

// const arrowFunc = () => {
//     console.log('Arrow')
// }
// arrowFunc()

// const arrowFunc = () => console.log('Arrow')
// arrowFunc()


// методы объектов 

// let user = {
//     name: 'Erlan',
//     sayName: function () {
//         console.log(this.name)
//     }
// }
// let newUser = { ...user }
// newUser.name = 'Islam'
// user.sayName()
// newUser.sayName()


// let passanger = {
//     firtsName: 'Sam',
//     lastName: 'Winchester',
//     passportNum: 'US12345678',
//     baggage: 20,
//     getInfo() {
//         console.log(`Passanger ${this.firtsName} ${this.lastName}. Passport number is ${this.passportNum}. Maximum luggage weight is ${this.baggage}kg`)
//     },
//     setBaggage(arg) {
//         this.baggage = arg;
//     }
// }


// passanger.getInfo()
// passanger.setBaggage(50)
// passanger.getInfo()


// Дан объект user.Напишите метод byTicket для этого объекта.
// При вызове метода количество билетов должно увеличиваться на единицу, при условии,
// что у пользователя будет достаточно средств на балансе.
// Также, с баланса должна сниматься стоимость билета (400).
// Если на счету недостаточно средств вывести соответствующее сообщение.
let user = {
    name: 'Sam',
    age: 17,
    balance: 700,
    tickets: 0,
    buyTicket(count) {
        if (this.balance >= 400 * count) {
            this.tickets += count;
            this.balance -= 400 * count;
            console.log(`Вы успешно купили ${count} билет(ов)`)
        } else {
            let avaTicket = Math.floor(this.balance / 400);
            if (avaTicket > 0) {
                this.balance -= 400 * avaTicket
                this.tickets += avaTicket
                console.log(`У вас недостаточно средств купить ${count} билет(а). Вы успешно купили ${avaTicket} билет(а)`)
            } else {

                alert("У Вас недостаточно средств")
            }
        }
    },
    addToBalance(sum) {
        this.balance += sum
        console.log(`Вы успешно пополнили баланс на ${sum}`)
    },
    showBalance() {
        console.log(`Ваш баланс ${this.balance} сом`)
    }
}

user.buyTicket(2)
user.addToBalance(1000)
user.showBalance()


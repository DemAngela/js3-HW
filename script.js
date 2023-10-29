// function myFunction(user) {
//     if (user.toLowerCase() === 'admin') {
//         return `Welcome, ${user}`
//     } else {
//         return 'Not correct user'
//     }
// }
//
// console.log(myFunction('Admin'))
// console.log(myFunction('Angela'))

// function february(day) {
//     if (day >=1 && day <= 28) {
//         return `today is ${day} of february`
//     } else{
//         return `on february only 28 day, your day is ${day} of another month`
//     }
// }
//
// console.log(february(20))
// console.log(february(30))

// function number(num) {
//     if (num === 50) {
//         return `${num} is equals of 50`
//     } else {
//         return `${num} is not correct`
//     }
// }
//
// console.log(number(50))
// console.log(number(20))


// function myFunction(name, age) {
//     if (age >=18 &&  age <=60) {
//         return `${name}, ${age}, Welcome`
//     } else {
//         return `${name}, ${age}, rejected`
//     }
// }
//
// console.log(myFunction('Angela', 21))
// console.log(myFunction('Max', 14))

// function username(name) {
//     if (name.length > 3) {
//         return `${name}, name is accepted`
//     } else {
//         return `${name}, name is too short`
//     }
// }
//
// console.log(username('Kira'))
// console.log(username('L'))

// function username(name) {
//     if (name.length < 5) {
//         return `${name}, name is accepted`
//     } else {
//         return `${name}, name is too long`
//     }
// }
//
// console.log(username('Agatha'))
// console.log(username('Anna'))

// function number(age) {
//     if (age === 20) {
//         return 'correct'
//     } else {
//         return 'not correct'
//     }
// }
//
// console.log(number(20))
// console.log(number('20'))

// function number(age) {
//     if (age === '20') {
//         return 'correct'
//     } else {
//         return 'not correct'
//     }
// }
//
// console.log(number('20'))
// console.log(number(20))

// function number(age) {
//     if (age > 23) {
//         return 'correct'
//     } else {
//         return 'not correct'
//     }
// }
//
// console.log(number(25))
// console.log(number(20))

// function week(day) {
//     if (day == 1) {
//         return 'monday'
//     } else if (day == 2) {
//         return 'tuesday'
//     } else if (day == 3) {
//         return 'wednesday'
//     } else if (day == 4) {
//         return 'thursday'
//     } else if (day == 5) {
//         return 'friday'
//     } else if (day == 6) {
//         return 'Saturday'
//     } else if (day == 7) {
//         return 'Sunday'
//     }
// }
//
// console.log(week(1))
// console.log(week(2))
// console.log(week(3))
// console.log(week(4))
// console.log(week(5))
// console.log(week(6))
// console.log(week(7))







// function one() {
//     let a = "hello world"
//     let b = a.replaceAll(' ', '')
//     return b
// }
//
// console.log(one())

// function two() {
//     let a = "hello world"
//     let c = a.slice(-6) +  ' ' + a.slice(0, 6)
//     return c
// }
//
// console.log(two())

// function three() {
//     let text = 'Hallo world'
//     let firstOIndex =text.indexOf('o')
//     let secondOIndex = text.indexOf('o', firstOIndex +1)
//
//     if (secondOIndex !== -1) {
//         text = text.slice(0,secondOIndex) + 'a' + text.slice(secondOIndex + 1)
//     }
//     return text
// }
//
// console.log(three())


// function four() {
//     let a = "hello world"
//     let e = a.length % 2 === 0
//     return e
// }
//
// console.log(four())

// function text() {
//     let a = 'lorem ipsum dolor sit amet'
//     let b = a.replaceAll(' ', '')
//     return b
// }

//  console.log(text())

// function percent(price, discount) {
//     if (typeof price !== "number" || typeof discount !== "number") {
//         return '(￢_￢) dude there must be numbers here'
//     }
//     if (price < 0 || discount > 99) {
//         return 'you want too much ∠( ᐛ 」∠)＿'
//     }
//     const reduction = (price * discount)/100 ;
//     const discountedPrice = price - reduction;
//
//     return discountedPrice;
// }

// console.log(percent(2500,30))
// console.log(percent(2000,100))
// console.log(percent(4890,45))
// console.log(percent('200','50'))


// function str(text) {
//     let b = typeof text
//     return b
// }
//
// console.log(str('Sideli tri sovy na dereve. Odna upala vtoraya tozhe. Vot eto SOVpadenie'))
// console.log(str(1000-7))

// function str(text) {
//     if (text.length === 0) {
//         return '╮(￣_￣)╭ empty.'
//     } else {
//         return  'not empty.'
//     }
// }
//
// console.log(str())

// function str(text) {
//     if (text.length >= 4 && text.length <= 10) {
//         return 'correctly'
//     } else {
//         return 'not correct'
//     }
// }
//
// console.log(str('JavaScript'))
// console.log(str('Alkogolika-aitishnika zakodirovali'))


// function str(text) {
//     let a = text.length % 2 === 0
//     return a
// }
//
// console.log(str('Where everyone going?'))
// console.log(str('Bingo?'))





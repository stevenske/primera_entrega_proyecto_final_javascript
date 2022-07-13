// let price = 0
// let discount = 0
// let name = prompt("hi!! what's your name?")

// alert(`hi ${name} welcome to TrainTrips!!`)

// alert("we have 10% discount trip in the next countries:Spain, France, and England")

// let trip = prompt("write the country in discount that you want to trip!!").toLowerCase()

// function discount10(a, b) {
//     return a - (a * b)
// }


// while (trip != 'accept') {
//     switch (trip) {
//         case 'spain':
//             price = 1800
//             discount = discount10(price, 0.10)
//             alert(`the price of the trip to ${trip} is $${price} and with the 10% discount the total is ${discount}`)
//             trip = prompt("write accept for confirm the trip!!").toLowerCase()
//             break
//         case 'france':
//             price = 2200
//             discount = discount10(price, 0.10)
//             alert(`the price of the trip to ${trip} is $${price} and with the 10% discount the total is ${discount}`)
//             trip = prompt("write accept for confirm the trip!!").toLowerCase()
//             break
//         case 'england':
//             price = 2100
//             discount = discount10(price, 0.10)
//             alert(`the price of the trip to ${trip} is $${price} and with the 10% discount the total is ${discount}`)
//             trip = prompt("write accept for confirm the trip!!").toLowerCase()
//             break
//         case '':
//             trip = prompt('please write a country')
//             break
//         default:
//             alert("we don't have that country in discount")
//             trip = prompt("write a country that has a discount and you want to trip!!").toLowerCase()
//             break
//     }
// }
// function pay() {
//     let payment = prompt('Do you want to pay it in installments (yes/no)?')
//     if (payment == 'yes') {
//         let installments = prompt('In how many installments do you want to pay it?')
//         let eachInstallment = discount / installments
//         alert(`they will be ${installments} installments of $${eachInstallment} for the total of $${discount} enjoy the trip and thank you for trusting us!!`)
//     } else {
//         let money = prompt('how much will you pay?')

//         while (money < discount) {
//             alert('not enough money')
//             money = prompt('how much will you pay?')
//         }

//         let change = money - discount
//         alert(`your payment is $${money} and his change is $${change} enjoy the trip and thank you for trusting us!!`)
//     }

// }

// pay()






let name = prompt("hi!! what's your name?")
alert(`hi ${name} welcome to TrainTrips!!`)
alert(" we are carrying out a poll to our clients to find out where they would like to travel")


const countries = []

let country = prompt('what country do you want to trabel with Traintips?')
countries.push(country)
let confirm = prompt('do you want to add a few more? (yes/no)')

if (confirm == 'yes') {

    while (country != 'esc') {
        country = prompt('what country do you want to trabel with Traintrips? (write "esc" if you write all the countries that you want)').toLowerCase()
        countries.push(country)

    }
}
const del = (countryName) => {
    let i = countries.indexOf(countryName)

    if (i != -1) {
        countries.splice(i, 1)
    }
}
alert('THANKS YOU SO MUCH FOR COMPLETE THIS POLL')
del('esc')
console.log(countries)



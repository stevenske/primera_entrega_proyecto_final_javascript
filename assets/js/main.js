// PRIMERA PARTE ENTREGA PROYECTO FINAL
let price = 0
let discount = 0
let name = prompt("hi!! what's your name?")

alert(`hi ${name} welcome to TrainTrips!!`)

alert("we have 10% discount trip in the next countries:Spain, France, and England")

let trip = prompt("write the country in discount that you want to trip!!").toLowerCase()

function discount10(a, b) {
    return a - (a * b)
}



class country{
    constructor(countryName,price){
        this.countryName = countryName
        this.price = price
    }
}


const country1 = new country('spain',1800)
const country2 = new country('france',2200)
const country3 = new country('england',2100)




while (trip != 'accept') {
    switch (trip) {
        case country1.countryName:
            discount = discount10(country1.price, 0.10)
            alert(`the price of the trip to ${trip} is $${country1.price} and with the 10% discount the total is ${discount}`)
            trip = prompt("write accept for confirm the trip!!").toLowerCase()
            break
        case country2.countryName:
            discount = discount10(country2.price, 0.10)
            alert(`the price of the trip to ${trip} is $${country2.price} and with the 10% discount the total is ${discount}`)
            trip = prompt("write accept for confirm the trip!!").toLowerCase()
            break
        case country3.countryName:
            discount = discount10(country3.price, 0.10)
            alert(`the price of the trip to ${trip} is $${country3.price} and with the 10% discount the total is ${discount}`)
            trip = prompt("write accept for confirm the trip!!").toLowerCase()
            break
        case '':
            trip = prompt('please write a country')
            break
        default:
            alert("we don't have that country in discount")
            trip = prompt("write a country that has a discount and you want to trip!!").toLowerCase()
            break
    }
}
function pay() {
    let payment = prompt('Do you want to pay it in installments (yes/no)?')
    if (payment == 'yes') {
        let installments = prompt('In how many installments do you want to pay it?')
        let eachInstallment = discount / installments
        alert(`they will be ${installments} installments of $${eachInstallment} for the total of $${discount} enjoy the trip and thank you for trusting us!!`)
    } else {
        let money = prompt('how much will you pay?')

        while (money < discount) {
            alert('not enough money')
            money = prompt('how much will you pay?')
        }

        let change = money - discount
        alert(`your payment is $${money} and his change is $${change} enjoy the trip and thank you for trusting us!!`)
    }

}

pay()
// SEGUNDA PARTE ENTREGA PROYECTO FINAL

alert(`${name} we are carrying out a poll to our clients to find out where they would like to travel`)

class wishCountry {
    constructor(newCountry) {
        this.newCountry = newCountry
    }
}

let newCountryName
const countries = []
let newCountry = prompt('what country do you want to trabel with Traintips?')
newCountryName = countries.push(new wishCountry(newCountry))

let confirmar = prompt('do you want to add a few more? (yes/no)')

if (confirmar == 'yes') {

    while (newCountry != 'esc') {
        newCountry = prompt('what country do you want to trabel with Traintrips? (write "esc" if you write all the countries that you want)').toLowerCase()
        if(newCountry!="esc"){
            newCountryName = new wishCountry(newCountry)
            countries.push(newCountryName)
        }
    }
    // countries.splice(countries.length - 1, 1)
}
alert('THANKS YOU SO MUCH FOR COMPLETE THIS POLL')

console.log(countries)


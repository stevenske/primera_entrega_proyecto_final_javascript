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


const countries = [
    new country('spain',1800),
    new country('france',2200),
    new country('england',2100)
]






while (trip != 'accept') {
    switch (trip) {
        case 'spain':
            discount = discount10(countries[0].price, 0.10)
            alert(`the price of the trip to ${trip} is $${countries[0].price} and with the 10% discount the total is ${discount}`)
            trip = prompt("write accept for confirm the trip!!").toLowerCase()
            break
        case 'france':
            discount = discount10(countries[1].price, 0.10)
            alert(`the price of the trip to ${trip} is $${countries[1].price} and with the 10% discount the total is ${discount}`)
            trip = prompt("write accept for confirm the trip!!").toLowerCase()
            break
        case 'england':
            discount = discount10(countries[2].price, 0.10)
            alert(`the price of the trip to ${trip} is $${countries[2].price} and with the 10% discount the total is ${discount}`)
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
const newCountries = []
let newCountry = prompt('what country do you want to trabel with Traintips?')
newCountryName = newCountries.push(new wishCountry(newCountry))

const resultado = newCountries.some((el)=>el.newCountry == countries[0].countryName)
const resultado3 = newCountries.some((el)=>el.newCountry == countries[1].countryName)
const resultado2 = newCountries.some((el)=>el.newCountry == countries[2].countryName)

if(resultado == true || resultado2 == true || resultado3 == true){
    alert(`that country is already in TrainTrips`)
}

let confirmar = prompt('do you want to add a few more? (yes/no)')

if (confirmar == 'yes') {

    while (newCountry != 'esc') {
        newCountry = prompt('what country do you want to trabel with Traintrips? (write "esc" if you write all the countries that you want)').toLowerCase()
        if(newCountry!="esc"){
            newCountryName = new wishCountry(newCountry)
            newCountries.push(newCountryName)
        }
    }
    // countries.splice(countries.length - 1, 1)
}
alert('THANKS YOU SO MUCH FOR COMPLETE THIS POLL')


newCountries.forEach((newCountryName)=>{
    console.log(newCountryName)
})

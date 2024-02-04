const book = {
 title: "beginning after the end",
 price: 10000,
}

function purchaseBook(value, discount, tax) {
 let totalDiscount = value.price * discount / 100
 console.log("amount of discount = " + totalDiscount)
 let price = value.price - totalDiscount
 console.log("price after discount = " + price)

 let totalTax = price * tax / 100
 console.log("amount of tax = " + totalTax)
 let priceFinal = price - totalTax
 console.log("price after tax = " + priceFinal)

 return priceFinal
}

purchaseBook(book, 30, 10)
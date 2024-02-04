const book = {
  title: "beginning after the end",
  price: 10000,
};

function purchaseBook(value, discount, tax, amountStock, amountPurchased) {
  let booksPurchased = 0;

  for (let i = 0; i < amountPurchased; i++) {
    if (i === amountStock) {
      break;
    }
    booksPurchased += value.price;
  }

  console.log("Total Price = " + booksPurchased);
  let totalDiscount = (booksPurchased * discount) / 100;
  console.log("amount of discount = " + totalDiscount);
  let price = booksPurchased - totalDiscount;
  console.log("price after discount = " + price);

  let totalTax = (price * tax) / 100;
  console.log("amount of tax = " + totalTax);
  let priceFinal = price - totalTax;
  console.log("price after tax = " + priceFinal);

  if (amountPurchased >= amountStock) {
    console.log("book is currently sold cannot be purchased again");
  } else {
    console.log("book can be purchased again");
  }

  return priceFinal;
}

purchaseBook(book, 30, 10, 4, 4);

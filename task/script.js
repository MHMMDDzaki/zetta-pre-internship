const book = {
  title: "beginning after the end",
  price: 10000,
};

function purchaseBook(
  value,
  discount,
  tax,
  amountStock,
  amountPurchased,
  creditDuration
) {
  let booksPurchased = 0;
  const purchaseDetails = [];

  for (let i = 0; i < amountPurchased; i++) {
    if (i === amountStock) {
      break;
    }
    booksPurchased += value.price;
  }

  purchaseDetails.push("Total Price = " + booksPurchased);
  let totalDiscount = (booksPurchased * discount) / 100;
  purchaseDetails.push("Amount of discount = " + totalDiscount);
  let price = booksPurchased - totalDiscount;
  purchaseDetails.push("Price after discount = " + price);

  let totalTax = (price * tax) / 100;
  purchaseDetails.push("Amount of tax = " + totalTax);
  let priceFinal = price - totalTax;
  purchaseDetails.push("Price after tax = " + priceFinal);

  if (amountPurchased >= amountStock) {
    purchaseDetails.push("Book is currently sold; cannot be purchased again");
  } else {
    purchaseDetails.push("Book can be purchased again");
  }

  // Calculate due dates for each month starting from the next month
  const currentDate = new Date();
  for (let i = 1; i <= creditDuration; i++) {
    const dueDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + i,
      currentDate.getDate()
    );
    purchaseDetails.push(`Due date for month ${i}: ${dueDate.toDateString()}`);
  }

  return purchaseDetails;
}

let result = purchaseBook(book, 30, 10, 4, 4, 6);
console.log(result);

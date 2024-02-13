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
  let repurchased = "";

  if (amountPurchased < amountStock) {
    booksPurchased = value.price * amountPurchased;
    repurchased = "Book can be purchased again";
  } else {
    booksPurchased = value.price * amountStock;
    repurchased = "Book is currently sold, cannot be purchased again";
  }
  console.log("-----------------------------");
  console.log("Total Price = " + booksPurchased);

  let totalDiscount = (booksPurchased * discount) / 100;
  console.log("Amount of discount = " + totalDiscount);

  let price = booksPurchased - totalDiscount;
  console.log("Price after discount = " + price);

  let totalTax = (price * tax) / 100;
  console.log("Amount of tax = " + totalTax);

  let priceFinal = price - totalTax;
  console.log("Price after tax = " + priceFinal);

  console.log("-----------------------------");
  console.log(repurchased);
  console.log("-----------------------------");
  console.log("DUE DATE AND PAYMENT/MONTH");

  const currentDate = new Date();
  // currentDate.setMonth(11)
  // currentDate.setDate(29)
  // console.log(currentDate.getMonth())
  const creditDetails = Array.from({ length: creditDuration }, (_, i) => {
    const dueDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + i + 1,
      currentDate.getDate()
    );
    return {
      month: i + 1,
      dueDate: dueDate.toDateString(),
      pricePerMonth: priceFinal / creditDuration,
    };
  });

  return creditDetails;
}

let result = purchaseBook(book, 30, 10, 4, 5, 10);
console.log(result);

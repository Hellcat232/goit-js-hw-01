function makeTransaction(quantity, pricePerDroid) {
  // let totalPrice = `${quantity * pricePerDroid}`;
  // let makeTransaction = `You ordered ${quantity} droids worth ${
  //   quantity * pricePerDroid
  // } credits!`;
  // return makeTransaction;
  return `You ordered ${quantity} droids worth ${
    quantity * pricePerDroid
  } credits!`;
}
makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

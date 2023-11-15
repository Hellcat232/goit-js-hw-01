function makeTransaction(quantity, pricePerDroid) {
  let totalPrice = `${quantity * pricePerDroid}`;
  let makeTransaction = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  return makeTransaction;
}
makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

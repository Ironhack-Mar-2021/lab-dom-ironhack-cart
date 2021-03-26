function calculateSubTotal() {
  let price = document.querySelector(".price span").innerText;
  let quantity = document.querySelector(".quantity input").value;
  console.log(price);
  console.log(quantity);

  let subTotal = price * quantity;
  console.log(subTotal)
  document.querySelector('.subtotal span').innerText = subTotal;

  return subTotal
}

document.querySelector('#calculate').onclick = function (e) {
  calculateSubTotal()
}
// document.querySelector('.btn-remove').onclick = function(remove){

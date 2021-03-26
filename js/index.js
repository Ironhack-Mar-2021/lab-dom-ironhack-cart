function calculateSubTotal(product) {
  let price = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input").value;
  // console.log(price);
  // console.log(quantity);

  let subTotal = price * quantity;
  // console.log(subTotal)
  product.querySelector('.subtotal span').innerText = subTotal;

  return subTotal
}

function calculateAll() {
  let products = document.querySelectorAll("tr.product")
  for (let p of products) {
    console.log(p)
    calculateSubTotal(p)
  }
  
}

document.querySelector('#calculate').onclick = function (e) {
  calculateAll()
}
// document.querySelector('.btn-remove').onclick = function(remove){

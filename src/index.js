// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Math.round(parseFloat(product.querySelector('.price span').innerText)*100)/100;
  const quantity = Math.round(parseFloat(product.querySelector('.quantity input').value)*100)/100;
  const subtotal = Math.round((price * quantity)*100)/100;
  //console.log(price);
  //console.log(quantity);
  //console.log(subtotal);
  document.querySelector('.subtotal span').innerText = subtotal;

  return subtotal;
}

function calculateAll() {

  const allProducts = document.querySelectorAll('.product');
  console.log(allProducts);

  let total = 0
  allProducts.forEach(product => {
    total += updateSubtotal(product);
  });

  console.log(total);

  total = Math.round(total*100)/100;
  document.querySelector('#total-value span').innerText = total

  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parent = target.parentNode.parentNode;
  parent.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let textInput = document.querySelector("#textInput").value;
  let priceInput = document.querySelector("#priceInput").value;
  console.log(textInput, priceInput);

  let newProduct = document.createElement('tr')

  newProduct.innerHTML = `
  <td class="name">
    <span>${textInput}</span>
  </td>
  <td class="price">$<span>${priceInput}</span></td>
  <td class="quantity">
    <input type="number" value="1" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`

  newProduct.classList.add("product");

  let bodyOfProducts = document.querySelector("tbody");
  bodyOfProducts.appendChild(newProduct);

  calculateAll();

  const createButton = document.querySelector("#create");
  createButton.addEventListener('click', createProduct);  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.querySelectorAll(".btn-remove");
  removeButton.forEach(button => {
    button.addEventListener('click', removeProduct);

  const createButton = document.querySelector("#create");
  createButton.addEventListener('click', createProduct);
  });
});

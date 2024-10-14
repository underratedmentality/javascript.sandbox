//ASSIGNMENTS;
const cart = [
  { title: "Laptop", price: 1000, quantity: 1 },
  { title: "Headphones", price: 200, quantity: 2 },
  { title: "Mouse", price: 50, quantity: 3 },
  { title: "AirPods", price: 400, quantity: 2 },
  { title: "TV", price: 1200, quantity: 2 },
];

// print out the title of each product in the cart array
function printProductTitle () {
  cart.forEach (item => console.log(item.title))}
  printProductTitle()

// calculate the total number of items (quantity) in the cart 
function totalQuantity () {
  return cart.reduce((total, item) => total + item.quantity, 0);
}
console.log(totalQuantity());

// find and print the most expensive product in the cart
function mostExpensiveProduct(){
 const mostExpensive =  cart.reduce((prev, curr) => (prev.price > curr.price ? prev : curr));
 console.log(mostExpensive);
}  
mostExpensiveProduct()

// 4. Calculates the total value of the cart
function totalCartValue() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}
console.log(totalCartValue());

// 5. Filters and displays products that cost more than 100
function productsCostingMoreThan100() {
  const expensiveProducts = cart.filter(item => item.price > 100);
  console.log(expensiveProducts);
}
productsCostingMoreThan100()

// 6. Checks if a certain product is in the cart based on its title
function isProductInCart(productTitle) {
  return cart.some(item => item.title === productTitle);
}
console.log(isProductInCart("Laptop"));

// 7. Displays each product along with its total value (price * quantity)
function displayProductsWithTotalValue() {
  cart.forEach(item => {
    const totalValue = item.price * item.quantity;
    console.log(`${item.title}: $${totalValue}`);
  });
}
displayProductsWithTotalValue()

// 8. Concatenates all the product titles into a single string, separated by commas
function concatenateProductTitles() {
  return cart.map(item => item.title).join(', ');
}
console.log(concatenateProductTitles());

// 9. Checks if the cart contains any products that are more expensive than 70
function hasExpensiveProducts() {
  return cart.some(item => item.price > 70);
}
console.log(hasExpensiveProducts());

// 10. Write a function that clears the entire cart (remove all products)
const clearCart = () => [];
console.log(clearCart());








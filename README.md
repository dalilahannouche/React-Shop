# React Shopping Cart

This React project is a shopping cart application that allows users to select products, add them to the cart, and manage product quantities. Here's a summary of the key features I implemented:

## Features

### 1. **Add Products to Cart**

- When a user clicks on a product, it is added to the cart with an initial quantity of 0.
- Users can increment or decrement the product quantity by using the "+" or "-" buttons in the interface.

### 2. **Select Products with Quantity 0**

- A product will only appear in the cart if its quantity is greater than 0.
- If the product's quantity is 0, it is considered "unselected" and will not be added to the cart, even if the user clicks on it.

### 3. **Update Product Quantities**

- Users can modify the quantity of products in the cart using the "+" and "-" buttons.
- When the quantity of a product is updated, the cart reflects the changes in real time, and the total order amount is recalculated automatically.

### 4. **Display Cart**

- The cart displays the selected products, along with their quantity and total price.
- The total order amount is dynamically updated based on the quantities and prices of the products.

## Technical Details

- **State Management**: I used React's `useState` hook to manage the state of the products and the cart.
- **Quantity Management**: When a user clicks "+" or "-", the `quantityHandler` function is called to increment or decrement the quantity of a product. If the quantity reaches 0, the product is removed from the cart.
- **Product Filtering**: A product is only added to the cart if its quantity is greater than 0. Products with a quantity of 0 are not displayed in the cart.

## Technologies Used

- **React** for component management.
- **CSS** for styling and layout.

## 🚀 Deployment

The project is live at:

🔗 [View the website](https://dalilahannouche.github.io/React-Shop/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-shopping-cart.git
   ```

import React, { useState, useEffect } from 'react';  // Import useState and useEffect
import { useSelector } from 'react-redux';  // Import useSelector to access the Redux state
import './ProductList.css'; // Import CSS file for component-specific styles

const SuperCoin = () => {
  const [superCoins, setSuperCoins] = useState(0);  // State to track super coins

  // Access cart items from Redux store
  const cartItems = useSelector(state => state.cart.cartItems);

  // Calculate the total amount of the cart
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Update super coins when totalAmount changes
  useEffect(() => {
    if (totalAmount >= 100 && totalAmount < 200) {
      setSuperCoins(10);
    } else if (totalAmount >= 200 && totalAmount < 300) {
      setSuperCoins(20);
    } else if (totalAmount >= 300) {
      setSuperCoins(30);
    } else {
      setSuperCoins(0);
    }
  }, [totalAmount]);

  // Return JSX to render the component
  return (
    <div className="super-coins" style={{ textAlign: 'center' }}>
      <h2 className="super-coins-title">Super Coins</h2>
      <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
    </div>
  );
};

export default SuperCoin;  // Ensure component name matches the exported name

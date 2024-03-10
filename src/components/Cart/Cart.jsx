import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../container/Footer/Footer"
import "./Cart.css";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../../context/rootContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const handleDeleteItem = (id) => {
    const updatedCartItems = cart.filter((item) => item.id !== id);
    setCart(updatedCartItems);
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, newQuantity) }; // Ensure quantity is never less than 1
      }
      return item;
    });
    setCart(updatedCartItems);
  };

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="Sorry">Sorry, You Didn't Add Any Food To Cart</p>
        ) : (
          <div className="cart-table">
            <table>
              <thead>
                <tr>
                  <th>Food Number</th>
                  <th>Food Image</th>
                  <th>Food Name</th>
                  <th>Food Price</th>
                  <th>Food Quantity</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => {
                  console.log("Item:", item); // Debugging statement
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img src={item.image} alt="Food Image" />
                      </td>
                      <td>{item.title}</td>
                      <td>
                        ${item.newPrice ? item.newPrice.toFixed(2) : "N/A"}
                      </td>{" "}
                      {/* Add null check */}
                      <td>
                        <input
                          type="number"
                          value={item.quantity || 1}
                          min="1"
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              parseInt(e.target.value)
                            )
                          }
                        />
                      </td>
                      <td>
                        $
                        {item.newPrice && item.quantity
                          ? (item.newPrice * item.quantity).toFixed(2)
                          : item.newPrice}
                      </td>
                      {/* Add null checks */}
                      <td>
                        <FaTrash
                          className="delete-icon"
                          onClick={() => handleDeleteItem(item.id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;

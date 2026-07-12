import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartCount);
  const totalCost = useSelector(selectCartTotal);

  return (
    <>
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 <span className="cart-count">{totalItems}</span>
          </Link>
        </div>
      </nav>

      <div className="container">
        <h1>Shopping Cart</h1>
        <br />

        <h3>Total Plants : {totalItems}</h3>
        <h2>Total Cost : ₹{totalCost}</h2>

        <br />

        <Link to="/plants">
          <button>Continue Shopping</button>
        </Link>

        <button
          style={{ marginLeft: "15px" }}
          onClick={() => alert("Checkout Coming Soon!")}
        >
          Checkout
        </button>

        <br />
        <br />

        {items.length === 0 ? (
          <h2>Your cart is empty.</h2>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "25px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                }}
              />

              <div style={{ flex: 1 }}>
                <h2>{item.name}</h2>
                <p>Unit Price : ₹{item.price}</p>
                <p>Quantity : {item.quantity}</p>
                <p>
                  Total : <strong>₹{item.price * item.quantity}</strong>
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "15px",
                  }}
                >
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>
                    +
                  </button>

                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                    -
                  </button>

                  <button onClick={() => dispatch(removeItem(item.id))}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default CartItem;

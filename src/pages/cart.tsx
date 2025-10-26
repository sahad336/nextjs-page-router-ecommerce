"use client";
import React from "react";
import { useCart } from "../context/cartContext";
import styles from "../styles/cart.module.css";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={`container py-5 mt-5${styles.container1}`}>
      <h1 className={`text-center text-primary mb-5 ${styles.cartTitle}`}>🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-muted mb-5">Your cart is empty</p>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cart.map((item,index) => (
              <div key={`${item.id}-${index}`} className={`card mb-3 shadow-sm ${styles.cartItem}`}>
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src={item.image || "https://via.placeholder.com/150"}
                      className="img-fluid rounded-start"
                      alt={item.title}
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">Price: ₹{item.price}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <div className={`card p-3 ${styles.totalCard}`}>
              <h5>Total: ₹{totalPrice}</h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
 
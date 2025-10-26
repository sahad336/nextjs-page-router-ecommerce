"use client";
import { useCart } from "../context/cartContext";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <button
      className="btn btn-primary mt-3"
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </button>
  );
}

"use client";
import CartItem from "./CartItem";

//menerima props dari parent
export default function CartListItem({ products, cart, onQtyChange }) {
  if (!products?.length) {
    return <p className="text-sm text-gray-500">No products.</p>;
  }
  
//nge-loop products
  return (
    <div className="grid gap-3">
      {products.map((p) => (
        <CartItem
          key={p.id}
          product={p}
          qty={cart[p.id] ?? 0}
          onQtyChange={onQtyChange}
        />
      ))}
    </div>
  );
}

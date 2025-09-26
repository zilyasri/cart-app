"use client";
import { useCart } from "../store/cartStore";
import CartItem from "./CartItem";

export default function CartListItem() {
  const products = useCart((s) => s.products);

  if (!products?.length) {
    return <p className="text-sm text-gray-500">No products.</p>;
  }


  return (
    <div className="grid gap-3">
      {products.map((p) => (//nge-loop products
        <CartItem
          key={p.id}
          product={p}
        />
      ))}
    </div>
  );
}

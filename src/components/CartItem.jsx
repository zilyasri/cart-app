"use client";
import { useCart } from "../store/cartStore";  
import Counter from "./Counter";

export default function CartItem({ product }) {
   const qty = useCart((s) => s.cart[product.id] || 0);
  const setQty = useCart((s) => s.setQty);

  const subtotal = product.price * qty;

  return (
    <div className="flex items-center gap-4 rounded-xl border p-3 bg-yellow-700">
      <img
        src={product.image}
        alt={product.title}
        className="h-16 w-16 rounded-md object-contain bg-violet-800"
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold line-clamp-2">{product.title}</p>
        <p className="text-xs text-white-500">${product.price.toFixed(2)} / item</p>
        <p className="text-xs text-white-600 mt-1">
          Subtotal: <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </p>
      </div>
      { }
      <Counter value={qty} onChange={(n) => setQty(product.id, n)} />
    </div>
  );
}

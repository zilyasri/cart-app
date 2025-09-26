"use client";
import { useCart } from "@/store/cartStore";
import { TableRow, TableCell } from "@/components/ui/table";
import Quantity from "./Quantity";

export default function CartRow({ product }) {
  const qty = useCart((s) => s.cart[product.id] || 0);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);

  const subtotal = qty * product.price;

  return (
    <TableRow className="anim hover:bg-slate-50/60">
      <TableCell>
        <div className="flex items-center gap-3">
          <img
            src={product.image}
            alt={product.title}
            className="h-12 w-12 rounded-md bg-slate-50 object-contain"
          />
          <p className="line-clamp-2 text-sm font-medium text-slate-800">{product.title}</p>
        </div>
      </TableCell>

      <TableCell className="text-sm text-slate-700">${product.price.toFixed(2)}</TableCell>

      <TableCell><Quantity value={qty} onChange={(n) => setQty(product.id, n)} /></TableCell>

      <TableCell className="font-semibold text-slate-900">${subtotal.toFixed(2)}</TableCell>

      <TableCell className="text-right">
        <button
          onClick={() => remove(product.id)}
          className="rounded-md px-2 py-1 text-sm text-rose-600 anim hover:bg-rose-50 active:scale-95 focus-ring"
          title="Remove"
          type="button"
        >
          ✕
        </button>
      </TableCell>
    </TableRow>
  );
}

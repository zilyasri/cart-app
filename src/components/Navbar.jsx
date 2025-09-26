"use client";
import Link from "next/link";
import { ShoppingCart, Leaf } from "lucide-react";
import { useCart } from "@/store/cartStore";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const totalItems = useCart((s) => s.totalItems());
  const totalPrice = useCart((s) => s.totalPrice());

  return (
    <nav className="sticky top-0 z-20 border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <Leaf className="h-5 w-5 text-emerald-600" />
          Zaalalaa<span className="text-emerald-600">App</span>
        </Link>

        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-slate-700 anim">{`$${totalPrice.toFixed(2)}`}</span>

          <Button
            asChild
            variant="outline"
            className="relative anim focus-ring hover:bg-slate-50 active:scale-95"
          >
            <Link href="/cart" aria-label="Open cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="pointer-events-none absolute -right-2 -top-2 grid min-w-5 place-items-center rounded-full bg-emerald-600 px-1.5 text-[11px] font-bold text-white">
                {totalItems}
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

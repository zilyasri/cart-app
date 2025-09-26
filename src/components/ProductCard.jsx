"use client";
import { Plus } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cartStore";

export default function ProductCard({ product }) {
  const inc = useCart((s) => s.inc);

  return (
    <Card className="group overflow-hidden lift">
      <div className="flex aspect-[4/3] items-center justify-center bg-emerald-50/40">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full max-h-56 object-contain anim motion-safe:group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <CardContent className="grid gap-1 p-4">
        <h3 className="line-clamp-2 text-[15px] font-semibold text-slate-800">
          {product.title}
        </h3>
        <p className="text-lg font-extrabold tracking-tight text-emerald-700">
          {product.price.toFixed(2)}$
        </p>
      </CardContent>

      <CardFooter className="pb-4">
        <Button
          onClick={() => inc(product.id)}
          className="mx-auto rounded-full anim focus-ring hover:bg-emerald-600/90 active:scale-95"
          aria-label="Add to cart"
        >
          <Plus className="mr-1 h-4 w-4" /> Add
        </Button>
      </CardFooter>
    </Card>
  );
}

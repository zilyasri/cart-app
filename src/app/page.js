"use client";
import { useEffect } from "react";
import { useCart } from "../store/cartStore";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function Page() {
  const setProducts = useCart((s) => s.setProducts);
  const products = useCart((s) => s.products);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
      const data = await res.json();
      setProducts(data);
    })();
  }, [setProducts]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* <h2 className="mb-4 text-2xl font-bold text-slate-900">Fresh Picks</h2> */}
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </section>
      </main>
    </div>
  );
}

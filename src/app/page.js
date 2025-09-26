"use client"
import { useCart } from "../store/cartStore";
import { useEffect, useState } from 'react';
import CartListItem from "@/components/CartList";
import Nav from "@/components/Navbar";

// state itu data yang bdisimpan di komponen dan bisa berubah
// props itu data yang dikirim dari parent ke child 

export default function Page() {
  const setProducts = useCart((s) => s.setProducts);


  // 1) Ambil data produk dari API 
  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.com/products/", {
        cache: "no-store",
      });
      const data = await res.json();
      setProducts(data);
    })();
  }, [setProducts]);

  return (
   <div className="min-h-screen bg-fuchsia-400">
       {/* Navbar & CartList sekarang baca langsung dari store */}
      <Nav />
      <main className="mx-auto max-w-5xl px-4 py-6">
        <h2 className="mb-4 text-lg font-bold">Cart (Zustand)</h2>
        <CartListItem />
      </main>
    </div>
  );
}

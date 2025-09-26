"use client"
import { useEffect, useState } from 'react';
import CartListItem from "@/components/CartList";
import Nav from "@/components/Navbar";

// state itu data yang bdisimpan di komponen dan bisa berubah
// props itu data yang dikirim dari parent ke child 

export default function Page() {
  const [products, setProducts] = useState([]);
  // cart: { [id]: qty }
  const [cart, setCart] = useState({});

  // 1) Ambil data produk dari API 
  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.com/products/", {
        cache: "no-store",
      });
      const data = await res.json();
      setProducts(data);
      // inisialisasi qty 0 untuk setiap produk (opsional)
      const init = {};
      data.forEach((p) => (init[p.id] = 0));
      setCart(init);
    })();
  }, []);

  // 2) Handler perubahan qty dari anak (Counter)
  const handleQtyChange = (id, qty) => {
    setCart((prev) => ({ ...prev, [id]: qty }));
  };

  // 3) Hitung total item & total harga (derivative dari state)
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = products.reduce(
    (sum, p) => sum + (cart[p.id] ?? 0) * p.price,
    0
  );

  return (
   <div className="min-h-screen bg-fuchsia-400">
      <Nav totalItems={totalItems} totalPrice={totalPrice} />

      <main className="mx-auto max-w-5xl px-4 py-6">
        <h2 className="mb-4 text-lg font-bold">Cart (props & state basic)</h2>

        {/* List cart: kirim products, cart, dan handler */}
        <CartListItem
          products={products}
          cart={cart}
          onQtyChange={handleQtyChange}
        />
      </main>
    </div>
  );
}

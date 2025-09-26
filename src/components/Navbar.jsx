"use client";

export default function Nav({ totalItems, totalPrice }) {
  return (
    <nav className="sticky top-0 z-10 bg-black border-b px-4 py-3">
      <div className="mx-auto max-w-5xl flex items-center justify-between">
        <h1 className="text-xl font-bold">Cart Demo</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </span>
          <div className="relative" aria-label="Cart items">
            <span className="text-2xl">🛒</span>
            <span className="absolute -right-2 -top-2 rounded-full bg-black px-2 text-xs font-bold text-white">
              {totalItems}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

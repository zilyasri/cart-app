import { create } from "zustand";

export const useCart = create((set, get) => ({
  // state
  products: [],      // data dari API
  cart: {},          // { [id]: qty }

  // actions
  setProducts: (list) =>
    set({
      products: list,
      cart: list.reduce((acc, p) => ((acc[p.id] = 0), acc), {}),
    }),

  setQty: (id, qty) =>
    set((s) => ({
      cart: { ...s.cart, [id]: Math.max(0, Math.floor(qty || 0)) },
    })),
  inc: (id) => set((s) => ({ cart: { ...s.cart, [id]: (s.cart[id] || 0) + 1 } })),
  dec: (id) =>
    set((s) => ({
      cart: { ...s.cart, [id]: Math.max(0, (s.cart[id] || 0) - 1) },
    })),

  clear: () => set({ cart: {} }),

  // derived getters
  totalItems: () => Object.values(get().cart).reduce((a, b) => a + b, 0),
  totalPrice: () =>
    get().products.reduce(
      (sum, p) => sum + (get().cart[p.id] || 0) * p.price,
      0
    ),
}));

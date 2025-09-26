"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CartRow from "@/components/CartRow";
import { useCart } from "@/store/cartStore";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function CartPage() {
  const products = useCart((s) => s.products);
  const cart = useCart((s) => s.cart);
  const totalPrice = useCart((s) => s.totalPrice());
  const clear = useCart((s) => s.clear);

  const lines = products.filter((p) => (cart[p.id] || 0) > 0);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-bold">My Cart</h1>
          <div className="flex items-center gap-3">
            {/* <Link href="/" className="text-sm text-emerald-700 hover:underline">← Continue shopping</Link> */}
            {lines.length > 0 && (
              <button onClick={clear} className="rounded-md border px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50">
                Clear cart
              </button>
            )}
          </div>
        </div>

        <Card className="overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Total</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {lines.length === 0 ? (
                <TableRow>
                  <td className="p-6 text-sm text-slate-500" colSpan={5}>
                    Cart is empty. <Link href="/" className="text-emerald-700 hover:underline">Add products</Link>
                  </td>
                </TableRow>
              ) : (
                lines.map((p) => <CartRow key={p.id} product={p} />)
              )}
            </TableBody>
          </Table>
        </Card>

        <div className="mt-6 grid sm:max-w-sm sm:ml-auto">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Sub total</span>
                <span className="font-semibold text-slate-900">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Shipping</span>
                <span className="font-semibold text-slate-900">$0.00</span>
              </div>
              <Separator className="my-3" />
              <div className="flex items-center justify-between text-base">
                <span className="font-bold text-slate-800">Total Amount</span>
                <span className="font-extrabold text-emerald-700">${totalPrice.toFixed(2)}</span>
              </div>
              {}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

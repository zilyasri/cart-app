"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Quantity({ value, onChange }) {
  const clamp = (n) => {
    const v = Number.isFinite(+n) ? Math.floor(+n) : 0;
    return Math.max(0, Math.min(99, v));
  };
  return (
    <div className="inline-flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="anim active:scale-95"
        onClick={() => onChange(clamp(value - 1))}
        aria-label="Decrease"
      >
        –
      </Button>
      <Input
        value={value}
        onChange={(e) => onChange(clamp(e.target.value))}
        inputMode="numeric"
        pattern="[0-9]*"
        className="h-9 w-16 text-center focus-visible:ring-emerald-500/40"
        aria-label="Quantity"
      />
      <Button
        variant="outline"
        size="icon"
        className="anim active:scale-95"
        onClick={() => onChange(clamp(value + 1))}
        aria-label="Increase"
      >
        +
      </Button>
    </div>
  );
}

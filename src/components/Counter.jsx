"use client";

export default function Counter({ value, onChange }) {
  const clamp = (n) => {
    const v = Number.isFinite(+n) ? Math.floor(+n) : 0;
    return Math.max(0, Math.min(99, v));
  };

  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={() => onChange(clamp(value - 1))}
        className="h-8 w-8 rounded-md border hover:bg-gray-100"
        aria-label="Decrease"
      >
        –
      </button>
      <input
        value={value}
        onChange={(e) => onChange(clamp(e.target.value))}
        inputMode="numeric"
        pattern="[0-9]*"
        className="h-8 w-14 rounded-md border text-center"
        aria-label="Quantity"
      />
      <button
        type="button"
        onClick={() => onChange(clamp(value + 1))}
        className="h-8 w-8 rounded-md border hover:bg-gray-100"
        aria-label="Increase"
      >
        +
      </button>
    </div>
  );
}

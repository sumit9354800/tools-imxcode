
"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  LoaderCircle,
  ShieldCheck,
} from "lucide-react";

type PurchasePanelProps = {
  productName: string;
  productSlug: string;
  price: number | null;
};

type PaymentMode = "checking" | "razorpay" | "demo";

export default function PurchasePanel({
  productName,
  productSlug,
  price,
}: PurchasePanelProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [paymentMode, setPaymentMode] =
    useState<PaymentMode>("checking");

  async function handleBuyNow() {
    setLoading(true);
    setError("");

    try {
      // Payment configuration API will be added in the next step.
      const response = await fetch("/api/payments/status", {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(
          "Payment setup is not ready yet. Please try again shortly.",
        );
      }

      const result = await response.json();

      if (result.mode !== "razorpay" && result.mode !== "demo") {
        throw new Error("The payment mode could not be determined.");
      }

      setPaymentMode(result.mode);

      // The order and checkout APIs will be connected next.
      // Do not mark an order as paid on the client.
      setError(
        result.mode === "razorpay"
          ? "Test checkout is being connected. Please try again after setup."
          : "Demo checkout is being connected. Please try again after setup.",
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-white/45">One-time purchase</p>

        <span className="rounded-full border border-[#7C8615]/30 bg-[#7C8615]/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider text-[#B8C56A]">
          Digital product
        </span>
      </div>

      <div className="mt-4">
        <p className="text-4xl font-semibold tracking-tight text-white">
          {price == null ? "Free" : `₹${price.toLocaleString("en-IN")}`}
        </p>

        <p className="mt-2 text-xs leading-6 text-white/40">
          {productName}
        </p>
      </div>

      <button
        type="button"
        onClick={handleBuyNow}
        disabled={loading}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#7C8615] px-5 text-sm font-semibold text-white transition hover:bg-[#929C22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8C56A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <LoaderCircle size={16} className="animate-spin" />
            Checking payment...
          </>
        ) : (
          <>
            Buy now
            <ArrowRight size={16} />
          </>
        )}
      </button>

      {error && (
        <p
          role="status"
          aria-live="polite"
          className="mt-4 rounded-xl border border-amber-400/20 bg-amber-400/[0.06] p-3 text-xs leading-5 text-amber-200/90"
        >
          {error}
        </p>
      )}

      <div className="mt-5 space-y-3 border-t border-white/10 pt-4">
        <p className="flex items-center gap-2 text-xs text-white/50">
          <ShieldCheck size={15} className="shrink-0 text-[#A5AF39]" />
          Server-verified payment flow
        </p>

        <p className="flex items-center gap-2 text-xs text-white/50">
          <CreditCard size={15} className="shrink-0 text-[#A5AF39]" />
          Test checkout or demo mode
        </p>

        <p className="flex items-center gap-2 text-xs text-white/50">
          <CheckCircle2 size={15} className="shrink-0 text-[#A5AF39]" />
          Secure access after verification
        </p>
      </div>

      <p className="mt-4 text-[10px] leading-5 text-white/30">
        Product: {productSlug}. No payment is confirmed by this button alone.
      </p>
    </section>
  );
}

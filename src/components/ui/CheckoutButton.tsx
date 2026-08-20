"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "./Button";
import { CHECKOUT_URL, trackInitiateCheckout } from "@/lib/tracking";

function CheckoutButtonInner({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const searchParams = useSearchParams();

  const url = React.useMemo(() => {
    if (!CHECKOUT_URL) return CHECKOUT_URL;
    try {
      const urlObj = new URL(CHECKOUT_URL);
      const utms = ['utm_source', 'utm_medium', 'utm_campaign'];
      let changed = false;
      utms.forEach(utm => {
        const val = searchParams?.get(utm);
        if (val) {
          urlObj.searchParams.set(utm, val);
          changed = true;
        }
      });
      return changed ? urlObj.toString() : CHECKOUT_URL;
    } catch {
      return CHECKOUT_URL;
    }
  }, [searchParams]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (!CHECKOUT_URL) {
      e.preventDefault();
      return;
    }
    trackInitiateCheckout();
  };

  if (!CHECKOUT_URL) {
    return (
      <div className="relative group inline-block" title="Checkout em configuração">
        <Button variant="primary" className={`opacity-70 cursor-not-allowed ${className}`} disabled>
          {children}
        </Button>
      </div>
    );
  }

  return (
    <Button as="a" href={url} onClick={handleClick} className={`inline-block ${className}`} aria-label="Ir para página de pagamento" variant="primary">
      {children}
    </Button>
  );
}

export function CheckoutButton(props: { children: React.ReactNode, className?: string }) {
  return (
    <Suspense fallback={<Button variant="primary" className={props.className} disabled>{props.children}</Button>}>
      <CheckoutButtonInner {...props} />
    </Suspense>
  );
}

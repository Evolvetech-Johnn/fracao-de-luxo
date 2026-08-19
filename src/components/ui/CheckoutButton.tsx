"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "./Button";
import { CHECKOUT_URL, trackInitiateCheckout } from "@/lib/tracking";

function CheckoutButtonInner({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const searchParams = useSearchParams();
  const [url, setUrl] = useState(CHECKOUT_URL);

  useEffect(() => {
    if (!CHECKOUT_URL) return;
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
      if (changed) setUrl(urlObj.toString());
    } catch(e) {
      // invalid base url fallback
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
    <a href={url} onClick={handleClick} className="inline-block" aria-label="Ir para página de pagamento">
      <Button variant="primary" className={className}>
        {children}
      </Button>
    </a>
  );
}

export function CheckoutButton(props: { children: React.ReactNode, className?: string }) {
  return (
    <Suspense fallback={<Button variant="primary" className={props.className} disabled>{props.children}</Button>}>
      <CheckoutButtonInner {...props} />
    </Suspense>
  );
}

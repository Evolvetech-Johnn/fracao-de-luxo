"use client";
import React from "react";
import { Button } from "./Button";
import { getWhatsAppLink, trackLead } from "@/lib/tracking";

export function WhatsAppButton({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const url = getWhatsAppLink();

  const handleClick = () => {
    trackLead();
  };

  return (
    <Button as="a" href={url} target="_blank" rel="noopener noreferrer" onClick={handleClick} className={`inline-block ${className}`} aria-label="Abrir link do WhatsApp" variant="secondary-whatsapp">
      {children}
    </Button>
  );
}

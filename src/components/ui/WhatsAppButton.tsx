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
    <a href={url} target="_blank" rel="noopener noreferrer" onClick={handleClick} className="inline-block" aria-label="Abrir link do WhatsApp">
      <Button variant="secondary-whatsapp" className={className}>
        {children}
      </Button>
    </a>
  );
}

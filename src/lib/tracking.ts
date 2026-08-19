export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
export const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || '';
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || '';

export const getWhatsAppLink = () => {
  const message = encodeURIComponent("Olá! Vim da página de fragrâncias e queria tirar uma dúvida.");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}&utm_source=lp_fracoes_luxo`;
};

export const trackLead = () => {
  if (typeof window !== "undefined") {
    if ((window as any).fbq) (window as any).fbq('track', 'Lead');
    if ((window as any).gtag) (window as any).gtag('event', 'whatsapp_click');
  }
};

export const trackInitiateCheckout = () => {
  if (typeof window !== "undefined") {
    if ((window as any).fbq) (window as any).fbq('track', 'InitiateCheckout');
    if ((window as any).gtag) (window as any).gtag('event', 'checkout_click');
  }
};

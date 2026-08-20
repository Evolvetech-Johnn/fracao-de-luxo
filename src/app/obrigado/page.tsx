"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function ObrigadoPage() {
  useEffect(() => {
    // Disparo do evento de conversão
    if (typeof window !== "undefined") {
      if (window.fbq) window.fbq('track', 'Purchase', { currency: "BRL", value: 0 }); // Atualizar valor via params se disponível no webhook
      if (window.gtag) window.gtag('event', 'purchase', { currency: "BRL", value: 0 });
    }
  }, []);

  return (
    <div className="min-h-screen bg-marfim text-carvao flex items-center justify-center">
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-display font-bold headline text-bordo">Pedido Confirmado!</h1>
            <p className="text-lg">
              Muito obrigado por escolher a Frações de Luxo. Seu pedido foi recebido e já estamos preparando sua fragrância com todo o cuidado.
            </p>
            <p className="text-lg">
              Você receberá as atualizações de envio no seu e-mail.
            </p>
            <div className="pt-8">
              <Button as="a" href="/" variant="primary">Voltar para a página inicial</Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

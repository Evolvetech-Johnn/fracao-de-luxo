import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { CheckoutButton } from "@/components/ui/CheckoutButton";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function HeroSection() {
  return (
    <Section bgColor="bg-bordo" className="text-marfim text-center">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <Reveal delay={0}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold headline leading-tight">
              O mesmo perfume do frasco original. Em 10ml.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-lg md:text-xl text-marfim/90">
              Fracionamos direto do frasco lacrado das grandes marcas, com entrega em Cambé e Londrina — você sente o perfume de verdade antes de decidir se vale o frasco cheio.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <div className="flex flex-col items-center">
                <CheckoutButton className="w-full sm:w-auto">Escolher minha fragrância</CheckoutButton>
                <span className="text-xs mt-2 text-marfim/70">Envio rápido • Fracionado na hora do pedido</span>
              </div>
              <div className="flex flex-col items-center">
                <WhatsAppButton className="w-full sm:w-auto text-marfim border-ambar hover:text-carvao">Tirar dúvida no WhatsApp</WhatsAppButton>
                <span className="text-xs mt-2 text-marfim/70">Resposta rápida • Sem compromisso</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

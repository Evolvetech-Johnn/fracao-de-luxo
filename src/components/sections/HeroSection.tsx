import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PerfumeBottle } from "@/components/ui/PerfumeBottle";

export function HeroSection() {
  return (
    <Section bgColor="bg-bordo" className="text-marfim">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="text-center md:text-left space-y-8 order-2 md:order-1">
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
              <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 pt-4">
                <div className="flex flex-col items-center md:items-start">
                  <Button as="a" href="/pedido" variant="primary" className="w-full sm:w-auto">Escolher minha fragrância</Button>
                  <span className="text-xs mt-2 text-marfim/70">Envio rápido • Fracionado na hora do pedido</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <WhatsAppButton className="w-full sm:w-auto text-marfim border-ambar hover:text-carvao">Tirar dúvida no WhatsApp</WhatsAppButton>
                  <span className="text-xs mt-2 text-marfim/70">Resposta rápida • Sem compromisso</span>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="order-1 md:order-2">
            <div className="flex justify-center">
              <PerfumeBottle className="w-32 md:w-48 text-ambar drop-shadow-[0_0_30px_rgba(200,154,84,0.25)]" />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export function CtaFinalSection() {
  return (
    <Section bgColor="bg-bordo" className="text-marfim text-center">
      <Container>
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold headline">
              Você já perdeu dinheiro com perfume que não combinou. Dessa vez, descubra antes de decidir.
            </h2>
            <div className="pt-4">
              <Button as="a" href="/pedido" variant="primary" className="text-lg px-8 py-4">Escolher minha fragrância agora</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

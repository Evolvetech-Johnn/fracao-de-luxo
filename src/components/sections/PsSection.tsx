import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function PsSection() {
  return (
    <Section bgColor="bg-marfim">
      <Container>
        <Reveal>
          <div className="max-w-2xl mx-auto text-center text-carvao/80">
            <p className="text-base">
              <strong>PS:</strong> frasco cheio é uma decisão de centenas de reais — decida depois de sentir de verdade, não antes. Comece com uma porção de 10ml e leve pra casa só a certeza, não o arrependimento.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

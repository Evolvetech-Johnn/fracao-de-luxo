import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function AberturaSection() {
  return (
    <Section bgColor="bg-marfim">
      <Container>
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-carvao">
            <p>
              Você já comprou um perfume caro e se arrependeu no primeiro dia? Aquele cheiro perfeito no shopping que, em casa, simplesmente não é você.
            </p>
            <p>
              A Frações de Luxo resolve isso: fracionamos perfumes originais em porções de 10ml, o suficiente pra semanas de uso, pra você decidir com o corpo — não com o testinho de papel da loja.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

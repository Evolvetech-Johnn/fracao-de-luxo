import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";

export function SolucaoSection() {
  return (
    <Section bgColor="bg-marfim">
      <Container>
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-lg text-carvao">
            <div className="flex justify-start">
              <Badge>Fracionamento Direto de Frasco Original</Badge>
            </div>
            <p>
              É pra isso que existe o <strong>Fracionamento Direto de Frasco Original</strong>: pegamos o perfume lacrado, exatamente como sai da fábrica da marca, e fracionamos em porções de 10ml — sem diluição, sem mistura, sem receita "parecida".
            </p>
            <p>
              Cada porção sai de um lote identificado, fracionada sob demanda no momento do seu pedido — não fica meses parada em estoque perdendo a nota de saída. Você recebe a fragrância genuína, na medida certa pra testar de verdade: no seu dia a dia, na sua temperatura corporal.
            </p>
            <p className="font-bold">
              Só depois disso — com a certeza na mão — você decide se investe no frasco cheio.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

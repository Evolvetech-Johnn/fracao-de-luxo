import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/Reveal";

export function DorSection() {
  const dores = [
    "Você já pagou caro num perfume que ficou esquecido na gaveta depois da primeira semana",
    "Testar no papelzinho da loja não mostra como o perfume reage na sua pele",
    "O vendedor sempre acha que \"combina muito com você\" — mesmo quando não combina",
    "Frasco de 100ml é um compromisso de meses (ou anos) com uma fragrância que você só sentiu por 5 minutos",
    "Comprar por indicação de influencer é apostar às cegas no que funciona no corpo de outra pessoa"
  ];

  return (
    <Section bgColor="bg-bordo" className="text-marfim">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8">
          <Reveal>
            <h2 className="text-2xl font-display font-bold headline">
              Comprar perfume de grife tem um problema que ninguém fala: você paga primeiro, sente depois.
            </h2>
          </Reveal>
          <StaggerContainer className="space-y-4">
            {dores.map((dor, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start">
                  <span className="text-ambar mr-3 font-bold">•</span>
                  <span>{dor}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </Section>
  );
}

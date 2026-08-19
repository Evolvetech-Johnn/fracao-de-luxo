import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { StaggerContainer, StaggerItem } from "@/components/motion/Reveal";

export function ObjecoesSection() {
  const objecoes = [
    {
      p: "Mas... e se não for original?",
      r: "Cada fracionamento sai direto do frasco lacrado da marca — não é réplica, não é similar, não é \"inspiração\". Se você não sentir que é a fragrância original, a gente resolve."
    },
    {
      p: "Mas... e se eu não gostar do cheiro?",
      r: "É exatamente por isso que existe a porção de 10ml. Você descobre isso gastando uma fração do preço do frasco cheio — não depois de já ter investido nele."
    },
    {
      p: "10ml dura quanto tempo?",
      r: "Dá pra várias semanas de uso, dependendo da frequência. É tempo suficiente pra você conhecer a fragrância de verdade, não só sentir o primeiro borrifo."
    },
    {
      p: "Por que não comprar o frasco direto?",
      r: "Porque frasco cheio é uma decisão de centenas de reais. Faz mais sentido confirmar que aquele perfume é o seu antes de fazer esse investimento — não depois."
    }
  ];

  return (
    <Section bgColor="bg-marfim">
      <Container>
        <StaggerContainer className="max-w-3xl mx-auto space-y-12">
          {objecoes.map((item, index) => (
            <StaggerItem key={index}>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-carvao">{item.p}</h3>
                <p className="text-lg text-carvao/80">{item.r}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}

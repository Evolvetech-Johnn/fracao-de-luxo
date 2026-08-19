import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/Reveal";

export function ProvaSocialSection() {
  const garantias = [
    "Fracionamento feito a partir do frasco lacrado — sem intermediário, sem diluição",
    "Cada porção identificada por marca, fragrância e lote de origem",
    "Fracionado sob demanda no momento do seu pedido, não estocado"
  ];

  return (
    <Section bgColor="bg-marfim">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <Reveal>
              <h3 className="text-xl font-display font-bold text-carvao headline">O que já garantimos hoje:</h3>
            </Reveal>
            <StaggerContainer className="space-y-4 text-carvao">
              {garantias.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start">
                    <Badge>✓</Badge>
                    <span className="ml-3 text-lg">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
          
          <Reveal>
            <div className="bg-gray-100 border border-dashed border-gray-300 p-8 text-center rounded">
              <p className="text-gray-500 italic">[INSERIR — depoimentos com nome e resultado específico, assim que os primeiros pedidos chegarem]</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-gray-100 border border-dashed border-gray-300 p-8 text-center rounded">
              <p className="text-gray-500 italic">[INSERIR — número de porções vendidas ou clientes atendidos, após os primeiros 30 dias]</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { StaggerContainer, StaggerItem } from "@/components/motion/Reveal";

export function BeneficiosSection() {
  const beneficios = [
    "Você testa o perfume por semanas, não por 5 minutos numa loja",
    "Você para de gastar em frascos que iam parar esquecidos na gaveta",
    "Você sente como a fragrância muda com o calor do seu corpo, não só o cheiro do papel",
    "Você pode ter 3, 4, 5 fragrâncias diferentes pelo preço de um único frasco",
    "Você compra o frasco cheio só quando tiver certeza absoluta",
    "Você leva o perfume pra bolsa ou mochila sem carregar o frasco grande"
  ];

  return (
    <Section bgColor="bg-bordo" className="text-marfim">
      <Container>
        <div className="max-w-4xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beneficios.map((beneficio, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-ambar mr-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg">{beneficio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </Section>
  );
}

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function GarantiaSection() {
  return (
    <Section bgColor="bg-bordo" className="text-marfim">
      <Container>
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <h2 className="text-2xl font-display font-bold headline">Garantia</h2>
            <p className="text-lg">
              Se o produto chegar com problema ou você tiver qualquer dúvida sobre a autenticidade da fragrância recebida, você fala com a gente e resolvemos — sem enrolação.
            </p>
            <div className="bg-marfim/10 border border-dashed border-marfim/30 p-4 inline-block mt-4 rounded">
              <p className="text-sm text-marfim/70 italic">[Nota pro time: definir política formal de troca/reembolso antes de publicar]</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

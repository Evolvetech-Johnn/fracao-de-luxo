import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion/Reveal";

export function FaqSection() {
  const faqs = [
    {
      q: "O perfume fracionado é original mesmo?",
      a: "Sim. Fracionamos direto do frasco lacrado da marca, sem diluição."
    },
    {
      q: "Quanto tempo dura uma porção de 10ml?",
      a: "Dá pra várias semanas de uso no dia a dia — tempo suficiente pra você decidir se é a fragrância certa pra você."
    },
    {
      q: "Posso montar meu próprio kit com fragrâncias diferentes?",
      a: "Sim, o Kit Descoberta vem com 5 fragrâncias à sua escolha."
    },
    {
      q: "Quais as formas de pagamento?",
      a: "Pix, cartão ou boleto, via Mercado Pago ou PagSeguro."
    },
    {
      q: "Vocês entregam em Cambé e Londrina?",
      a: "Sim — essa é a nossa região de atuação principal, com entrega rápida pra quem está aqui."
    },
    {
      q: "E se eu quiser o frasco cheio depois?",
      a: "Você pode comprar quando quiser — o fracionamento é justamente pra você decidir com segurança."
    }
  ];

  return (
    <Section bgColor="bg-marfim">
      <Container>
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl font-display font-bold text-carvao headline text-center">Perguntas Frequentes</h2>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <Accordion key={index} title={faq.q}>
                  <p>{faq.a}</p>
                </Accordion>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

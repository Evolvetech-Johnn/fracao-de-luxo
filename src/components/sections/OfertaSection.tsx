import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { CheckoutButton } from "@/components/ui/CheckoutButton";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PerfumeBottle } from "@/components/ui/PerfumeBottle";

export function OfertaSection() {
  return (
    <Section bgColor="bg-bordo" className="text-marfim" id="oferta">
      <Container>
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            <Reveal className="h-full">
              <div className="border border-rosa-antigo/30 p-8 rounded flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-display font-bold headline mb-4">Porção avulsa (10ml)</h3>
                  <PerfumeBottle className="w-10 h-auto text-rosa-antigo mb-4" />
                  <p className="text-xl font-bold mb-4">
                    R$ 120
                  </p>
                  <p>— escolha 1 fragrância</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="h-full">
              <div className="border border-ambar p-8 rounded bg-marfim/5 flex flex-col justify-between relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 bg-ambar text-carvao text-xs font-bold px-3 py-1 rounded-bl">
                  Melhor custo por fragrância
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold headline mb-4 text-ambar">Kit Descoberta (5 fragrâncias)</h3>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <PerfumeBottle key={i} className="w-6 h-auto text-ambar" />
                    ))}
                  </div>
                  <div className="space-y-2 mb-6">
                    <p className="text-2xl font-bold">
                      R$ 520
                    </p>
                    <p className="text-sm text-marfim/80">
                      (= R$ 104 cada — 13% mais barato que comprar avulso)
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>

          <Reveal>
            <div className="border-t border-rosa-antigo/20 pt-12 space-y-8">
              <h4 className="text-xl font-bold text-center">O que você recebe:</h4>
              <ul className="space-y-4 max-w-2xl mx-auto">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-ambar shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Perfume fracionado direto do frasco original lacrado
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-ambar shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Frasco de 10ml identificado com fragrância e lote
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-ambar shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Envio para Cambé, Londrina e região
                </li>
              </ul>

              <p className="text-center text-marfim/70">Pagamento via Pix, cartão ou boleto (Mercado Pago / PagSeguro)</p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <CheckoutButton className="w-full sm:w-auto text-lg px-8">Comprar agora</CheckoutButton>
                <span className="text-marfim/50 hidden sm:inline">ou</span>
                <WhatsAppButton className="w-full sm:w-auto text-marfim border-ambar hover:text-carvao">Tirar dúvida antes no WhatsApp</WhatsAppButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: 'Política de Privacidade | Frações de Luxo',
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-marfim text-carvao py-20">
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-display font-bold headline text-bordo mb-8">Política de Privacidade</h1>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mt-8">1. Coleta de Dados</h2>
              <p>
                Coletamos informações essenciais para o processamento do seu pedido e entrega, como nome completo, endereço de entrega, informações de contato (e-mail e telefone) e dados de pagamento (processados por gateways de pagamento seguros).
              </p>

              <h2 className="text-2xl font-bold mt-8">2. Finalidade</h2>
              <p>
                Os dados coletados são utilizados exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processamento e entrega dos seus pedidos;</li>
                <li>Comunicação sobre o status do pedido;</li>
                <li>Atendimento ao cliente via WhatsApp ou e-mail;</li>
                <li>Cumprimento de obrigações legais e fiscais.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8">3. Compartilhamento</h2>
              <p>
                Não vendemos ou repassamos seus dados para terceiros. Suas informações são compartilhadas apenas com os parceiros estritamente necessários para a operação (ex: transportadoras e processadores de pagamento).
              </p>

              <h2 className="text-2xl font-bold mt-8">4. Seus Direitos (LGPD)</h2>
              <p>
                Você tem o direito de solicitar o acesso, correção ou exclusão dos seus dados pessoais armazenados em nosso sistema a qualquer momento, entrando em contato conosco.
              </p>

              <h2 className="text-2xl font-bold mt-8">5. Contato</h2>
              <p>
                Para solicitações relacionadas à privacidade ou dúvidas, entre em contato através do nosso WhatsApp oficial disponibilizado no site.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

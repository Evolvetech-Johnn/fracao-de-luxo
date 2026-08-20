# Frações de Luxo — Auditoria do Projeto e Prompt de Correção/Deploy

Repositório analisado: `fracao-de-luxo` (commit atual, após o push).
Ferramentas usadas na análise: `npm install`, `npx tsc --noEmit`, `npx eslint .`, leitura de cada componente.

---

## O que já está certo

O `package.json` está na raiz do repositório, o `.gitignore` cobre `node_modules`, `.next`, `.env*` e `.vercel` corretamente. As 12 seções da copy estão todas implementadas e batendo com o texto da versão 3.0, sem paráfrase. A checagem de tipos (`tsc --noEmit`) passa limpa, sem nenhum erro.

O design system foi seguido com precisão nos pontos que mais importam: as cores, a escala tipográfica e os tokens de motion (duração de 400ms na entrada, easing `[0.22, 1, 0.36, 1]`, stagger de 80ms) estão exatamente como especificado. A Trilha do Perfume também está mais bem resolvida do que eu esperava: em desktop é a linha contínua ligada ao scroll, e em mobile vira um traço curto entre cada seção via pseudo-elemento no componente `Section`, que é justamente o comportamento pedido no design system, não uma simplificação que só esconde o elemento.

O `CheckoutButton` já propaga UTM da URL de entrada pro link de checkout e desabilita o botão com aviso quando a variável de ambiente não está configurada, em vez de deixar um link quebrado em produção. Isso é exatamente o que o Split 4 pediu.

---

## Por que o build vai quebrar no Vercel

O Next roda ESLint durante `next build` por padrão, e o `next.config.ts` do projeto não desativa isso. Rodei `npx eslint .` e o projeto tem **15 erros**, não avisos, erros. Um build com erro de lint não é opcional de corrigir depois, ele impede o deploy.

Os erros, agrupados:

**Estado sendo setado direto dentro de `useEffect`** (4 ocorrências: `Reveal.tsx` duas vezes, `TrilhaPerfume.tsx`, `CheckoutButton.tsx`). É o padrão usado pra evitar mismatch de hidratação com `prefers-reduced-motion` e `useSearchParams`, só que a versão atual do `eslint-plugin-react-hooks` marca isso como erro, não sugestão.

**`@ts-ignore` em vez de `@ts-expect-error`** em `Reveal.tsx`, linha 21. `@ts-ignore` silencia qualquer erro futuro naquela linha, mesmo que o erro mude ou suma. `@ts-expect-error` avisa se a linha parar de dar erro, o que é o comportamento certo aqui.

**Aspas retas dentro de JSX** em `SolucaoSection.tsx`, na palavra "parecida". Precisa virar entidade HTML.

**`window as any` em `tracking.ts`**, 8 ocorrências, pra acessar `fbq` e `gtag`. Precisa de uma declaração de tipo pra `window`, não `any`.

Nenhum desses é estrutural. Todos têm correção direta, só precisam ser feitos antes do próximo push.

---

## Problemas que o lint não pega, mas eu vi lendo o código

**Botão dentro de link.** `CheckoutButton.tsx` e `WhatsAppButton.tsx` renderizam `<a><Button/></a>`, e `Button` é um `<button>`. Isso é aninhamento inválido de HTML, elemento interativo dentro de elemento interativo, e navegadores e leitores de tela tratam isso de forma inconsistente. Precisa virar um único elemento: ou o `Button` aceita uma prop `as="a"` e renderiza `<a>` com a mesma aparência, ou o link vira o próprio elemento estilizado sem o `<button>` dentro.

**Foco removido sem substituto.** O `Accordion.tsx` tem `focus:outline-none` no botão do FAQ sem nenhum estilo de foco no lugar. Isso tira a navegação por teclado do usuário que depende dela, e o design system pede foco visível em todo elemento interativo.

**O "+" do FAQ só gira.** O design system pediu explicitamente que o símbolo mudasse, não só girasse, pra quem não percebe rotação. O componente atual só anima `rotate`, o caractere continua sendo "+" fechado ou aberto.

**Selo "Mais Escolhido" sem nenhuma venda ainda.** Em `OfertaSection.tsx`, o Kit Descoberta tem uma etiqueta "Mais Escolhido". O negócio ainda não vendeu nada, então essa é uma prova social inventada, exatamente o tipo de afirmação que a própria copy evita em todo o resto da página. Precisa sair ou virar algo que não implique dado que não existe (ex: "Melhor custo por fragrância", que é verificável pela própria estrutura de preço, não por comportamento de outros clientes).

---

## Páginas e itens que faltam no sistema

Hoje o projeto tem uma única rota, `src/app/page.tsx`. Falta:

- **Página de obrigado/confirmação pós-compra.** As notas técnicas da copy pedem o Pixel disparando numa thank-you page depois da conversão. Sem essa página, o evento de conversão real (compra completada) não tem onde disparar, só o clique no botão de checkout.
- **Política de privacidade.** Necessária por LGPD, e referenciada nas notas técnicas da própria copy por causa dos CTAs de WhatsApp e futuros formulários.
- **`robots.txt` e `sitemap.xml`.** O escopo original de desenvolvimento pedia SEO básico, e isso ainda não existe.
- **Metadados de Open Graph.** `layout.tsx` só tem `title` e `description`. Sem `openGraph` e uma imagem de compartilhamento, todo link da página rodando em anúncio do Meta Ads aparece sem preview, ou com preview genérico do Next.js.
- **Favicon e ícones de marca.** A pasta `public/` ainda só tem os SVGs padrão do Next.js (`next.svg`, `vercel.svg`, etc.), nenhum ativo da identidade visual da Frações de Luxo.

---

## Ajuste de configuração pro Vercel

O Next 16.3.1 exige Node 20.9 ou mais recente. O `package.json` não declara isso em `engines`. Não é um erro hoje, mas é o tipo de coisa que causa build quebrando silenciosamente se o ambiente de build usar uma versão mais antiga por padrão. Vale declarar explicitamente.

`next.config.ts` também não define `metadataBase`, o que faz o Next avisar (não quebrar, mas avisar) sobre URLs relativas de Open Graph sem uma base absoluta pra resolver.

---

## PROMPT PARA O ANTIGRAVITY

```
PROJETO: Frações de Luxo — Correção de build, acessibilidade e páginas faltantes

Corrigir, nesta ordem, e confirmar build limpo (npm run build sem erro de
lint nem de tipo) antes de cada push.

SPLIT A — CORRIGIR ERROS DE LINT QUE QUEBRAM O BUILD

1. Reveal.tsx e TrilhaPerfume.tsx e CheckoutButton.tsx: o padrão atual usa
   um estado "mounted" setado dentro de useEffect só pra evitar mismatch
   de hidratação com prefers-reduced-motion e com useSearchParams.
   Substituir por useSyncExternalStore (ou o hook equivalente da própria
   lib, se o Framer Motion expuser um) para ler prefers-reduced-motion sem
   precisar do padrão "mounted + setState no effect". Para o
   CheckoutButton, mover a leitura de searchParams e a montagem da URL com
   UTM pra dentro de um useMemo derivado de searchParams, sem setState
   solto no effect.

2. Reveal.tsx linha 21: trocar @ts-ignore por @ts-expect-error. Se o erro
   de tipo ainda existir depois da troca, corrigir a tipagem do objeto de
   transition em vez de suprimir.

3. SolucaoSection.tsx: trocar as aspas retas em torno de "parecida" por
   &quot;parecida&quot; (ou usar aspas tipográficas “ ” diretamente no
   texto).

4. tracking.ts: declarar um tipo pra window com fbq e gtag opcionais, em
   vez de (window as any). Exemplo de abordagem:
   declare global { interface Window { fbq?: (...args: unknown[]) => void; gtag?: (...args: unknown[]) => void; } }
   E então usar window.fbq e window.gtag diretamente, sem cast.

Rodar npx eslint . e npx tsc --noEmit depois dessas mudanças. Zero erros
antes de seguir pro próximo split.

SPLIT B — ACESSIBILIDADE E HTML VÁLIDO

1. CheckoutButton.tsx e WhatsAppButton.tsx: eliminar o aninhamento
   <a><button></a>. Ajustar o componente Button para aceitar uma variante
   que renderiza <a> em vez de <button> quando usado como link (prop
   "as" ou um componente LinkButton separado reaproveitando os mesmos
   estilos), mantendo href, target, rel e onClick funcionando igual.

2. Accordion.tsx: remover focus:outline-none sem substituto. Adicionar
   um estado de foco visível (ex: focus-visible:ring-2
   focus-visible:ring-ambar focus-visible:ring-offset-2), consistente com
   a cor de destaque do design system.

3. Accordion.tsx: o indicador de abrir/fechar não pode depender só da
   rotação. Trocar o "+" fixo por dois símbolos diferentes conforme o
   estado (ex: "+" fechado e "–" aberto), mantendo a transição de
   rotação como reforço visual, não como único sinal.

SPLIT C — REMOVER CLAIM SEM PROVA

Em OfertaSection.tsx, remover o selo "Mais Escolhido" do Kit Descoberta.
Se for necessário destacar esse card visualmente, usar uma chamada
verificável pela própria estrutura de preço (ex: "Melhor custo por
fragrância"), nunca uma alegação de comportamento de outros clientes
sem dado real por trás.

SPLIT D — PÁGINAS FALTANTES

1. Criar /obrigado (ou /thank-you) com uma mensagem de confirmação e o
   disparo do evento de conversão final do Pixel e do GA4, conforme as
   notas técnicas da copy. O link de checkout deve apontar pra essa
   página como retorno pós-pagamento, quando o provedor de pagamento
   suportar URL de retorno configurável.

2. Criar /politica-de-privacidade com o texto padrão de LGPD para
   e-commerce: quais dados são coletados (nome, contato, endereço de
   entrega), finalidade, e informação de contato para solicitações do
   titular dos dados.

3. Criar app/robots.ts e app/sitemap.ts (formato nativo do App Router do
   Next.js) cobrindo a home, a página de obrigado e a política de
   privacidade.

4. Adicionar metadados de Open Graph em layout.tsx: openGraph com title,
   description, url e uma imagem (1200x630) pensada pra aparecer em
   anúncio de Meta Ads e compartilhamento no WhatsApp. Se a imagem de
   marca ainda não existir, usar um placeholder com a paleta do design
   system (fundo Bordô, texto Âmbar) e sinalizar que precisa ser
   substituída por arte final antes de rodar tráfego pago.

5. Substituir o favicon padrão do Next.js por um ícone simples da marca
   (mesmo que provisório, usando a inicial "F" em Âmbar sobre Bordô),
   em /src/app/favicon.ico e nos demais tamanhos de ícone que o Next
   aceitar automaticamente.

SPLIT E — CONFIGURAÇÃO DE DEPLOY

1. Adicionar ao package.json:
   "engines": { "node": ">=20.9.0" }

2. Em next.config.ts, definir metadataBase apontando pra URL de produção
   do site (usar uma variável de ambiente NEXT_PUBLIC_SITE_URL se o
   domínio final ainda não estiver definido).

3. Conferir no painel do Vercel, ao conectar o repositório, que o "Root
   Directory" está configurado como a raiz do repositório (não precisa
   de ajuste manual, já que o package.json já está na raiz, mas
   confirmar visualmente na tela de configuração do projeto antes do
   primeiro deploy).

4. Cadastrar no painel do Vercel as variáveis de ambiente já previstas
   em .env.example: NEXT_PUBLIC_WHATSAPP_NUMBER,
   NEXT_PUBLIC_META_PIXEL_ID, NEXT_PUBLIC_GA4_ID,
   NEXT_PUBLIC_CHECKOUT_URL, e a nova NEXT_PUBLIC_SITE_URL do passo 2.

SPLIT F — VALIDAÇÃO FINAL ANTES DO DEPLOY

Rodar, nesta ordem, e só considerar pronto se todos passarem limpos:
1. npx tsc --noEmit
2. npx eslint .
3. npm run build (build completo, não só typecheck)

Depois do build local passar limpo, fazer o push e conectar (ou
redeployar) no Vercel. Confirmar o primeiro deploy de produção abrindo a
URL gerada, testando os dois CTAs (checkout e WhatsApp) e o accordion do
FAQ, em desktop e em uma tela de celular real ou emulada.
```

---

## Prioridade se o tempo for curto

Se não der pra rodar tudo de uma vez, a ordem que evita retrabalho é Split A antes de qualquer outro, porque é o único que decide se o Vercel aceita o build ou não. B e C são rápidos e resolvem risco de confiança (acessibilidade e claim falsa). D é o que mais leva tempo, mas pode subir num segundo deploy sem travar o primeiro. E é configuração pontual, quase não toma tempo.

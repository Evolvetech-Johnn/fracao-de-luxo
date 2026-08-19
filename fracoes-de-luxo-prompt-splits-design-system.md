# Frações de Luxo — Prompt de Desenvolvimento (Antigravity)

Documento único: design system + prompt dividido em splits. Copiar cada split separadamente pro Antigravity, validando um antes de liberar o próximo.

**Stack:** Next.js + TypeScript + Tailwind CSS + Framer Motion
**Fonte da copy:** `copy-lp-fracoes-de-luxo.md` (versão 3.0, já entregue)

---

## DESIGN SYSTEM

### Por que esse direcionamento

Perfume de luxo fracionado tem dois riscos visuais óbvios: parecer genérico (mais uma loja de e-commerce) ou parecer barato (por causa do "fracionado"). O sistema abaixo evita os dois padrões mais comuns de página gerada por IA hoje: fundo creme com sserifada de alto contraste e destaque terracota, ou fundo quase preto com um único acento neon. Em vez disso, a paleta parte de um lugar concreto: a cor do próprio produto. Vidro, âmbar líquido, o brilho fosco de um frasco fechado.

### Paleta

| Nome | Hex | Uso |
|---|---|---|
| Bordô Profundo | `#3B1220` | Fundo de seções de destaque (hero, oferta), texto sobre fundo claro em títulos grandes |
| Âmbar | `#C89A54` | Cor de ação. CTA primário, links, elemento de assinatura (trilha) |
| Marfim Fosco | `#F3EAE0` | Fundo padrão das seções de leitura |
| Carvão | `#241E1B` | Texto de corpo |
| Rosa Antigo | `#B98A93` | Acento secundário. Hover states, bordas, badges do FAQ |
| Verde Selo | `#4C5B45` | Único uso: selo de "originalidade garantida" e ícones de confirmação. Não usar como CTA |

Nenhum verde de WhatsApp aparece na paleta. O CTA de WhatsApp usa contorno em Âmbar com o ícone do WhatsApp em vez do verde padrão do app. O verde ali quebraria a unidade cromática da página inteira por causa de um único botão.

### Tipografia

- **Display** (headlines, nomes de fragrância): Cormorant Garamond. Serifa fina, alongada, com presença de gravação em frasco de perfume. Usar só em títulos grandes, nunca em corpo de texto.
- **Corpo e UI**: Manrope. Geométrica, limpa, legível em tela pequena.
- **Dados e preço**: Manrope Bold, com tracking levemente aberto (0.02em) para números e badges de oferta.

Escala tipográfica (mobile-first, valores em rem):
`0.75 / 0.875 / 1 / 1.25 / 1.75 / 2.5 / 3.5`

Line-height 1.6 no corpo, 1.15 em headlines grandes.

### Espaçamento

Escala fixa em px: `4 / 8 / 16 / 24 / 32 / 48 / 64 / 96`. Nenhum valor fora dessa escala entra no projeto, nem para ajuste fino de 2px.

### Elemento de assinatura: Trilha do Perfume

Uma linha fina em Âmbar que se desenha conforme o usuário rola a página, ligando o Hero à Oferta. Não é decoração solta: representa o percurso da copy, que é literalmente uma jornada de descoberta (dor, solução, prova, decisão). A linha nunca cruza texto, corre pela margem lateral em desktop e se recolhe para um traço curto entre seções em mobile. É o único elemento animado que persiste durante o scroll inteiro. Todo o resto da motion é local a cada seção.

### Componentes base

- **Botão primário** (checkout): fundo Âmbar, texto Carvão, sem sombra pesada. Único botão sólido da página.
- **Botão secundário** (WhatsApp): contorno Âmbar, fundo transparente, ícone de WhatsApp à esquerda do texto.
- **Card de FAQ**: accordion com borda inferior em Rosa Antigo, sem sombra, ícone de "+" que gira 45° ao abrir.
- **Badge de originalidade**: pílula pequena com ícone de selo (Verde Selo), usada nos blocos 6 e 8.

### Regra de contraste

Bordô Profundo (`#3B1220`) com Marfim Fosco (`#F3EAE0`) por cima passa em AA para texto grande e corpo. Carvão sobre Marfim passa em AAA. Nenhuma combinação com Rosa Antigo como fundo de texto corrido, só como borda ou acento pontual.

---

## SPLIT 0 — Setup do Projeto

```
PROJETO: Frações de Luxo — Landing Page

Criar projeto Next.js com TypeScript e Tailwind CSS. Instalar Framer Motion.

Estrutura de pastas:
/src
  /app
    page.tsx
    layout.tsx
  /components
    /ui        (botões, badges, accordion, container)
    /sections  (um componente por bloco da copy)
    /motion    (variantes de animação reutilizáveis, wrapper de scroll reveal)
  /lib
    (constantes de copy, links de checkout e WhatsApp, tracking)
  /styles
    globals.css

Configurar o tailwind.config com os tokens do design system (cores, escala
tipográfica, escala de espaçamento) como extensão do tema, não como classes
soltas espalhadas pelos componentes.

Variáveis de ambiente a prever em .env.example:
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_CHECKOUT_URL=

Entregar só a estrutura e configuração nesta etapa. Nenhuma seção de
conteúdo ainda.
```

---

## SPLIT 1 — Design System em Código

```
Implementar os tokens do design system como base reutilizável antes de
qualquer seção da página.

1. tailwind.config: cores (bordo, ambar, marfim, carvao, rosa-antigo,
   verde-selo), escala tipográfica e escala de espaçamento conforme
   documento de design system anexo.
2. Fontes: Cormorant Garamond (display) e Manrope (corpo/UI), carregadas
   via next/font, sem flash de fonte não estilizada.
3. Componentes em /components/ui:
   - Button (variant "primary" e "secondary-whatsapp", conforme
     especificação de componentes do design system)
   - Container (max-width consistente, padding lateral responsivo)
   - Section (wrapper com espaçamento vertical padronizado entre blocos)
   - Badge (para selo de originalidade)
   - Accordion (para o FAQ)
4. Não implementar animação nesta etapa. Só estrutura visual estática,
   já com as cores e tipografia corretas.

Critério de aceite: renderizar uma página de teste com um Button primário,
um secundário, um Badge e um Accordion, todos batendo com a paleta e
tipografia do design system.
```

---

## SPLIT 2 — Estrutura Estática da Página

```
Construir as 15 seções da landing page usando o conteúdo do arquivo
copy-lp-fracoes-de-luxo.md (versão 3.0), sem animação nesta etapa.

Mapeamento bloco da copy -> componente:

1. Hero (headline + subheadline + CTA primário + CTA WhatsApp)
2. Abertura / proposta de valor (texto corrido, 2 parágrafos)
3. Identificação da dor (bullets)
4. Apresentação da solução (texto + selo de originalidade)
5. Benefícios (grid de bullets, ícone simples por item)
6. Prova social (bloco "o que já garantimos hoje" + placeholders de
   depoimento visualmente diferenciados como "em breve")
7. Oferta (cards de porção avulsa e Kit Descoberta, lado a lado em
   desktop, empilhados em mobile, com os dois CTAs do bloco 9 da copy)
8. Quebra de objeções (4 perguntas em formato pergunta-resposta, não
   accordion, para ficar visível sem interação)
9. Garantia (bloco curto, texto de apoio)
10. FAQ (accordion, usando o componente do Split 1)
11. CTA final
12. PS / fechamento

Usar os textos exatamente como estão na copy. Não reescrever, resumir ou
parafrasear nenhum bloco. Onde houver [INSERIR ...], manter o placeholder
visível e sinalizado (ex: fundo levemente hachurado) para não publicar por
engano sem preencher.

Critério de aceite: rolar a página do topo ao fim, todo conteúdo da copy
presente, hierarquia visual correta (um CTA de destaque por seção, nunca
dois botões sólidos competindo no mesmo bloco).
```

---

## SPLIT 3 — Sistema de Animações (Framer Motion)

```
Implementar a camada de motion sobre a estrutura estática do Split 2.
Usar Framer Motion. Toda animação segue os tokens abaixo, sem valores
soltos por componente.

TOKENS DE MOTION
- Duração de entrada: 400ms
- Duração de saída: 250ms (saída sempre mais rápida que entrada)
- Easing de entrada: cubic-bezier(0.22, 1, 0.36, 1)
- Easing de saída: cubic-bezier(0.4, 0, 1, 1)
- Distância de translateY no scroll reveal: 24px
- Delay entre itens em stagger: 80ms

PADRÕES A IMPLEMENTAR

1. Hero (sequência orquestrada no load, não no scroll):
   headline entra primeiro, subheadline 150ms depois, CTA primário mais
   150ms depois, CTA WhatsApp junto do CTA primário. Fade + translateY,
   sem bounce, sem overshoot.

2. Scroll reveal por seção (blocos 2 a 12):
   cada seção entra com fade + translateY(24px -> 0) ao cruzar a viewport,
   usando whileInView com once: true. Não reanimar toda vez que o usuário
   rolar pra cima e pra baixo.

3. Stagger em listas (bullets dos blocos 3, 5 e 8):
   os itens da lista entram em sequência com o delay de 80ms entre eles,
   não todos de uma vez.

4. Trilha do Perfume (elemento de assinatura):
   linha em Âmbar (SVG path) que se desenha progressivamente conforme o
   scroll da página, do Hero até a seção de Oferta, usando useScroll e
   pathLength interpolado pelo progresso de rolagem. Em telas menores que
   768px, substituir por um traço curto e estático entre cada seção em vez
   do path contínuo, para não competir com o conteúdo em tela pequena.

5. Hover em CTA:
   scale 1.02 e leve brilho (box-shadow em Âmbar com opacidade baixa),
   150ms, sem mudança de cor de fundo abrupta.

6. Accordion do FAQ:
   altura animada na abertura/fechamento, ícone de "+" rotacionando 45°,
   225ms, sem attrs de easing diferentes dos tokens acima.

ACESSIBILIDADE DE MOTION
Verificar prefers-reduced-motion do usuário. Quando ativo, remover todo
translateY e a animação da Trilha do Perfume, mantendo só fade simples nas
transições. Nenhuma animação pode ser a única forma de o usuário perceber
uma mudança de estado (ex: o "+" do accordion precisa também mudar de
símbolo, não só girar, para quem não percebe rotação).

Critério de aceite: rolar a página inteira em desktop e mobile, nenhuma
seção "pisca" ou reanima ao rolar pra cima, a Trilha do Perfume acompanha
o progresso de leitura sem travar o scroll, e ativar prefers-reduced-motion
no navegador remove o movimento sem quebrar a leitura do conteúdo.
```

---

## SPLIT 4 — CTAs, Checkout, WhatsApp e Tracking

```
Ligar os CTAs da página aos destinos reais e configurar o tracking
especificado nas notas técnicas da copy.

1. CTA de checkout (blocos 4, 9 e 11): aponta para
   NEXT_PUBLIC_CHECKOUT_URL. Se a variável não estiver definida, o botão
   fica visualmente ativo mas desabilitado, com tooltip "Checkout em
   configuração", nunca um link quebrado em produção.

2. CTA de WhatsApp (blocos 4 e 9): link wa.me usando
   NEXT_PUBLIC_WHATSAPP_NUMBER, com mensagem pré-preenchida curta
   ("Olá! Vim da página de fragrâncias e queria tirar uma dúvida.") e
   parâmetro utm_source=lp_fracoes_luxo no link.

3. Meta Pixel: inicializar com NEXT_PUBLIC_META_PIXEL_ID. Disparar evento
   Lead no clique de qualquer CTA de WhatsApp e evento InitiateCheckout no
   clique do CTA de checkout.

4. GA4: inicializar com NEXT_PUBLIC_GA4_ID. Evento de conversão
   equivalente aos dois acima, nomeados de forma consistente
   (whatsapp_click e checkout_click).

5. UTM: todos os CTAs de checkout que vierem de campanha devem preservar
   os parâmetros utm_source, utm_medium e utm_campaign da URL de entrada
   até o link final de checkout.

Critério de aceite: clicar em cada CTA da página e confirmar no console
do navegador que o evento correspondente disparou, com o parâmetro
correto, antes do redirecionamento.
```

---

## SPLIT 5 — Responsividade, Acessibilidade e QA Final

```
Passagem final de revisão antes de considerar a LP pronta pra publicar.

CHECKLIST DE UI/UX
- Um único elemento de maior destaque por seção, nunca dois CTAs sólidos
  competindo no mesmo bloco
- Espaçamento só nos valores da escala definida no design system
- Contraste mínimo AA em todo texto, checar especialmente Carvão sobre
  Marfim e texto sobre o Bordô Profundo
- Nenhum ícone de biblioteca diferente misturado (usar uma única
  biblioteca de ícones do início ao fim)
- Nenhuma sombra pesada aplicada a card, botão e input ao mesmo tempo sem
  hierarquia entre elas
- Placeholder de input (se houver formulário) com contraste suficiente,
  nunca cinza claro sobre fundo claro

RESPONSIVIDADE
- Testar em 375px, 768px e 1440px de largura
- Oferta (bloco 9) empilhada em mobile, lado a lado a partir de 768px
- Trilha do Perfume em modo reduzido abaixo de 768px, conforme Split 3

ACESSIBILIDADE
- Navegação por teclado em todos os CTAs e no accordion do FAQ
- Foco visível em todo elemento interativo
- prefers-reduced-motion respeitado em todas as animações do Split 3

PERFORMANCE
- Fontes carregadas sem flash de conteúdo não estilizado
- Nenhuma imagem sem otimização (next/image em qualquer imagem de produto)

Critério de aceite: percorrer esta lista item por item contra a página
publicada em staging, marcando cada item como resolvido antes de liberar
para tráfego pago.
```

---

## Ordem de aprovação

Cada split é um pedido separado ao Antigravity. Validar o resultado de um
split antes de liberar o próximo, principalmente entre o Split 1 (design
system em código) e o Split 2 (conteúdo), porque qualquer ajuste de cor ou
tipografia feito depois do conteúdo pronto custa mais retrabalho do que
ajustar antes.

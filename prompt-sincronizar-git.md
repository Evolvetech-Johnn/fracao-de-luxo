# Prompt Antigravity — Sincronizar Pasta Local com o Git e Validar Estrutura

**Pasta local:** `d:\Evolvetech\Webdesign\Projetos\fracoes-de-luxo`
**Repositório remoto:** `https://github.com/Evolvetech-Johnn/fracao-de-luxo.git`
**Situação atual:** o remoto só tem um commit inicial com README. O código do
projeto existe na pasta local mas nunca foi enviado.

```
TAREFA: Diagnosticar a pasta local, sincronizar com o repositório remoto e
confirmar que a estrutura está pronta para deploy no Vercel, sem quebrar
nenhum build no processo.

PASSO 1 — INVENTÁRIO DA PASTA LOCAL
Antes de qualquer comando git, listar o conteúdo de
d:\Evolvetech\Webdesign\Projetos\fracoes-de-luxo e reportar:
- Existe package.json na raiz da pasta, ou o projeto está dentro de uma
  subpasta (ex: /app, /fracoes-de-luxo dentro da própria pasta)?
- Qual framework está configurado (confirmar Next.js e a versão)
- Existe pasta .git já inicializada nessa pasta?
- Existe .gitignore, e ele cobre node_modules, .next, .env e .env.local?
- Existem arquivos .env ou .env.local com credenciais reais que NÃO podem
  ir pro repositório?
- O projeto builda localmente sem erro nesse estado atual (rodar
  `npm run build` ou `pnpm build`/`yarn build`, conforme o gerenciador
  usado, e reportar o resultado completo, erro ou sucesso)?

Reportar esse inventário antes de seguir pro passo 2. Se o build falhar
aqui, resolver os erros de build ANTES de conectar com o git — não
sincronizar um projeto quebrado.

PASSO 2 — GIT NA PASTA LOCAL
Se não existir .git na pasta:
  git init
  git add .
  git commit -m "Estrutura inicial do projeto Frações de Luxo"

Se já existir .git na pasta local (projeto já versionado localmente, só
não conectado ao remoto certo):
  Reportar o remote atual configurado (git remote -v) antes de qualquer
  alteração, para não sobrescrever um histórico que já aponta pra outro
  lugar sem confirmar antes.

PASSO 3 — CONECTAR COM O REPOSITÓRIO REMOTO
O remoto já existe e tem 1 commit (README). A pasta local não conhece esse
commit, então um push direto vai ser rejeitado por histórico divergente.

  git remote add origin https://github.com/Evolvetech-Johnn/fracao-de-luxo.git
  (ou git remote set-url origin ... se o remote já existir apontando errado)

  git fetch origin

  git merge origin/main --allow-unrelated-histories -m "Merge histórico inicial do repositório"

Resolver qualquer conflito que aparecer (é esperado só o README.md
conflitar, na pior hipótese; manter o conteúdo mais completo).

PASSO 4 — VALIDAR NORMAS DO VERCEL
Antes de enviar, confirmar cada item:
- package.json está na RAIZ do repositório (não dentro de uma subpasta
  aninhada) — se estiver aninhado, ou mover os arquivos para a raiz, ou
  documentar isso para configurar "Root Directory" no painel do Vercel
- O script "build" existe no package.json e roda sem erro
  (confirmado no Passo 1)
- next.config.js/ts não tem nenhuma configuração incompatível com deploy
  serverless do Vercel (ex: output "export" se o projeto usa rotas
  dinâmicas ou API routes, o que quebraria funcionalidade)
- Node engine compatível: se o package.json define "engines", confirmar
  que bate com uma versão suportada pelo Vercel
- Variáveis de ambiente necessárias (NEXT_PUBLIC_WHATSAPP_NUMBER,
  NEXT_PUBLIC_META_PIXEL_ID, NEXT_PUBLIC_GA4_ID,
  NEXT_PUBLIC_CHECKOUT_URL) estão documentadas num .env.example
  atualizado, e NÃO estão hardcoded em nenhum componente
- .gitignore cobre node_modules, .next, .env, .env.local — confirmar que
  nenhum desses foi commitado por engano no Passo 2

Reportar cada item da lista como OK ou PENDENTE, com o que falta corrigir
em cada PENDENTE.

PASSO 5 — BUILD FINAL ANTES DO PUSH
Rodar novamente npm run build depois do merge do Passo 3, para garantir
que a integração do histórico não quebrou nada. Só seguir pro push se o
build passar limpo.

PASSO 6 — PUSH
  git push -u origin main

ENTREGA
Ao final, reportar:
1. O inventário completo do Passo 1
2. O que foi feito em cada passo (init, merge, ou ambos)
3. O checklist do Passo 4 preenchido
4. Confirmação de que o build passou antes do push
5. O link do commit no GitHub após o push
```

## Depois que isso rodar

Assim que o push for feito, me manda o link do repositório atualizado (ou
só avisa que foi) que eu clono de novo e sigo com a análise que você pediu:
revisão pela uiux-pro-max, checagem dos efeitos Framer Motion já
implementados, e o mapeamento das páginas que ainda faltam no sistema.

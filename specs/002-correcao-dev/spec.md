# 002 — Corrigir tela branca no desenvolvimento

Data: 2026-11-21 | Estado: consolidada

## Problema e evidência

O endereço `http://127.0.0.1:5173/` responde HTTP 200, mas o aplicativo não
monta. Reprodução em Chrome identifica `SyntaxError`: o módulo CommonJS
`fastdom/fastdom.js`, importado pelo Mermaid, não fornece o export `default`
esperado pelo navegador. A validação anterior cobriu o build de produção,
mas não executou o servidor de desenvolvimento recomendado no README.

## Justificativa Pareto (80/20): Por que este escopo entrega o maior impacto agora?

Corrigir a preparação de dependências no Vite para restaurar a leitura de todas
as páginas. Reutilizar a otimização nativa, preservar versões e evitar troca de
stack, novo renderer ou alterações de conteúdo. Verificar o modo que falhou.

## Entradas dos especialistas

- **Rafael / R-M01:** sem mudança de conteúdo financeiro; preservar termos e
  exemplos. Pareto: nenhum conceito adicional é necessário para corrigir a falha.
- **Helena / R-P01:** o aluno deve conseguir abrir início, orientação e modelos.
  Pareto: restaurar acesso à jornada atual, sem criar aulas novas.
- **Camila / R-R01:** preservar os modelos de simulação e controles existentes.
  Pareto: correção técnica sem alterar regras ou parâmetros de risco.
- **Lucas / R-E01:** títulos, texto e diagrama devem renderizar normalmente.
  Pareto: preservar a apresentação atual e documentar apenas a correção necessária.
- **Diego / R-I01:** preparar Mermaid e suas dependências CommonJS usando
  `vite.optimizeDeps.include`; confirmar a aplicação da opção no servidor real.
- **Diego / R-I02:** validar início, navegação, Mermaid e busca com `docs:dev`,
  além de manter o build e testes existentes aprovados.

As entradas representam revisão sequencial das perspectivas dos prompts locais.

## Critérios de aceite

- **A01:** no servidor de desenvolvimento, `/` monta conteúdo e não emite o
  erro de exportação CommonJS; não há exceções JavaScript nos fluxos testados.
- **A02:** Mermaid renderiza SVG; navegação para orientação e modelos funciona;
  busca por “checklist” encontra os modelos.
- **A03:** `npm run check` permanece aprovado, sem mudar dependências ou conteúdo.
- **A04:** registrar causa, correção e evidências; orientar recarregamento do
  navegador caso a sessão original conserve o módulo antigo em cache.

## Fora do escopo

Deploy, Docker, novas aulas, atualização de bibliotecas e reformulação visual.
Sem dúvidas bloqueantes para esta correção local.

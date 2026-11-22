# Validação — 003 Visuais obrigatórios

Data: 2026-11-21 | Responsável visual: Lucas Andrade

- As 11 páginas autorais têm Mermaid e parágrafo `Como ler`; o teste recursivo
  também contém fixture negativa para página sem representação.
- Camila e Rafael conferiram que os fluxos não removem gates de Demo, risco ou
  proteção. Helena aprovou relação visual com o objetivo e leitura móvel.
- Diego executou `npm.cmd run docs:build` e `npm.cmd test`: 8 testes aprovados.
- Chrome headless confirmou 11 SVGs renderizados; amostra móvel (390 px) ficou
  em 375 px de conteúdo, sem overflow e sem exceções JavaScript.

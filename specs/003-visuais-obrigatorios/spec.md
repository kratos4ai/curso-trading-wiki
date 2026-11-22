# 003 — Representação visual em todas as páginas didáticas

Data: 2026-11-21 | Estado: consolidada

## Problema e resultado

O usuário solicita que toda lição/página traga uma representação visual do
fluxo, cadeia, dinâmica ou relação principal. Hoje apenas duas das onze páginas
da Wiki têm diagramas. Tornar a exigência permanente e completar as existentes.

## Justificativa Pareto (80/20): Por que este escopo entrega o maior impacto agora?

Uma representação curta por página torna explícita a relação que o aluno
precisa compreender. Reutilizar Mermaid, tema e testes nativos; sem bibliotecas,
animações ou ilustrações decorativas. Preservar os dados financeiros e o escopo USD.

## Escopo e restrições

Abrange todas as páginas autorais publicadas de `docs/`, inclusive início,
índice, trilha, orientação, modelos, glossário e fontes, e todas as páginas
futuras. Não abrange metadados, Specs, perfis, README nem a página 404 gerada.
Emenda autorizada da constituição para 2.1.0. Padrão: diagrama Mermaid; gráficos,
mapas ou imagens anotadas também podem cumprir a exigência se tiverem descrição
acessível e explicação. Uma tabela de números isolada não substitui a representação.

## Rafael Mendes — Mercado

- R-M01: setas representam etapas ou relações explicadas no texto, sem inventar
  causalidade de preço, promessa de resultado ou parâmetro financeiro.
- Pareto: visualizar os conceitos já ensinados, sem ampliar o conteúdo técnico.
- Aceite A-M01: cálculos, hipóteses e fontes permanecem coerentes; revisão de
  relação entre unidade, contrato, risco e margem.
- Assinatura de papel: Rafael Mendes. Veto a relação técnica enganosa.

## Helena Costa — Pedagogia

- R-P01: cada representação esclarece o objetivo específico da página, com
  etapas, decisões ou relações legíveis, em posição próxima ao conceito.
- Pareto: um visual principal suficiente; não repetir um fluxo genérico em tudo.
- Aceite A-P01: as onze páginas têm visual próprio e parágrafo “Como ler”.
- Assinatura de papel: Helena Costa. Veto a visual ornamental ou sem conexão
  com a aprendizagem.

## Camila Rocha — Prática/Risco

- R-R01: fluxos que chegam à execução preservam Demo, cálculo e proteção;
  quando há gate, mostrar também não execução. Gráficos de rotina não autorizam ordens.
- Pareto: mostrar o ponto de interrupção quando a página tratar dessa decisão.
- Aceite A-R01: nenhum diagrama omite condição necessária apresentada no texto.
- Assinatura de papel: Camila Rocha. Veto a simplificação que retire proteção.

## Lucas Andrade — Editorial e responsabilidade visual

- R-E01: **responsável principal** pela exigência visual de toda página; escolhe
  formato e relação a representar, com revisão pedagógica de Helena.
- R-E02: ao menos uma representação por página, acompanhada imediatamente por
  **Como ler:** e explicação textual equivalente. Preferir Mermaid simples,
  rótulos curtos e direção adequada à leitura móvel. Imagens alternativas têm
  texto alternativo descritivo e o mesmo parágrafo de leitura.
- R-E03: atualizar AGENTS, constituição, perfil editorial, orquestrador, README
  e templates; preservar alvo de até 900 palavras por aula.
- Pareto: usar o menor diagrama que ensine a relação principal, sem ornamentação.
- Aceite A-E01: regra obrigatória rastreável desde a Spec até a revisão; nenhuma
  página sem visual; texto equivalente também nos dois diagramas existentes.
- Assinatura de papel: Lucas Andrade. Veto a página sem representação útil.

## Diego Silveira — Wiki/Infra

- R-I01: criar teste que descubra recursivamente as páginas didáticas e exija
  visual e explicação; quando Mermaid for usado, confirmar componente no HTML.
- R-I02: executar build/testes e conferir no Chrome os onze SVGs sem erros;
  verificar amostra móvel e preservar servidor existente.
- Pareto: Node nativo e Mermaid já instalado; sem mudar dependências ou Docker.
- Aceite A-I01: `npm run check` passa e uma página futura sem visual é rejeitada
  pela validação. Confirmar o teste negativo com exemplo temporário controlado.
- Assinatura de papel: Diego Silveira. Veto a cobertura limitada só às aulas atuais.

## Inventário visual

| Página | Representação principal |
| --- | --- |
| Início | Jornada do estudo à revisão, existente |
| Comece aqui | Preparar objetivo, percorrer módulo, guardar evidência |
| Trilha | Módulo disponível e sequência de etapas futuras planejadas |
| Modelos | Plano, checklist, elegibilidade, registro e revisão |
| Glossário | Mapa de relações entre preço, unidade, contrato, risco e margem |
| Fontes | Afirmação, fonte/ficha, conferência e liberação ou interrupção |
| Índice do módulo | Quatro aulas e suas entregas em cadeia |
| Aula 1.1 | Converter distância em ticks e resultado estimado em USD |
| Aula 1.2 | Preparar terminal, ambiente limpo e conferência após Demo |
| Aula 1.3 | Validar Demo/USD, orçamento, custos e volume ou não executar |
| Aula 1.4 | Ciclo da ordem protegida, existente |

## Gate e limites

Cinco entradas consolidadas; nenhum bloqueante. A exigência é uma emenda
expressa do usuário, não depende de aprovação adicional. Revisões dos papéis
são sequenciais; sem novas aulas, fatos financeiros ou publicação remota.

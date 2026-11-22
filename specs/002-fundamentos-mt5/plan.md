# Plano — 002-fundamentos-mt5

Data: 2026-11-21 | Entrada: [spec.md](spec.md)
**Assinaturas de papel: Diego Silveira e Helena Costa.**

## Gate de entrada

As cinco contribuições estão assinadas, hipóteses e vetos resolvidos. Criar
Tasks antes de alterar governança ou conteúdo. A implementação começa pelo
pivô, seguido da sequência de aulas especificada por Helena.

## Decisão Pareto

Usar páginas Markdown, tabela numérica hipotética, um diagrama e busca/sidebar
existentes. Nenhuma biblioteca, tela interativa ou automação de ordens nova.

## Execução sequencial e rastreabilidade

| Ordem | Entrega | Requisitos | Aceite | Responsáveis |
| --- | --- | --- | --- | --- |
| 1 | Constituição 2.0.0, AGENTS, README e perfis | G01–G04 | A-G01 | Diego, Rafael, Camila |
| 2 | Harmonizar artefatos anteriores, fontes e orientação | G02, R-I02 | A-G01 | Diego, Lucas |
| 3 | Aula 1.1: unidades e tabela | R-M01–05 | A-M01–02 | Rafael, Lucas |
| 4 | Aula 1.2: instalação, gráfico e One-Click | R-P01, R-R06 | A-P01, A-R01 | Helena, Camila |
| 5 | Aula 1.3: Demo, USD e risco | R-R01–03, R-R07 | A-R01 | Camila, Helena |
| 6 | Aula 1.4: mercado e proteção | R-R04–06, R-E03 | A-P01, A-R01, A-E01 | Rafael, Camila, Lucas |
| 7 | Índice do módulo, início, trilha, sidebar e consulta | R-I01–03 | A-P01, A-I01 | Diego, Lucas |
| 8 | Testes de tabela, aulas, escopo e indexação | R-I04–05 | Todos | Diego, Rafael |
| 9 | Navegador e relatório por especialidade | R-I05 | A-E01, A-I01 | Diego, Helena |

## Conteúdo e experiência

Pré-requisito inicial: aritmética básica e orientação de estudo. Publicar aulas
1.1–1.4 e índice em `docs/modulo-01/`. A 1.2 prepara, mas não executa ordens;
a 1.3 valida conta e cálculo; a 1.4 executa somente em Demo e com os gates.
Atualizar modelos para registrar equity, 1%, fonte do símbolo, SL/TP e incidente.
Busca deve encontrar “MetaTrader 5”, “Stop Loss”, “XAUUSD” e “Conta Demo”.

## Revisão cruzada e validação

- Rafael: recalcular a tabela e conferir hipóteses/unidades com documentação.
- Helena: verificar progressão e respostas dos exercícios, até 900 palavras/aula.
- Camila: testar o saldo fixo de USD 1000 × 1%, exemplo 0.04 lote e alternativa não operar.
- Lucas: resumo no topo, fontes datadas, links e equivalente textual do Mermaid.
- Diego: `npm.cmd run docs:build`, `npm.cmd test`, busca/âncoras e Chrome local
  em desktop/móvel; preservar correção anterior de desenvolvimento.

A varredura cobre textos autorais e HTML gerado; dependências e metadados Git
não são conteúdo didático editável. Registrar harmonização de artefatos antigos
para não confundir seu estado original com a nova governança.

## Publicação e recuperação

Entregar no repositório e no build local, sem commit/push ou deploy não solicitado.
Docker não muda, portanto não repetir teste indisponível de runtime. O guia
Easypanel existente permanece; homologação no MT5 e no domínio remoto depende
do ambiente do aluno/destino, sem alegação de conta aberta ou ordem executada.

## Gate para Tasks

Todas as entregas rastreiam à Spec. Nenhum veto aberto; seguir checklist com
P0 antes de P1. Qualquer alteração de hipótese exige atualizar Spec antes da aula.

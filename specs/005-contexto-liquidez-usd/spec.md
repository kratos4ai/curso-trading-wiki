# 005 — Módulo 02: Contexto e Liquidez em USD

Data: 2026-11-21 | Estado: consolidada

## Problema e resultado

Depois de concluir os fundamentos, o estudante precisa de uma primeira estratégia
simples antes de estudar detalhes. O Módulo 02 apresenta um único modelo —
**nível + confirmação + proteção** — e usa contexto, spread e liquidez somente
como filtros. A mesma Demo em USD 1.000 continua sendo usada; não há promessa de
direção nem autorização para conta real.

## Justificativa Pareto (80/20)

Quatro aulas cobrem o essencial: entender a estratégia em um fluxo, preparar um
nível no gráfico, aguardar confirmação e executar ou não executar com proteção.
Indicadores, múltiplos setups, robôs, MQL5, backtesting, ordens pendentes e conta
real ficam adiados até existir objetivo e evidência em nova Spec.

## [Rafael Mendes — Requisitos técnicos e mercado]

- R-M01: contexto é registro de período, preço Bid/Ask, spread, sessão e
  estrutura observada; não é previsão nem sinal.
- R-M02: conferir no MT5 a Especificação do símbolo, dígitos, ponto, stops level,
  volume mínimo/passo e sessões. Contratos e horários dependem do servidor.
- R-M03: liquidez, neste módulo, limita-se a spread, sessão e dados disponíveis.
  Depth of Market fica adiado; sua ausência não prova falta de liquidez.
- R-M04: usar somente US100, US500, US30, EURUSD, GBPUSD, USDJPY e XAUUSD;
  exemplos financeiros continuam hipotéticos e em USD.
- R-M05: a estratégia didática tem quatro passos: contexto favorável ou neutro,
  nível horizontal, confirmação visível e proteção definida. Sem os quatro, não
  há entrada.
- Aceite A-M01: o aluno diferencia observação, hipótese e execução e registra
  fonte/horário do dado.

**Assinatura de papel: Rafael Mendes — mecânica, fontes e veto de precisão.**

## [Helena Costa — Arquitetura pedagógica]

Sequência obrigatória:

1. **2.1 A estratégia em quatro passos:** nível + confirmação + proteção, com
   exemplo único e linguagem de hipótese.
2. **2.2 Contexto e nível:** comparar período amplo e janela de estudo, conferir
   spread/sessão e marcar um nível horizontal sem indicadores.
3. **2.3 Confirmação e risco:** aguardar fechamento coerente com a hipótese,
   definir invalidação, SL/TP e orçamento da Demo; sem confirmação, não executar.
4. **2.4 Prática guiada:** preencher ficha, decidir executar ou não executar,
   registrar resultado e revisar o que foi observado.

Cada aula tem objetivo observável, exercício, rubrica e próximo passo. Helena
veta exercício que induza previsão, opere sem pré-requisito ou não tenha resposta
conferível.

**Assinatura de papel: Helena Costa — progressão, carga cognitiva e rubricas.**

## [Camila Rocha — Protocolo prático e risco]

- R-R01: manter Demo USD 1.000, uma posição por vez, teto didático de 1% da
  equity, reserva de custos, SL/TP antes do envio e One-Click desligado.
- R-R02: nenhuma aula do Módulo 02 exige envio de ordem. O exercício pode
  terminar em não execução por spread, sessão fechada, dado ausente, volume ou
  proteção incompatível.
- R-R03: a ficha de contexto registra símbolo, horário do servidor, Bid, Ask,
  spread, fonte, hipótese, invalidação e motivo de parada.
- Aceite A-R01: uma condição ausente interrompe o fluxo e fica registrada; não
  se aumenta lote, alavancagem ou orçamento para contornar um gate.

**Assinatura de papel: Camila Rocha — controles, diário e veto de risco.**

## [Lucas Andrade — Padrão editorial e visual]

O índice e as quatro aulas terão resumo Pareto, uma representação Mermaid
específica e parágrafo imediato `**Como ler:**`. O visual principal do módulo
mostra o mesmo fluxo da estratégia; cada página destaca somente a relação que o
aluno precisa usar. Rótulos curtos, acessíveis e adequados a tela móvel; cada aula
permanece abaixo de 900 palavras.

**Assinatura de papel: Lucas Andrade — responsabilidade editorial visual.**

## [Diego Silveira — Wiki, SDD e build]

- R-I01: publicar `/modulo-02/` e quatro rotas filhas, com sidebar e links no
  início/trilha sem apresentar o módulo como execução real.
- R-I02: ampliar testes de rotas, busca, limite editorial e cobertura visual
  recursiva. `npm.cmd run check` é gate; Chrome confirma SVGs e amostra móvel.
- Aceite A-I01: build, testes e navegação passam sem dependências novas, Docker
  novo ou dados financeiros pessoais.

**Assinatura de papel: Diego Silveira — consolidação SDD e infraestrutura.**

## Critérios de aceite

- A-P01: cinco páginas do Módulo 02, quatro aulas na sequência e objetivos,
  exercícios, rubricas e fontes datadas.
- A-M01/A-R01: nenhum visual ou exemplo transforma contexto em promessa ou ignora
  os gates Demo USD 1.000, risco e proteção.
- A-E01: cada página tem visual relevante e `Como ler`, preservando o limite de
  900 palavras por aula.
- A-I01: `npm.cmd run check`, busca, links e validação no navegador aprovados.

## Fontes primárias previstas

- https://www.metatrader5.com/en/terminal/help/trading/market_watch
- https://www.metatrader5.com/en/terminal/help/charts_analysis/charts
- https://www.metatrader5.com/en/terminal/help/objects/lines
- https://www.mql5.com/en/docs/constants/environment_state/marketinfoconstants

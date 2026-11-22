# 002-fundamentos-mt5 — Módulo 01

Data: 2026-11-21 | Estado: concluída localmente | Modelo: `.specify/templates/spec-template.md`

## Problema, aluno e resultado observável

Um iniciante precisa interpretar unidades e custos, preparar o MetaTrader 5
Desktop, configurar uma conta Demo em USD e registrar uma ordem a mercado com
Stop Loss (SL), Take Profit (TP) e risco estimado de no máximo 1% na simulação.
Evidência final: ficha do símbolo, ambiente limpo, checklist Demo e diário de
execução protegida, ou registro fundamentado de não execução.

## Justificativa Pareto (80/20): Por que este escopo entrega o maior impacto agora?

Unidades, especificação do contrato, conta pequena e proteção antes da entrada
eliminam confusões que impedem a primeira prática consciente. Somente quatro
aulas, tema/busca/Mermaid existentes e testes dos números publicados. Ficam fora:
setups, indicadores, robôs, programação MQL5, ordens pendentes, backtesting,
conta real, seleção de corretora e recomendações de investimento.

## Escopo, emenda e restrições

- G01: emenda expressamente autorizada: constituição 2.0.0, AGENTS, README e
  perfis passam a limitar o curso a **USD**, índices globais **US100, US500,
  US30**, Forex **EURUSD, GBPUSD, USDJPY** e ouro **XAUUSD**.
- G02: todos os arquivos autorais, inclusive artefatos anteriores, serão
  harmonizados ao escopo. Referências a mercados retirados não serão preservadas
  nos textos. Históricos harmonizados recebem nota de emenda; não alterar vendor
  ou metadados Git. Regerar o site para remover conteúdo antigo do artefato.
- G03: moeda de conta, risco, custos, margem e resultados: USD. Unidades do
  contrato e moedas nativas de cotação continuam tecnicamente identificadas;
  USDJPY exige conversão de resultado para USD, sem orçamento em outra moeda.
- G04: usar exatamente o diretório solicitado. `002-correcao-dev` é uma rodada
  técnica já existente, preservada; o slug completo identifica este incremento.
- Plataforma: MT5 Desktop para Windows; menus podem variar com versão/idioma e
  servidor. Sem abrir conta ou operar em nome do usuário.
- A emenda de governança faz parte desta Spec/Plan/Tasks e será a primeira
  implementação, antes das aulas. Assim o pivô também respeita Spec-First.

## [Rafael Mendes — Requisitos Técnicos]

- R-M01: identificar contratos oferecidos pelo servidor, inclusive sufixos.
  US100/US500/US30 podem ser CFDs sobre índices: o nome não define uma
  especificação universal nem equivale à posse do índice.
- R-M02: definir pip (EURUSD/GBPUSD: 0.0001; USDJPY: 0.01), ponto MT5
  (`SYMBOL_POINT`), tick de preço (`SYMBOL_TRADE_TICK_SIZE`), valor de tick e
  spread Ask − Bid. Não supor ponto = pip = tick. Tick de cotação também pode
  designar uma atualização; distinguir os dois sentidos.
- R-M03: conferir tamanho do contrato, moeda de lucro/margem, modo de cálculo,
  digits, tick, volume mínimo/passo e níveis mínimos de proteção na Especificação.
  Fórmula estimativa em USD: `distância / tick × valor_tick_1_lote_USD × lotes`.
  Se valores compra/venda diferirem, usar o pertinente ao lado/perda. Método do
  servidor e conversão prevalecem; `OrderCalcProfit` é referência documental,
  não uma tarefa de programação para o aluno.
- R-M04: publicar a tabela abaixo como **cenário hipotético**, não como ficha
  real de corretora. Hipóteses: EURUSD contrato 100000 unidades-base/lote,
  cotação 1.10000, ponto/tick 0.00001, movimento-base 1 pip = 0.0001;
  US100 contrato equivalente a USD 1 por ponto de índice/lote, cotação 20000,
  ponto/tick 0.1, movimento-base 1.0; XAUUSD contrato 100 onças troy/lote,
  cotação 3000, ponto/tick 0.01, movimento-base 1.00 USD/onça.
  Para a tabela apenas: volume mínimo/passo 0.01 e margem linear nocional/100.

| Símbolo | Lote | Exposição-base | USD/movimento-base | USD/tick | Nocional USD | Margem USD |
| --- | --- | --- | --- | --- | --- | --- |
| EURUSD | 0.01 | 1000 | 0.10 | 0.01 | 1100 | 11 |
| EURUSD | 0.10 | 10000 | 1.00 | 0.10 | 11000 | 110 |
| EURUSD | 1.00 | 100000 | 10.00 | 1.00 | 110000 | 1100 |
| US100 | 0.01 | 0.01 | 0.01 | 0.001 | 200 | 2 |
| US100 | 0.10 | 0.10 | 0.10 | 0.01 | 2000 | 20 |
| US100 | 1.00 | 1.00 | 1.00 | 0.10 | 20000 | 200 |
| XAUUSD | 0.01 | 1 | 1.00 | 0.01 | 3000 | 30 |
| XAUUSD | 0.10 | 10 | 10.00 | 0.10 | 30000 | 300 |
| XAUUSD | 1.00 | 100 | 100.00 | 1.00 | 300000 | 3000 |

- R-M05: margem é garantia, não perda máxima; alavancagem altera margem, não o
  resultado por movimento de uma posição de mesmo tamanho. Regimes de margem
  por símbolo podem divergir da razão de conta. Não recomendar 1:100: é somente
  uma hipótese aritmética da tabela. Valores subcentavos podem sofrer arredondamento.
- Pareto: uma tabela e uma fórmula; sem catálogo de contratos ou indicadores.
- Veto: Rafael bloqueia números apresentados como universais, fonte inexistente
  ou confusão entre preço, exposição, margem e risco. Resolvido por hipóteses
  explícitas e ficha real obrigatória antes do exercício.
- Aceites A-M01/A-M02: tabela de nove linhas recalculável; definições e ressalvas
  presentes, com fontes primárias datadas.

**Assinatura de papel: Rafael Mendes — requisitos e precisão técnica.**

## [Helena Costa — Arquitetura Pedagógica]

- R-P01: sequência obrigatória: **1.1 Terreno em dólar → 1.2 MT5 essencial →
  1.3 Demo realista → 1.4 Ordem a mercado e proteção**. A instalação em 1.2
  permite inspeção; execução aguarda a configuração Demo e checklist da 1.3.
- R-P02: objetivos: 1.1 distinguir pip/ponto/tick e calcular custo; 1.2 localizar
  símbolo/ficha e salvar gráfico limpo; 1.3 confirmar Demo/USD e calcular 1%;
  1.4 dimensionar, preencher SL/TP, executar somente se elegível e auditar registro.
- R-P03: cada aula traz pré-requisito, exercício, resposta/rubrica e próximo link.
  Não execução por restrição do servidor é resultado correto, não reprovação.
  Sem cotações na 1.2, o reconhecimento da interface é offline; após criar a
  Demo na 1.3, conferir símbolos e concluir o layout. Não antecipar abertura de
  conta ou exigir cotações antes de ensinar a configuração.
- Cortes Pareto: sem análise técnica, personalização extensa, múltiplos gráficos,
  ordens pendentes, linguagem de programação ou conta real.
- Veto: Helena bloqueia exercício que dependa de conteúdo não ensinado ou que
  confunda completar o módulo com estar apto a arriscar dinheiro real.
- Aceite A-P01: quatro aulas completas, encadeadas e com objetivos verificáveis.

**Assinatura de papel: Helena Costa — sequência e avaliação de aprendizagem.**

## [Camila Rocha — Protocolo Prático & Risco]

- R-R01: conta exclusivamente Demo, USD, saldo inicial fixo de USD 1000. Esse
  único saldo aproxima a escala do estudante e deve ser usado em toda a aula.
  Se o servidor não oferecer esse parâmetro, interromper configuração e buscar
  suporte Demo; não substituir silenciosamente por saldo maior.
- R-R02: teto didático por trade = 1% do capital líquido atual em USD; no início,
  USD 1000 → USD 10. Não é parâmetro universal nem perda garantida.
  Manter uma posição por vez e incluir comissão estimada e reserva de slippage.
- R-R03: distância = entrada executável até SL; se usar Ask de entrada e Bid
  de saída para compra, o spread já está nessa distância, não somar de novo.
  Volume máximo teórico = `(orçamento − reserva) / perda_1_lote_até_SL`;
  arredondar para baixo ao passo. Se abaixo do mínimo, não executar.
- R-R04: caso hipotético: equity 1000, reserva 2, EURUSD Ask 1.10020/Bid
  1.10000, SL 1.09820, TP 1.10420, contrato da tabela. Distância 20 pips;
  perda/lote 200; volume 0.04; perda bruta 8 + reserva 2 = 10 USD;
  marcação inicial −0,80 USD antes de comissão. TP de 40 pips serve apenas ao
  exercício aritmético. Não usar essas cotações como ordem atual.
- R-R05: SL/TP válidos obrigatórios **antes do envio**, conferidos na posição
  após execução. Se servidor não aceitar proteção junto à entrada, não abrir.
  Se, por falha, a posição surgir sem proteção, tentar encerramento imediato e
  registrar incidente; se não conseguir, interromper e acionar suporte Demo.
- R-R06: One-Click é explicado, mas permanece desabilitado neste módulo para
  entradas. O painel padrão pode enviar sem SL/TP. Usar F9/Nova Ordem; nenhuma
  promessa de proteção automática. Stops podem sofrer gaps/slippage; TP não
  garante resultado. Não confundir disponibilidade de margem com risco permitido.
- R-R07: explicar que USD 100000 altera a escala do treino: 1% = USD 1000,
  cem vezes o orçamento da conta-base. É uma distorção pedagógica possível,
  não uma afirmação psicológica universal. Não repor saldo para apagar perdas.
- Pareto: uma posição, uma memória de cálculo, um checklist e um diário.
- Veto: Camila bloqueia entrada sem proteção, exemplo com custos omitidos ou
  arredondamento para cima. Resolve conflito One-Click/SL/TP mantendo entradas
  One-Click desabilitadas e indicando não operação quando necessário.
- Aceite A-R01: três orçamentos e caso-base corretos; checklist e critérios de
  interrupção explícitos; sem envio de ordens pela Wiki.

**Assinatura de papel: Camila Rocha — protocolo de simulação e veto de risco.**

## [Lucas Andrade — Padrão Editorial & Visual]

- R-E01: quatro páginas em português, cada uma inicia com callout “Resumo
  Pareto”, seguido de objetivo/pré-requisito, conceito, exemplo, exercício,
  conferência, fontes datadas e próximo passo. Até 900 palavras por aula.
- R-E02: tabela unificada da 1.1 compara os três mercados e três volumes;
  indicar convenção decimal do MT5 e separar hipóteses de valores do servidor.
- R-E03: Mermaid na 1.4: Demo → especificação/cálculo → proteção válida?
  → não enviar ou mercado → verificar preenchimento → monitorar/encerrar → diário.
  Incluir ramo para ausência inesperada de proteção e equivalente textual.
- Pareto: somente tabela e diagrama que explicam decisões; sem imagens decorativas.
- Veto: Lucas bloqueia texto que oculte hipótese, callout ambíguo ou diagrama
  sem equivalente textual. Acesso móvel deve preservar tabela legível com rolagem.
- Aceite A-E01: estrutura e extensão verificáveis; links e glossário coerentes.

**Assinatura de papel: Lucas Andrade — clareza e apresentação acessível.**

## [Diego Silveira — Critérios de Aceite Wiki & Build]

- R-I01: rotas `docs/modulo-01/index.md`, `1-1-terreno-usd.md`,
  `1-2-mt5-essencial.md`, `1-3-conta-demo.md`, `1-4-ordem-mercado.md`.
- R-I02: sidebar com grupo Módulo 01 e links das quatro aulas; início, trilha,
  orientação, glossário, fontes e modelos refletem o escopo e módulo disponível.
- R-I03: preservar `optimizeDeps.include: ['mermaid']`, lockfile, Docker e tema.
  Build deve falhar em links quebrados; índice deve conter todas as novas rotas.
- R-I04: adaptar testes existentes e adicionar verificação dos números reais
  da tabela Markdown, estrutura das aulas, orçamentos e restrição de escopo.
  `npm test` executará os arquivos `*.test.mjs`, mantendo os testes anteriores.
- R-I05: rodar `npm.cmd run docs:build`, `npm.cmd test`, checar HTML/âncoras e
  navegador no modo dev: páginas, busca, Mermaid e menu móvel. Sem instalação
  de novas dependências ou execução remota.
- Pareto: aproveitar Node nativo, VitePress e testes existentes.
- Veto: Diego bloqueia rota sem indexação, build quebrado ou alegação de teste
  não executado. Publicar significa integrar ao código/artefato local; VPS não
  foi configurada e não será anunciada como publicada.
- Aceite A-I01: build e todos os testes passam; ausência de referências excluídas
  nos arquivos autorais e no HTML regenerado; evidências em `validation.md`.

**Assinatura de papel: Diego Silveira — integração e validação técnica.**

## Fontes sensíveis ao tempo

Consulta: **2026-11-21**. Hipóteses numéricas são próprias do exercício, não
cotações obtidas dessas fontes.

- [Especificações de símbolos no MT5](https://www.metatrader5.com/en/terminal/help/trading/market_watch).
- [Propriedades de símbolos](https://www.mql5.com/en/docs/constants/environment_state/marketinfoconstants).
- [Abertura Demo](https://www.metatrader5.com/en/terminal/help/startworking/acc_open).
- [Ordens e SL/TP](https://www.metatrader5.com/en/terminal/help/trading/performing_deals).
- [One-Click](https://www.metatrader5.com/en/terminal/help/trading/one_click_trading).
- [Gráficos](https://www.metatrader5.com/en/terminal/help/charts_advanced/charts_settings).
- [OrderCalcProfit](https://www.mql5.com/en/docs/trading/ordercalcprofit) e
  [OrderCalcMargin](https://www.mql5.com/en/docs/trading/ordercalcmargin).
- [Download oficial](https://www.metatrader5.com/en/download).

## Cenários de aceite e rastreabilidade

| ID | Dado / Quando / Então | Evidência |
| --- | --- | --- |
| A-G01 | Ao aplicar o pivô, governança e conteúdo autoral usam somente o escopo USD | Busca de termos e revisão |
| A-M01–02 | Ao recalcular nove linhas e unidades, resultados coincidem com as hipóteses | Teste da tabela e revisão Rafael |
| A-P01 | Ao seguir 1.1–1.4, cada exercício depende somente dos anteriores | Links e rubricas |
| A-R01 | Ao calcular 1% e volume, não exceder orçamento estimado nem enviar sem SL/TP | Testes e revisão Camila |
| A-E01 | Ao abrir aulas, resumo, fontes, exercício e sequência aparecem | Teste estrutural e navegador |
| A-I01 | Ao compilar e buscar o módulo, rotas existem e índice encontra SL/TP | Build, testes e navegador |

## Dúvidas, conflitos e gate da Spec

Resolvidos: valores dependentes de servidor serão hipóteses rotuladas; não será
inventada ficha real. One-Click permanece desligado para entradas. 1% aplica-se
somente à simulação deste módulo. Pivô autorizado sobrepõe escopo anterior e
requer atualização explícita dos perfis/constituição. Sem veto aberto para Plan.
As assinaturas são dos papéis editoriais assumidos, não de pessoas externas.

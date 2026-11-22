# 006 — Diário de bordo leve para prática e avaliação

Data: 2026-11-21 | Estado: consolidada

## Problema e resultado

Os Módulos 01 e 02 já produzem fichas e decisões, mas o estudante precisa de
um único controle de bordo para conectar prática, resultado e revisão. O
incremento cria uma página curta e uma planilha XLSX reutilizável, com cálculos
automáticos básicos e sem exigir tecnologia nova.

## Pareto e limites

Registrar somente o que muda a próxima decisão: contexto, nível, confirmação,
risco, decisão, resultado, regra seguida e aprendizado. Sem API de corretora,
cotação automática, indicadores, gráficos de desempenho ou coleta de dados
pessoais. A planilha serve à Demo USD 1.000 e não prova vantagem futura.

## [Camila Rocha — controle prático e risco]

- C-R01: uma linha por tentativa ou não execução; Demo USD 1.000, equity,
  orçamento de 1%, reserva, SL/TP e volume devem ser registráveis.
- C-R02: resultado líquido = resultado bruto − custos; não preencher custo ou
  risco por adivinhação.
- C-R03: não execução possui motivo; não apagar perdas nem alterar o passado.
- Aceite A-C01: a planilha impede que uma decisão sem registro seja tratada como
  evidência de estratégia.

**Assinatura de papel: Camila Rocha — responsável pelo controle de risco.**

## [Rafael Mendes — campos técnicos]

- R-M01: campos mínimos: data/hora do servidor, aula, símbolo/sufixo, contexto,
  nível, confirmação, decisão, equity, orçamento, reserva, SL/TP, volume,
  resultado bruto, custos, resultado líquido, regra e motivo.
- R-M02: resultados permanecem em USD; contrato, ponto, tick e custos são
  conferidos na ficha do servidor quando necessários.
- Aceite A-M01: fórmulas não inventam cotação, contrato ou margem.

**Assinatura de papel: Rafael Mendes — precisão dos dados.**

## [Helena Costa — processo de aprendizagem]

- P-P01: preencher em dois momentos curtos: antes da prática e depois da
  decisão; não transformar o diário em redação.
- P-P02: revisão de um bloco de registros busca aderência ao processo antes de
  buscar lucro. Um registro não conclui nada.
- Aceite A-P01: o estudante consegue preencher uma linha em poucos minutos e
  explicar sua próxima ação a partir do resumo.

**Assinatura de papel: Helena Costa — carga cognitiva e evidência.**

## [Lucas Andrade — padrão editorial e visual]

A página de controle terá um fluxo visual **antes → decisão → depois → revisão**,
instruções curtas, link direto para o XLSX e explicação `**Como ler:**`. A tabela
de campos permanece legível em tela pequena; a planilha é o artefato operacional.

**Assinatura de papel: Lucas Andrade — clareza do controle de bordo.**

## [Diego Silveira — Wiki e validação]

- I-I01: publicar `docs/pratica/diario-bordo.md` e o ativo público
  `docs/public/pratica/diario-bordo.xlsx`, integrar
  os links nos Módulos 01 e 02 e manter a rota de consulta.
- I-I02: validar fórmulas, download do XLSX, busca, visual e limite
  editorial. Não adicionar dependência.
- Aceite A-I01: `npm.cmd run check` passa e o XLSX é entregue no build.

**Assinatura de papel: Diego Silveira — integração e gates de build.**

## Critérios de aceite

- A-C01/A-M01: campos de decisão e risco estão presentes, com resultado líquido
  e resumo automáticos.
- A-P01: página explica preenchimento antes/depois e revisão sem sobrecarga.
- A-E01: visual útil, `Como ler`, link de download e referência nos módulos.
- A-I01: build, testes, busca e artefato XLSX aprovados.

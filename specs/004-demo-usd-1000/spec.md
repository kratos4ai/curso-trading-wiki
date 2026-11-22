# 004 — Conta Demo do Módulo 01 fixada em USD 1.000

Data: 2026-11-21 | Estado: consolidada

## Resultado

O Módulo 01 configura e utiliza uma única conta Demo em USD com saldo inicial
de USD 1.000. A escolha aproxima a escala dos exercícios da realidade do
estudante; não há faixa alternativa nem reposição de saldo para apagar perdas.

## [Camila Rocha — responsável por prática e risco]

- A conta deve ser Demo, denominada em USD e iniciada exatamente com USD 1.000.
- O teto didático inicial é 1% da equity: USD 10, com reserva de custos e
  slippage; a ordem só segue com SL/TP e volume compatíveis.
- Se servidor, mínimo, proteção ou dados não forem compatíveis, registrar e não
  executar. One-Click permanece desligado para entradas.

## [Rafael Mendes — revisão técnica]

Os exemplos de 1.3 e 1.4 usam equity USD 1.000, orçamento USD 10 e hipóteses
devidamente identificadas. A ficha do símbolo do servidor continua soberana para
recalcular volume, margem e custos; nenhum número didático é universal.

## [Helena Costa — revisão pedagógica]

1.3 configura a Demo e calcula o teto; 1.4 aplica a memória de cálculo. O
exercício final usa apenas USD 1.000 e mantém a decisão de não executar quando
uma condição faltar.

## [Lucas Andrade — revisão editorial]

Atualizar resumo, tabelas, checklist, links e representações visuais para não
sugerir faixa de saldo. Preservar o limite de 900 palavras por aula.

## [Diego Silveira — aceite Wiki e build]

Rotas existentes permanecem; testes devem rejeitar a antiga faixa e confirmar o
saldo único. `npm.cmd run docs:build` e `npm.cmd test` são gates de aceite.

## Critérios de aceite

- [x] Não há referência ativa a saldo alternativo ou a faixa de saldos.
- [x] Aula 1.3 instrui saldo fixo USD 1.000 e calcula USD 10 de 1%.
- [x] Aula 1.4 usa o mesmo saldo em todos os números do caso.
- [x] Testes, build e Mermaid no navegador aprovados.

# Validação — 005 Estratégia simples em USD

Data: 2026-11-21 | Estado: aprovado

## Contribuições e vetos

| Especialista | Entrega | Resultado |
| --- | --- | --- |
| Rafael Mendes | Fluxo nível → confirmação → proteção; spread, sessão e ficha do servidor | Sem promessa de direção; Depth of Market adiado e sem inferência quando ausente |
| Helena Costa | Quatro aulas curtas com objetivos, exercícios e rubricas | Estratégia aparece na 2.1; detalhes só entram como filtros necessários |
| Camila Rocha | Demo USD 1.000, 1%, SL/TP, One-Click desligado e não execução | Nenhuma aula exige ordem; gate incompleto termina em registro |
| Lucas Andrade | Mermaid específico e `Como ler` em índice e aulas | 5 páginas do Módulo 02 com visual; aulas abaixo de 900 palavras |
| Diego Silveira | Rotas, sidebar, busca, testes e navegador | 16 páginas autorais renderizadas; sem dependências novas |

## Evidências

- `npm.cmd run check`: build VitePress aprovado e 11 testes aprovados.
- Chrome headless: 16/16 páginas com SVG Mermaid e `Como ler`; sem exceções.
- Amostra móvel a 390 px: conteúdo 375 px, sem overflow, em `/modulo-02/`,
  `2-1-estrategia-simples` e `2-4-pratica-guiada`.
- As páginas de prática, glossário e fontes foram conferidas no navegador e
  conectam explicitamente os entregáveis dos Módulos 01 e 02.
- A revisão curta do Módulo 01 corrigiu o texto histórico sobre a antiga faixa
  de saldo; o protocolo ativo permanece Demo USD 1.000.

## Fontes consultadas

As aulas apontam para documentação primária do MetaTrader 5 e MQL5 sobre Market
Watch, gráficos, linhas, configuração Bid/Ask, propriedades do símbolo e
Depth of Market, consultada em 2026-11-21.

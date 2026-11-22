# Validação — 007 Repetição controlada

Data: 2026-11-21 | Estado: aprovado

| Especialista | Contribuição | Resultado |
| --- | --- | --- |
| Camila Rocha | Bloco fixo, Demo USD 1.000, risco didático de 1%, SL/TP, parada e registro de não execução | As aulas preservam os gates do Módulo 02 e proíbem ajustar a regra para recuperar perda |
| Rafael Mendes | Campos mínimos para comparar tentativas em USD | Alvo, sufixo, período, custos, horário, resultado e aderência entram no Diário |
| Helena Costa | Sequência curta: preparar, registrar, revisar e fechar | Cada aula tem ação, entrega, rubrica e próximo passo sem relatório extenso |
| Lucas Andrade | Ciclo visual e linguagem sem promessa | As cinco páginas têm Mermaid e `Como ler`; 10 registros são marco pedagógico |
| Diego Silveira | Rotas, sidebar, busca, testes e build | Módulo publicado em `/modulo-03/` com quatro aulas filhas e continuidade do XLSX |

## Evidências

- `npm.cmd run check`: build VitePress aprovado e 16 testes aprovados.
- O build entrega `modulo-03/index.html` e as quatro aulas, com busca local indexando as cinco rotas.
- O teste visual recursivo confirma visual relevante e `Como ler` em todas as 22 páginas autorais.
- O servidor local respondeu 200 nas cinco rotas do módulo e no Diário de bordo;
  Chrome headless confirmou o texto `Como ler` e Mermaid renderizado em SVG.
- O Módulo 03 aponta para o mesmo fluxo do Módulo 02 e para o [Diário de bordo XLSX](../../docs/pratica/diario-bordo.md), sem criar uma segunda planilha.

## Próximo passo

Executar o primeiro bloco de 10 registros comparáveis. Só depois revisar aderência,
lacunas de dados e necessidade real de aprofundamento; nenhuma nova estratégia é
introduzida neste incremento.

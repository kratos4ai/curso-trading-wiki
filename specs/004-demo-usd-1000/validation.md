# Validação — 004 Conta Demo USD 1.000

Data: 2026-11-21 | Estado: aprovado

| Especialista | Contribuição | Resultado |
| --- | --- | --- |
| Camila Rocha | Protocolo de Demo, teto de 1%, reserva e não execução | USD 1.000 fixos; USD 10 de teto inicial; caso recalculado para 0,04 lote |
| Rafael Mendes | Conferência das hipóteses de EURUSD, spread, margem e unidades | Sem alteração na tabela de instrumentos; números do caso explicitamente hipotéticos |
| Helena Costa | Progressão 1.3 → 1.4 e exercício compatível com a escala do estudante | Configuração precede execução; exercício usa USD 1.000 |
| Lucas Andrade | Redação, checklist e consistência editorial | Faixa removida de páginas ativas; resumo e fontes preservados |
| Diego Silveira | Testes, build e navegador | `npm.cmd run check`: build aprovado e 8 testes aprovados; Chrome: 11/11 SVGs e amostra móvel sem overflow |

## Evidência matemática

No cenário publicado: equity USD 1.000, orçamento de 1% USD 10, reserva USD 2,
perda por lote USD 200, volume 0,04, perda bruta USD 8 e total estimado USD 10.
O spread inicial de dois pips é aproximadamente USD 0,80; margem USD 44 e
margem livre simplificada USD 955,20.

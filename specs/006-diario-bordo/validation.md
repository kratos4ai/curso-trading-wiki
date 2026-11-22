# Validação — 006 Diário de bordo

Data: 2026-11-21 | Estado: aprovado

| Especialista | Contribuição | Resultado |
| --- | --- | --- |
| Camila Rocha | Campos de decisão, risco, custos e não execução | Uma linha por tentativa; perdas e paradas permanecem registradas |
| Rafael Mendes | Unidades, USD e fórmulas mínimas | Orçamento 1% e resultado líquido calculados sem inventar cotação |
| Helena Costa | Preenchimento antes/depois e revisão curta | Processo estimado em poucos minutos, sem redação excessiva |
| Lucas Andrade | Página, fluxo visual e clareza do controle | Página com Mermaid, `Como ler` e link direto para a planilha |
| Diego Silveira | Ativo público, integração, testes e build | XLSX entregue no artefato; rotas e busca aprovadas |

## Evidências

- `npm.cmd run check`: build VitePress aprovado e 13 testes aprovados.
- `docs/public/pratica/diario-bordo.xlsx` é copiado para
  `docs/.vitepress/dist/pratica/diario-bordo.xlsx`.
- Chrome headless confirmou o Diário de bordo, modelos, glossário e fontes com
  Mermaid renderizado, sem overflow; o XLSX foi baixado pelo servidor local e
  contém abas e fórmulas de orçamento e resultado líquido.
- Módulos 01 e 02 apontam para o Diário de bordo; a planilha é o artefato de
  continuidade para os próximos módulos.

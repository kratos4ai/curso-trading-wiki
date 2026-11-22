# Instruções globais — Curso de Trading

## Escopo definitivo — emenda 2.1.0 (visuais obrigatórios)

Curso 100% em **USD**: índices globais **US100, US500, US30**, Forex
**EURUSD, GBPUSD, USDJPY** e metais **XAUUSD (ouro)**. Não adicionar mercados
fora dessa lista. Contas, risco, custos, margem e resultados são expressos em
USD; identificar unidades contratuais e moedas nativas de cotação sem confundir
cotação com moeda da conta. Os símbolos e sufixos dependem do servidor MT5.

Módulo 01: somente conta Demo em USD, saldo inicial fixo de USD 1000, teto
didático de risco estimado de 1% do capital líquido por trade, custos incluídos,
uma posição por vez e SL/TP válidos antes do envio. Não é recomendação universal.
One-Click permanece desabilitado para entradas; se proteção inicial ou tamanho
mínimo compatível não forem possíveis, não executar. SL não garante preço/perda.

## Leitura e ordem obrigatórias

Leia `.specify/memory/constitution.md` e os artefatos do incremento ativo em
`specs/NNN-nome/`. Para **toda** aula, módulo, correção, funcionalidade ou mudança
de infraestrutura, siga **Spec → Plan → Tasks → Implementação → Validação**.
Não implemente primeiro nem produza especificações retroativas.

1. Na Spec, recolha requisitos, escopo, restrições e critérios de aceite de
   **Rafael, Helena, Camila, Lucas e Diego**. Mesmo uma mudança técnica recebe as
   cinco perspectivas; uma área sem impacto registra justificativa explícita.
2. Em toda iteração, cada perspectiva aplica Pareto: impacto no aluno, menor
   escopo útil, como verificar e o que cortar/postergar. 80/20 é uma heurística,
   nunca uma alegação estatística ou promessa financeira.
3. Consolide `spec.md`; resolva dúvidas bloqueantes. Derive `plan.md` e só então
   `tasks.md`, com IDs rastreáveis e prioridades P0/P1 por impacto.
4. Execute as tarefas. Se o escopo mudar, atualize Spec, Plan e Tasks antes do
   trabalho dependente. Valide os aceites e registre evidências e lacunas reais.

Não exigir aprovação adicional de rotina: um pedido de incremento autoriza o
trabalho local reversível necessário. Decisões bloqueantes devem ser esclarecidas.

## Equipe nominal

Os nomes identificam perspectivas de trabalho, não pessoas reais. Ao ser
convocado, leia o prompt correspondente antes de produzir sua entrada na Spec.

| Nome | Prompt |
| --- | --- |
| Rafael Mendes | `prompts/equipe/rafael-trading.md` |
| Helena Costa | `prompts/equipe/helena-pedagogia.md` |
| Camila Rocha | `prompts/equipe/camila-risco-pratica.md` |
| Lucas Andrade | `prompts/equipe/lucas-editorial.md` |
| Diego Silveira | `prompts/equipe/diego-sdd-devops.md` |
| Orquestrador de Incremento | `prompts/equipe/orquestrador-incremento.md` |

Os papéis podem ser executados sequencialmente. Não presumir autorização para
subagentes, publicação remota ou mensagens a terceiros por invocar um nome.

## Conteúdo e revisão

- Português brasileiro, exemplos acionáveis e pré-requisitos explícitos.
- Risco antes da execução. Não prometer lucro, transformar simulação em prova
  de vantagem ou prescrever parâmetros universais de risco/alavancagem.
- Conferir fatos financeiros em fontes primárias (bolsas, reguladores,
  especificações de contratos) com URL e data. Distinguir dados reais,
  históricos e exemplos hipotéticos. Não universalizar contrato, tick ou margem
  de símbolos do MT5; conferir a Especificação do servidor antes de praticar.
- Toda aula: objetivo mensurável, resumo prático, exemplo, exercício, critério
  de conclusão, fontes e próximo passo. Alvo de até 900 palavras.
- **Toda página didática de `docs/`, atual ou futura, deve ter uma representação
  visual** do fluxo, cadeia, dinâmica ou relações do tema. Lucas Andrade responde
  pela escolha e qualidade; Helena Costa valida a aprendizagem; Diego Silveira
  verifica cobertura/renderização. Preferir Mermaid; mapas, gráficos ou imagens
  anotadas também são possíveis. Tabela isolada não basta. Cada visual é seguido
  de `**Como ler:**` com texto equivalente; imagens têm texto alternativo.
  Lucas veta página sem visual útil. Inclui início, índices, trilha e consulta.
- Reutilizar navegação, busca e callouts nativos. Evitar indicadores redundantes,
  plugins ornamentais, abstrações especulativas e aulas fora do incremento.
- O [Diário de bordo](docs/pratica/diario-bordo.md) é o controle contínuo dos
  módulos. Reutilize sua planilha e seus campos; não crie controles paralelos
  sem justificativa em Spec. A revisão prioriza consistência do processo antes
  de resultado financeiro.

Cada especialista veta entregas que violem seus aceites: Rafael, precisão;
Helena, pré-requisitos; Camila, proteção/risco; Lucas, clareza; Diego, build e
evidências. Registrar motivo e resolução na Spec/validação antes de concluir.

## Verificação técnica

Stack: VitePress estável, Mermaid, Nginx e Docker multi-stage, porta interna 80.
Instalação: `npm ci`. Verificação: `npm run check` (build e smoke tests).
Desenvolvimento: `npm run docs:dev`. Não desabilitar verificação de links quebrados.
Para mudanças no container, executar o roteiro Docker do README quando houver
daemon. Não marcar Docker, navegador ou deploy como aprovados sem execução.

Não versionar `node_modules/`, saída de build, credenciais ou diários reais de
alunos. O contexto Docker inclui apenas arquivos necessários ao site. Alterações
de dependências devem atualizar `package-lock.json` e passar por SDD.

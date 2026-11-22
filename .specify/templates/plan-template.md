# Plano — [NNN Incremento]

Data: [AAAA-MM-DD] | Spec: [spec.md](spec.md)

## Gate de entrada

[Cinco entradas consolidadas, justificativa Pareto e bloqueantes resolvidas.
Registrar decisão de avançar e quem/perspectiva a revisou.]

## Decisão Pareto e abordagem mínima

[O que reutilizar, menor entrega útil, dependências necessárias e alternativas
descartadas. Não introduzir requisitos novos sem atualizar a Spec antes.]

## Execução sequencial e rastreabilidade

| Ordem | Arquivo/entrega | Requisitos da Spec | Aceites | Dependência |
| --- | --- | --- | --- | --- |
| 1 | [entrega P0] | [R-...] | [A-...] | [pré-requisito] |
| 2 | [próxima entrega] | [R-...] | [A-...] | [etapa 1] |

## Conteúdo e experiência

[Objetivo, pré-requisitos, exercício, modelo acionável, página/rota, posição no
menu, links de glossário e palavras que devem ser encontradas na busca.]

[Inventário visual obrigatório: página → relação principal → formato → posição
→ texto “Como ler”. Responsável Lucas; revisão Helena; precisão Rafael/Camila;
renderização Diego. Incluir todas as páginas didáticas afetadas.]

## Revisão cruzada e validação

- Rafael: [precisão, contexto e fontes primárias datadas].
- Helena: [ordem, objetivo e evidência de aprendizagem].
- Camila: [cálculos/hipóteses, limites, custos e não operação].
- Lucas: [clareza, extensão, links e equivalente textual de diagramas].
- Diego: [`npm run check`, navegação/busca; Docker se afetado].

## Publicação e recuperação

[Branch/commit a publicar, destino Easypanel, porta 80, `/healthz`, verificação
pós-deploy e commit anterior para rollback. Sem acesso, registrar pendência.]

## Riscos e limites

[Risco concreto, mitigação, o que não foi testado e gatilho de reavaliação.]

## Gate para Tasks

[Cada entrega rastreia à Spec; definir dependências e só então criar tasks.md.]

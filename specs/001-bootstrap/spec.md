# 001 — Bootstrap do Curso de Trading

Data: 2026-11-21 | Estado: especificação consolidada para implementação

Nota de emenda: terminologia harmonizada ao escopo definitivo da constituição
2.0.0 por solicitação de `002-fundamentos-mt5`; resultados de validação desta
rodada continuam sendo os do bootstrap.

## Objetivo e escopo

Preparar um repositório para desenvolver um curso prático de scalping e day trade
em índices globais, Forex e metais, com conta em USD, Wiki em português e
publicação por Docker no Easypanel. Esta rodada entrega a fundação; as aulas
operacionais serão especificadas em incrementos próprios.

## Justificativa Pareto (80/20): Por que este escopo entrega o maior impacto agora?

Uma trilha clara, busca local, regras de autoria, modelos reutilizáveis e um único
container permitem começar a produzir e publicar conteúdo com pouco atrito.
80/20 é um filtro de priorização, não uma promessa de rentabilidade ou uma
estatística sobre perdas. Não entram login, banco de dados, CMS, analytics,
gamificação, execução de ordens, cotações ao vivo nem aulas completas.

## Entradas oficiais dos especialistas

São perspectivas editoriais consolidadas neste artefato, não pareceres de pessoas
reais nem evidência de execução paralela de agentes.

### Rafael Mendes — Mercado

- R-M01: a trilha distingue índices US100/US500/US30, Forex
  EURUSD/GBPUSD/USDJPY e ouro XAUUSD; símbolos dependem do servidor.
- R-M02: nenhum parâmetro contratual, horário, resultado histórico ou caso real
  será inventado. Aulas futuras exigem fonte primária, data e contexto de mercado.
- Aceite A01: escopo dos mercados explícito na trilha, com aulas futuras marcadas
  como planejadas e sem setups ou promessas de lucro nesta rodada.

### Helena Costa — Pedagogia

- R-P01: sequência risco e ambiente de simulação → mecânica de mercado → leitura
  de contexto → execução simulada → revisão; pré-requisitos e evidências visíveis.
- R-P02: o aluno consegue localizar início, trilha e modelos em até dois cliques.
- Aceite A02: páginas iniciais indicam o que fazer agora, o que entregar e qual
  será o próximo passo; módulos planejados não aparecem como aulas concluídas.

### Camila Rocha — Prática/Risco

- R-R01: disponibilizar modelos preenchíveis de plano, checklist e diário para
  simulação, com custos, slippage, invalidação e decisão de não operar.
- R-R02: não prescrever percentuais universais, alavancagem ou passagem automática
  para conta real. Resultados simulados não demonstram desempenho futuro.
- Aceite A03: os três modelos existem, incluem limites definidos antes da sessão
  e não contêm recomendações de ativos ou valores reais.

### Lucas Andrade — Editorial

- R-E01: português brasileiro, conclusão prática no início, títulos descritivos,
  links relativos, glossário pequeno e padrão reutilizável para futuras aulas.
- R-E02: alvo de até 900 palavras por aula; dividir páginas que excedam esse alvo
  sem justificativa. Diagramas sempre têm uma explicação textual equivalente.
- Aceite A04: ao menos um callout e um diagrama Mermaid funcionais, glossário
  cruzado e conteúdo inicial sem dependência de imagens ou fontes externas.

### Diego Silveira — Wiki/Infra

- R-I01: seis prompts invocáveis por nome e AGENTS.md com SDD e Pareto obrigatórios.
- R-I02: constituição, templates Spec/Plan/Tasks e artefatos desta rodada rastreáveis.
- R-I03: site responsivo, menu por jornada, busca indexada local, build que falha
  em links internos quebrados e dependências fixadas em lockfile.
- R-I04: Docker multi-stage, servidor estático, porta interna documentada,
  healthcheck, resposta 404 correta e guia Git/Easypanel com rollback.
- R-I05: CI valida o build sem publicar. Distinguir teste local, Docker e deploy.
- Aceite A05: todos os arquivos obrigatórios completos, sem comandos fictícios
  apresentados como integrações instaladas do Spec-Kit.
- Aceite A06: instalação limpa, build e smoke tests passam; índice contém conteúdo
  da Wiki; configuração oferece busca em português e navegação móvel.
- Aceite A07: Dockerfile e configuração de servidor coerentes, com teste de
  container documentado. Se não houver daemon, registrar teste como pendente.
- Aceite A08: README permite convocar a equipe, abrir incremento e publicar pelo
  Easypanel. Publicação remota depende de repositório/VPS e não integra o aceite
  local deste bootstrap.

## Restrições e decisões de escopo

- Adaptação por artefatos do Spec-Kit; não instalar ferramentas globais nem
  sobrescrever configurações do Codex. Uso oficial de slash commands é opcional
  e depende de instalação da integração correspondente.
- Nenhuma alteração remota ou credencial é necessária para produzir o scaffold.
- Restrições de ambiente não autorizam marcar testes não executados como aprovados.

## Validação e conclusão

Rastreabilidade: `plan.md` → `tasks.md` → `validation.md`. Revisar A01–A08 antes
de encerrar. Cada lacuna deve registrar impacto e próximo comando verificável.

# Spec-Kit adaptado para conteúdo e Wiki

Este repositório usa os artefatos e a sequência do
[GitHub Spec Kit](https://github.github.com/spec-kit/), adaptados para as cinco
perspectivas da equipe e para priorização Pareto. A configuração local é formada
pela constituição, templates, prompts e diretórios `specs/`; não depende do CLI.

Não são instalados automaticamente slash commands, scripts upstream, integração
do Codex, branches ou hooks. Invoque os prompts pelo nome conforme o README.
O build verifica o site; a conformidade semântica com SDD é uma revisão dos
artefatos, não uma propriedade que o build possa garantir sozinho.

Para adotar também o CLI oficial, consulte a
[instalação atual](https://github.github.com/spec-kit/overview/core.html) e
inicialize primeiro em um diretório de avaliação, escolhendo integração Codex e
scripts PowerShell. Compare os arquivos gerados antes de integrar. Não use
inicialização com sobrescrita neste repositório: preserve a constituição e as
seções específicas dos especialistas.

## Próximo incremento

1. Leia a constituição e `prompts/equipe/orquestrador-incremento.md`.
2. Escolha o próximo número livre em `specs/`, por exemplo `003-contexto-usd`.
3. Copie `spec-template.md` para `spec.md`, substitua os campos e colete as cinco
   entradas. Remova instruções entre colchetes antes de consolidar.
4. Derive `plan.md` e `tasks.md` dos templates, nessa ordem.
5. Implemente somente após esses artefatos estarem completos. Registre testes e
   revisão em `validation.md`; mantenha o estado real das tarefas.

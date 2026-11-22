# 008 — Publicar imagem para o EasyPanel

Data: 2026-11-21 | Estado: consolidada

## Resultado

Publicar automaticamente a imagem Docker já definida no `Dockerfile` no GitHub
Container Registry (GHCR), usando o `GITHUB_TOKEN`, para que o EasyPanel possa
instalar e atualizar a wiki por uma referência de imagem estável. A URL pública
de conferência é `https://trading-agent-curso-trading.hkjpsr.easypanel.host/`.

## Pareto e limites

O essencial é workflow de build/push, tag `latest` na branch principal, tag de
commit e instrução de porta 80/healthcheck. Ficam fora deste incremento deploy
automático no EasyPanel, banco de dados, secrets de aplicação e registry
adicional.

## [Rafael Mendes — requisitos técnicos]

- Usar a imagem multiestágio existente e publicar em `ghcr.io`.
- Manter tags reproduzíveis (`sha-*` e `v*`) além de `latest`.
- Expor a porta 80 e preservar o endpoint `/healthz` do Nginx.

## [Helena Costa — arquitetura de uso]

- Instruções curtas: conectar repositório, aguardar Action, copiar imagem,
  configurar porta e testar a URL.
- Não introduzir uma ferramenta de deploy paralela ao EasyPanel.

## [Camila Rocha — segurança operacional]

- Nunca gravar PAT, senha ou token no repositório.
- Usar `GITHUB_TOKEN` apenas no workflow; registry privado exige credencial
  somente no EasyPanel.

## [Lucas Andrade — comunicação]

- Explicar claramente a diferença entre código no GitHub e imagem no GHCR.
- Mostrar o valor exato a substituir: `ghcr.io/OWNER/REPOSITORY:latest`.

## [Diego Silveira — build e integração]

- Adicionar workflow acionado por `main`, tags `v*` e execução manual.
- Manter o workflow de validação separado.
- Aceite: YAML válido, permissão `packages: write`, build usa o `Dockerfile` da raiz
  e a Wiki documenta o ciclo de atualização até a URL pública.

**Assinatura de papel:** Rafael, Helena, Camila, Lucas e Diego.

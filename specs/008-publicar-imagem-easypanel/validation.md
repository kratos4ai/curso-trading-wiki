# Validação — 008 Publicar imagem para o EasyPanel

Data: 2026-11-21 | Estado: pronto para push

- Workflow criado em `.github/workflows/docker-image.yml`.
- Permissões limitadas a `contents: read` e `packages: write`.
- Imagem usa o `Dockerfile` existente e publica `latest`, SHA e tags `v*`.
- README documenta porta 80, `/healthz` e credencial para pacote privado.
- Publicação ainda não foi executada porque este clone não tem `git remote`; o
  próximo passo é conectar o repositório ao GitHub e enviar a branch `main`.

# Plano — 008 Publicar imagem para o EasyPanel

1. Reusar o `Dockerfile` e o healthcheck existentes.
2. Criar um workflow GHCR com permissões mínimas e tags `latest`/`sha`/`v*`.
3. Documentar a instalação no EasyPanel: imagem, porta 80 e `/healthz`.
4. Validar sintaxe, referências e build documental; publicar somente após push do
   repositório para o GitHub.

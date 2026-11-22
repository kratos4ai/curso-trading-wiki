# Plano — 001 Bootstrap

Data: 2026-11-21 | Entrada: [spec.md](spec.md)

## Gate de entrada

As cinco entradas da Spec estão consolidadas; não há questão bloqueante para o
scaffold. A implementação começa somente após a criação de `tasks.md`.

## Decisão Pareto

Usar VitePress 1.6.4 estável, busca local nativa e tema padrão responsivo.
O Mermaid usa o plugin existente `vitepress-plugin-mermaid`, evitando uma
integração de renderização própria. Markdown permanece independente do tema.

MkDocs Material foi considerado, mas seu encerramento de suporte anunciado para
2027-05-05 implicaria migração próxima. A escolha de VitePress evita esse custo.
Fonte: [distribuição oficial do Material](https://pypi.org/project/mkdocs-material/).

## Sequência e rastreabilidade

| Etapa | Entrega | Requisitos | Aceite |
| --- | --- | --- | --- |
| 1 | Constituição, AGENTS e seis prompts | R-I01, R-I02 | A05 |
| 2 | Templates de Spec, Plan, Tasks e aula | R-E01, R-I02 | A04, A05 |
| 3 | Início, trilha, modelos e glossário | R-M01–02, R-P01–02, R-R01–02, R-E01–02 | A01–A04 |
| 4 | VitePress, busca local e Mermaid | R-I03, R-E02 | A04, A06 |
| 5 | Docker multi-stage e Nginx na porta 80 | R-I04 | A07 |
| 6 | README, CI e relatório de validação | R-I05 | A05–A08 |

## Arquitetura mínima

- `docs/`: somente conteúdo e configuração publicados na Wiki.
- `prompts/equipe/`: papéis reutilizáveis, sem implicar processos em execução.
- `.specify/`: constituição e templates adaptados do fluxo Spec-Kit.
- `specs/NNN-nome/`: especificação, plano, tarefas e evidências por incremento.
- `npm ci` reproduz dependências; `npm run docs:build` gera arquivos estáticos.
- Docker compila com Node e entrega somente o resultado ao Nginx Alpine.
- Easypanel termina HTTPS e encaminha HTTP à porta interna 80; sem volumes ou banco.

## Revisão cruzada

Rafael confere mercados e fontes; Helena confere sequência e evidência; Camila
confere modelos e limites; Lucas confere clareza e links; Diego confere build,
busca e contrato de deploy. No bootstrap, executar essas lentes em revisão
sequencial e registrar evidências, sem alegar revisões humanas independentes.

## Verificação e riscos concretos

1. Instalação pelo lockfile e build de produção com links internos verificados.
2. Smoke tests dos HTML, callout, Mermaid e conteúdo indexado.
3. Quando disponível, build Docker, HTTP 200 nas páginas/healthz e 404 em rota
   inexistente; confirmar estado healthy e portas antes de publicar.
4. Inspeção móvel, teclado, busca e diagrama no navegador local ou homologação.
5. Registrar limitações de daemon, navegador e acesso remoto em `validation.md`.

O suporte a Mermaid é a única extensão de apresentação. Dependências e imagens
base devem ser atualizadas em incrementos SDD; versões de imagem por tag não são
imutáveis. Não adicionar automatização de deploy ou credenciais nesta rodada.

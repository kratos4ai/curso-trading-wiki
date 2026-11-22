# Validação — 001 Bootstrap

Data: **2026-11-21** | Estado: **entrega local concluída; container e deploy pendentes**

Complemento: a tela branca encontrada posteriormente em `docs:dev` foi
reproduzida e corrigida no [incremento 002](../002-correcao-dev/validation.md).
A verificação de navegador desta rodada 001 usou o preview de produção.

## Ambiente e execução

Windows, PowerShell, Node.js **22.18.0**, VitePress **1.6.4**,
`vitepress-plugin-mermaid` **2.0.17**, Mermaid **11.17.2**.
Dependências diretas fixadas e dependências transitivas registradas em
`package-lock.json`. Repositório Git local inicializado na branch `main`, sem
commit ou remoto configurado nesta rodada.

| Verificação | Evidência | Resultado |
| --- | --- | --- |
| Instalação limpa pelo lockfile | `npm ci --offline --no-audit --no-fund`; 289 pacotes instalados do cache | Aprovado |
| Build de produção | `npm run check`; VitePress compilou cliente/servidor e renderizou páginas, sem links quebrados | Aprovado |
| Smoke tests do artefato | `node --test tests/wiki.test.mjs`; 3 testes, 3 aprovados | Aprovado |
| Índice real de busca | MiniSearch carregou o índice publicado; seis páginas indexadas; “checklist” retorna `/pratica/modelos#...` | Aprovado |
| Links e âncoras | Inspeção dos destinos e IDs no HTML gerado com parser da biblioteca padrão Python | Aprovado |
| Estrutura dos prompts | Seis arquivos; as seis seções obrigatórias presentes em todos | Aprovado |
| Codificação | Arquivos Markdown lidos como UTF-8, sem caracteres de substituição | Aprovado |
| Mermaid no navegador | Chrome headless, site servido por `docs:preview`: `.mermaid svg` encontrado | Aprovado |
| Busca interativa | Abrir busca, digitar “checklist” e encontrar link para modelos | Aprovado |
| Teclado | Escape fecha a busca | Aprovado no fluxo testado |
| Tela móvel | Viewport 390 × 844, menu lateral abre; sem overflow horizontal na página inicial | Aprovado no fluxo testado |
| JavaScript | Nenhuma exceção capturada durante os fluxos testados | Aprovado |
| Dockerfile e Nginx | Revisão estática do multi-stage, porta 80, `/healthz`, clean URLs e 404 | Coerentes; runtime não executado |
| CI GitHub Actions | Workflow de instalação/build/testes criado; sem envio a GitHub | Configurado; execução remota pendente |
| Container e publicação | Daemon Docker indisponível; destino Git/VPS não fornecido | Pendente |

O primeiro build dentro do sandbox falhou por restrição de leitura do esbuild.
O build com permissão de execução ampliada passou. Não foi necessário alterar
a validação de links nem o código para contornar essa restrição do ambiente.

## Revisão cruzada dos aceites

Aplicadas sequencialmente as cinco perspectivas previstas na Spec. Não se
tratam de revisões humanas independentes ou agentes paralelos executados.

- **A01 / Rafael:** terminologia harmonizada na emenda 2.0.0 para índices
  globais, Forex e metais em USD. No bootstrap, aulas eram planejadas. Não há
  dados históricos, setups, horários ou parâmetros contratuais inventados.
- **A02 / Helena:** início, trilha e modelos acessíveis diretamente pelo menu;
  orientação de estudo com entregável, checklist e próximo passo; sequência
  futura explicita pré-requisitos e evidências de aprendizagem.
- **A03 / Camila:** plano, checklist e diário disponíveis para simulação;
  campos de custos, slippage, quantidade, invalidação, drawdown e interrupção;
  sem percentual universal de risco nem passagem automática para conta real.
- **A04 / Lucas:** resumo prático no início, callouts, Mermaid com equivalente
  textual, glossário cruzado e páginas curtas. Capturas desktop e móvel revisadas,
  incluindo menu após sua animação; temas escuro e claro conferidos. Sem overflow
  na página inicial em largura móvel de 390 px.
- **A05 / Diego:** AGENTS, constituição, templates e seis prompts completos;
  Spec/Plan/Tasks criados antes da implementação. A adaptação Spec-Kit é por
  artefatos; CLI e slash commands não são apresentados como instalados.
- **A06:** instalação limpa, build, três testes, índice e fluxos de busca,
  Mermaid e navegação móvel aprovados. Não foi executada auditoria completa
  de acessibilidade, múltiplos navegadores ou todos os tamanhos de tela.
- **A07:** arquivos e roteiro Docker entregues. Teste de runtime permanece
  pendente: cliente Docker instalado, mas conexão ao daemon falhou por ausência
  do pipe `docker_engine`. Não foi alegado container saudável.
- **A08:** README inclui invocação nominal, SDD, árvore, comandos locais,
  publicação Git/Easypanel, porta/healthcheck, atualização e rollback. Publicação
  remota não integra o aceite local e não foi executada.

## Pendências e comandos de retomada

1. **T013:** com Docker Linux ativo, executar o roteiro “Testar o container” do
   README: build, estado `healthy`, HTTP 200 em páginas e `/healthz`, HTTP 404 em
   rota inexistente. Isso validará a configuração Nginx em execução.
2. **T015:** configurar repositório remoto e App Easypanel, publicar o commit
   validado e homologar busca, Mermaid, menu e saúde pelo domínio HTTPS.
   Registrar URL, commit e data; preservar caminho de rollback.

Servidores temporários e navegador usados na verificação local são encerrados
ao término da execução. Capturas de QA ficam somente no diretório temporário,
fora dos arquivos do projeto e do contexto Docker.

## Filtro Pareto e próximo incremento sugerido

Ficaram de fora aulas completas, login, banco, CMS, cotações e envio de ordens.
Reconsiderar apenas com objetivo e evidência em nova Spec. Sugestão para 002:
preparação e risco na simulação, usando os modelos já disponíveis, com as cinco
entradas antes de Plan/Tasks. Não há implementação dessa aula nesta rodada.

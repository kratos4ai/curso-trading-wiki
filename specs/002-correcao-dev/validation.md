# Validação — 002 Correção do desenvolvimento

Data: 2026-11-21 | Estado: concluída

## Causa reproduzida

O servidor existente na porta 5173 devolvia HTTP 200, mas o Chrome capturou:

```text
SyntaxError: The requested module '.../fastdom/fastdom.js?...'
does not provide an export named 'default'
```

Mermaid importava uma dependência CommonJS sem conversão para o navegador.
O import de Mermaid é injetado pelo plugin; sua inclusão explícita na otimização
do Vite resolve a preparação dessas dependências no desenvolvimento. O build
de produção usa outro fluxo de empacotamento e já passava antes desta correção.

## Mudança

`docs/.vitepress/config.mts` inclui `mermaid` em `vite.optimizeDeps.include`.
Nenhuma dependência, lockfile, aula ou configuração Docker foi alterada.
O README agora inclui uma conferência do modo de desenvolvimento, além do build.

## Evidências

Testes executados no Chrome headless com perfil temporário, acessando o servidor
do usuário em **http://127.0.0.1:5173/** após seu reinício automático:

| Aceite | Verificação | Resultado |
| --- | --- | --- |
| A01 | Aplicativo monta e título “Curso de Trading” aparece | Aprovado |
| A01 | Recarregamento ignorando cache e captura de exceções JavaScript | Aprovado, nenhuma exceção |
| A02 | `.mermaid svg` presente na página inicial | Aprovado |
| A02 | Abrir busca, digitar “checklist”, clicar no resultado e chegar aos modelos | Aprovado |
| A02 | Navegar dos modelos para “Comece aqui” | Aprovado |
| A03 | `npm run check`: build de produção e três smoke tests | Aprovado, 3/3 testes |
| A04 | Captura desktop inspecionada e roteiro do README atualizado | Aprovado |

Revisão das cinco perspectivas: conteúdo técnico e modelos preservados
(Rafael/Camila); acesso à jornada restaurado (Helena); textos, navegação e
diagrama renderizados (Lucas); correção nativa e build aprovados (Diego).
As perspectivas foram aplicadas sequencialmente, sem revisão humana externa.

O navegador temporário de teste foi encerrado. O servidor já iniciado pelo
usuário foi preservado; não foi necessário reiniciá-lo manualmente nem ocupar
outra porta. Uma aba com módulos antigos em cache pode exigir **Ctrl+F5**.

## Limites

O teste do bootstrap anterior cobria o preview de produção, não `docs:dev`.
Esta rodada verifica explicitamente o caminho que falhou. Docker e publicação
remota permanecem fora do escopo desta correção.

# Plano — 002 Correção do desenvolvimento

Entrada: [spec.md](spec.md). As cinco perspectivas e o filtro Pareto estão
consolidados. Implementar somente após criar Tasks.

1. R-I01 / A01: configurar a inclusão explícita de Mermaid na otimização de
   dependências. A biblioteca é injetada pelo plugin, fora da descoberta inicial
   convencional; a preparação deve converter seus imports CommonJS em módulos
   que o navegador consiga carregar.
2. R-I02 / A01–A02: confirmar reinício automático do servidor existente e testar
   no Chrome uma sessão nova e recarregamento, com conteúdo, SVG, busca e links.
3. R-I02 / A03: executar build e testes existentes; não modificar lockfile.
4. R-M01, R-P01, R-R01, R-E01 / A04: registrar validação e complementar o roteiro
   de desenvolvimento no README sem alterar conteúdo educacional.

Usar a configuração nativa conforme a
[documentação do Vite](https://vite.dev/config/dep-optimization-options#optimizedeps-include).
Se surgir outra falha CommonJS, investigar seu caminho antes de ampliar escopo.
Manter somente otimizações necessárias; não editar `node_modules`.

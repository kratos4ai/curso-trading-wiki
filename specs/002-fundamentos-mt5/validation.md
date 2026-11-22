# Relatório — 002-fundamentos-mt5

Data: **2026-11-21** | Estado: **concluído no repositório e na Wiki local**.
Entradas: [Spec assinada](spec.md), [Plan](plan.md), [Tasks](tasks.md).

## Resultado do incremento

Módulo 01 completo: índice e quatro aulas em `docs/modulo-01/`, com sidebar,
início, trilha, orientação, glossário, fontes e modelos atualizados. Constituição
**2.0.0**, AGENTS, README, templates e perfis refletem o escopo definitivo USD.
Artefatos anteriores foram harmonizados, com nota de emenda no bootstrap.

O slug `002-fundamentos-mt5` foi mantido conforme solicitado; a rodada técnica
`002-correcao-dev` permanece distinta e preservada. Os papéis editoriais foram
invocados e aplicados sequencialmente; assinaturas não representam pareceres
de pessoas externas ou subagentes independentes.

## Contribuições e fechamento de vetos

| Especialista | Contribuição entregue | Veto/condição e resolução |
| --- | --- | --- |
| **Rafael Mendes** | Definições, ficha do símbolo, tabela de nove cenários e revisão dos cálculos | Valores universais vetados: contratos, cotações e margem são hipóteses explícitas, com conferência do servidor obrigatória |
| **Helena Costa** | Sequência 1.1–1.4, pré-requisitos, objetivos, exercícios e rubricas | Antecipar ordens vetado: 1.2 reconhece interface; 1.3 valida Demo e termina layout; só 1.4 executa se elegível |
| **Camila Rocha** | Demo USD 1000 fixos, teto didático de 1%, custos/reserva, dimensionamento e checklist | Entrada sem proteção vetada: One-Click desligado; SL/TP antes do envio; mínimo/proteção incompatível leva a não execução |
| **Lucas Andrade** | Resumo Pareto no topo, fontes datadas, tabela unificada, diagrama e equivalente textual | Hipóteses ocultas e excesso editorial vetados: quatro aulas abaixo de 900 palavras; tabela com rolagem em tela pequena |
| **Diego Silveira** | Governança, SDD, navegação, indexação e testes | Build/rotas sem evidência vetados: build, seis testes, links/âncoras e Chrome aprovados |

**Nenhum veto aberto.** Sem novos plugins, dependências, telas de envio de
ordens ou mudanças no Docker. Mantida a correção de otimização Mermaid no modo dev.

## Evidências técnicas e pedagógicas

| Aceites | Verificação | Resultado |
| --- | --- | --- |
| A-G01 | Varredura automatizada de arquivos autorais e HTML regenerado | Nenhuma referência ao escopo removido |
| A-G01 | Governança, seis perfis e templates revisados | USD e lista de alvos coerentes; seis seções de perfil preservadas |
| A-M01–02 | Teste lê a tabela Markdown e recalcula nove linhas | Exposição, valor por movimento/tick, nocional e margem corretos nas hipóteses |
| A-R01 | Teste do saldo fixo e do caso de ordem | USD 1000 → USD 10; 0.04 lote, perda 8 + reserva 2 = 10 USD |
| A-R01 | Teste do spread e estado simplificado da conta | Marcação −0,80 USD e margem livre 955,20 USD conferidos |
| A-P01, A-E01 | Estrutura, exercícios, fontes e extensão por aula | 1.1: 822; 1.2: 586; 1.3: 672; 1.4: 879 palavras |
| A-I01 | `npm.cmd run docs:build` | Aprovado; cliente/servidor e páginas renderizados sem erro |
| A-I01 | `npm.cmd test` | **6 testes aprovados, 0 falhas**; inclui os três testes existentes ampliados |
| A-I01 | `npm.cmd run check` final | Aprovado; build final em 11.93 s e seis testes aprovados |
| A-I01 | Busca publicada com MiniSearch | Onze páginas indexadas; “Stop Loss” encontra a aula 1.4 |
| A-I01 | Parser HTML verifica arquivos e IDs de destino | Nenhum link ou âncora interna ausente, incluindo conclusão do módulo |
| A-P01, A-I01 | Chrome em `http://127.0.0.1:5173/` | Início aponta ao módulo; quatro aulas abertas pela sidebar |
| A-E01, A-I01 | Chrome: diagrama e busca interativa | SVG flowchart renderizado; “Stop Loss” retorna a aula 1.4 |
| A-E01 | Chrome móvel 390 × 844 | Menu abre; largura da página 390 px; tabelas rolam internamente sem overflow global |
| A-I01 | Exceções JavaScript nos fluxos concluídos | Nenhuma |

Teste estrutural e financeiro permanente: `tests/fundamentos-mt5.test.mjs`.
Integração/indexação: `tests/wiki.test.mjs`. `npm test` agora descobre ambos
pelo runner nativo Node. Não foi necessário instalar pacotes nem mudar lockfile.
Capturas temporárias de desktop e tela móvel foram inspecionadas; o navegador
de QA foi encerrado e o servidor que o usuário já mantinha aberto foi preservado.

## Limites de validação e publicação

“Publicado” neste incremento significa conteúdo integrado aos arquivos e ao
build local. Não houve commit/push, deploy em VPS ou uso de conta externa.
Docker não foi alterado nem testado novamente.

Não foi instalado ou automatizado um terminal MT5 e nenhuma conta foi aberta
ou ordem enviada em nome do usuário. Os fluxos de plataforma foram confrontados
com documentação oficial; a execução efetiva e os parâmetros específicos
dependem do servidor Demo utilizado pelo aluno. O checklist exige conferir
essas condições antes de executar e aceita não operação como resultado correto.

A tabela é um laboratório hipotético. Dados de contrato, tick, mínimo, margem,
custos e permissão de SL/TP iniciais nunca devem ser inferidos apenas pelo nome
do ativo. O saldo fixo de USD 1000 e o teto de 1% são escolhas pedagógicas do módulo,
não recomendação universal nem garantia de perda máxima.

## Pareto aplicado e adiamentos

Entregues somente os fundamentos necessários à primeira execução consciente.
Permanecem fora deste incremento: setups, indicadores, robôs, código MQL5,
ordens pendentes, backtesting, conta real e seleção de intermediário. Reavaliar
em Spec própria quando houver objetivo de aprendizagem que justifique o custo.

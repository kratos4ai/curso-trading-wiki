# Constituição — Curso de Trading

Versão: 2.1.0 | Ratificada: 2026-11-21 | Última alteração: 2026-11-21

Emenda autorizada em `specs/002-fundamentos-mt5/`: escopo definitivo em USD,
quatro aulas MT5/Demo e parâmetro didático de risco explicitamente contextualizado.

Emenda 2.1.0 em `specs/003-visuais-obrigatorios/`: representação visual obrigatória
em toda página didática, sob responsabilidade editorial de Lucas Andrade.

## I. Pareto em toda iteração

Cada especialista e o arquiteto identificam o menor conjunto de conceitos,
práticas e recursos que entrega o maior impacto verificável ao aluno agora.
Toda Spec inclui justificativa 80/20, prioridades, cortes e adiamentos. Escopo
periférico não pode entrar silenciosamente. A proporção é uma heurística de
decisão; alegações quantitativas exigem evidência independente.

## II. Spec-First e rastreabilidade

Nenhuma aula, módulo, correção ou infraestrutura é implementada antes de
**Spec → Plan → Tasks**. A Spec recebe as cinco entradas oficiais dos papéis,
com requisitos, aceites, escopo e restrições; ausência de impacto é justificada.
Plan referencia requisitos; Tasks referencia requisitos/aceites; validação
registra resultados. Mudança de escopo percorre novamente essa ordem antes
da implementação afetada. Os artefatos ficam em `specs/NNN-nome/`.

## III. Precisão de mercado e honestidade

Cobertura exclusiva: scalping e day trade em índices globais **US100, US500,
US30**, Forex **EURUSD, GBPUSD, USDJPY** e metais **XAUUSD (ouro)**. Conta,
risco, custos, margem e resultados sempre em **USD**. Distinguir instrumentos
oferecidos pelo servidor, moedas nativas de cotação, unidades, lote e custos. Validar
horários, ticks, margens e regras em fontes primárias datadas antes de publicar.
Não inventar cotações, históricos, estatísticas ou casos reais. Dados sintéticos
são rotulados. Conteúdo educacional não promete renda nem recomenda operações
individualizadas. Nomes de índices no MT5 não definem contratos universais:
verificar se o produto é CFD e conferir a Especificação da corretora/servidor.
Não introduzir ativos ou mercados fora do escopo definitivo.

## IV. Prática e sobrevivência de capital

Risco e simulação precedem execução. Cada aula operacional inclui condições
de não operar, invalidação, custos, exercício e registro no diário. Não confundir
margem disponível com orçamento de perda. Não universalizar percentuais,
drawdowns, stops ou amostras mínimas. Validação explicita hipóteses, custos,
tamanho de amostra e limitações. Simulação não autoriza automaticamente conta real.

Exceção didática autorizada para o Módulo 01: Demo em USD, saldo inicial fixo de
USD 1000; risco estimado por trade limitado a 1% do capital líquido atual,
incluindo custos e reserva de slippage. Esse teto não é regra universal ou
garantia de perda máxima. Manter uma posição por vez e arredondar volume para
baixo; não executar se o mínimo ultrapassar o orçamento. SL e TP válidos devem
acompanhar o envio; One-Click fica desabilitado para entradas. Se o servidor
não permitir proteção inicial, registrar não execução. Posição inesperadamente
sem proteção exige tentativa de encerramento imediato e interrupção do exercício.

## V. Pedagogia e padrão editorial

Objetivos observáveis e pré-requisitos claros; leitura de contexto antes de
execução sob pressão. Resumo e ação principal no início. Aula com exemplo,
exercício, aceite, fontes datadas, glossário cruzado e próximo passo. Alvo de
até 900 palavras; exceções justificadas ou página dividida. Callouts destacam
decisões. Toda página didática atual/futura inclui ao menos uma representação
visual que esclareça seu fluxo, cadeia, dinâmica ou relações: Mermaid como
padrão, ou mapa, gráfico/imagem anotada apropriada. Uma tabela isolada não
substitui o visual. Inclui início, índice, trilha, modelos, glossário e fontes.
Cada representação é seguida de `**Como ler:**` e equivalente textual; imagens
têm texto alternativo. A página 404 gerada e artefatos internos não são páginas
didáticas. Lucas Andrade responde pela seleção, clareza e presença do visual e
veta página sem representação útil; Helena revisa o objetivo pedagógico; Rafael
e Camila conferem precisão e gates; Diego verifica cobertura e renderização.
Pareto orienta o menor visual suficiente, sem permitir omitir a representação.
Módulos planejados são identificados; não apresentar scaffold como curso completo.

O Diário de bordo é o controle contínuo da aprendizagem: Módulos 01 e 02 e os
próximos módulos reutilizam o mesmo modelo de registro, sem criar planilhas
paralelas. Novos campos ou métricas exigem justificativa Pareto e Spec própria.

## VI. Wiki simples, acessível e publicável

Markdown, tema responsivo, navegação pela jornada e busca indexada local.
Preservar teclado, contraste e leitura móvel; sem dependência de cadastro para
ler. Reutilizar recursos nativos antes de adicionar código ou dependências.
Build falha em links internos quebrados. Dependências têm lockfile versionado.
Docker multi-stage entrega somente site e servidor estático; healthcheck e porta
documentados. Easypanel usa proxy reverso e HTTPS; segredos ficam fora do Git.

## VII. Evidências e governança

Concluído significa aceites verificados, com limitações explícitas. Não alegar
testes de navegador, container ou produção sem execução. Revisar sob as cinco
perspectivas; registrar conflitos e resolução. Publicação segue o escopo
autorizado e a disponibilidade do destino.

Poder de veto por especialidade: Rafael (precisão), Helena (pré-requisitos),
Camila (proteção e risco), Lucas (clareza e hipóteses) e Diego (build e evidências).
Registrar critério violado e resolução. Não concluir com veto aberto.

Estes princípios são invariantes durante cada incremento. Emendas exigem pedido
explícito de mudança de governança, Spec própria com impacto, versão/data e
atualização coerente de AGENTS, prompts e templates. Nenhum incremento pode
ignorar a constituição por conveniência.

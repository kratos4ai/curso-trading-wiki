import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  lang: 'pt-BR',
  title: 'Curso de Trading',
  description: 'Estude o essencial. Pratique na simulação. Revise suas decisões.',
  cleanUrls: true,
  // A validação nativa de links quebrados permanece habilitada.
  themeConfig: {
    nav: [
      { text: 'Comece aqui', link: '/comece-aqui' },
      { text: 'Módulo 01', link: '/modulo-01/' },
      { text: 'Módulo 02', link: '/modulo-02/' },
      { text: 'Módulo 03', link: '/modulo-03/' },
      { text: 'Trilha', link: '/trilha' },
      { text: 'Modelos', link: '/pratica/modelos' }
    ],
    sidebar: [
      {
        text: 'Sua jornada',
        items: [
          { text: 'Visão geral', link: '/' },
          { text: 'Comece aqui', link: '/comece-aqui' },
          { text: 'Trilha de aprendizagem', link: '/trilha' }
        ]
      },
      {
        text: 'Prática e consulta',
        items: [
          { text: 'Plano, checklist e diário', link: '/pratica/modelos' },
          { text: 'Diário de bordo (planilha)', link: '/pratica/diario-bordo' },
          { text: 'Validação e operação', link: '/pratica/validacao-operacional' },
          { text: 'Publicar nova versão', link: '/implantacao/publicar-versao' },
          { text: 'Glossário essencial', link: '/referencias/glossario' },
          { text: 'Fontes e revisão', link: '/referencias/fontes' }
        ]
      },
      {
        text: 'Módulo 01 · Fundamentos e MT5',
        items: [
          { text: 'Objetivos e regras', link: '/modulo-01/' },
          { text: '1.1 · O terreno em USD', link: '/modulo-01/1-1-terreno-usd' },
          { text: '1.2 · MT5 essencial', link: '/modulo-01/1-2-mt5-essencial' },
          { text: '1.3 · Conta Demo', link: '/modulo-01/1-3-conta-demo' },
          { text: '1.4 · Mercado e proteção', link: '/modulo-01/1-4-ordem-mercado' }
        ]
      },
      {
        text: 'Módulo 02 · Estratégia simples',
        items: [
          { text: 'Visão geral', link: '/modulo-02/' },
          { text: '2.1 · Quatro passos', link: '/modulo-02/2-1-estrategia-simples' },
          { text: '2.2 · Contexto e nível', link: '/modulo-02/2-2-contexto-nivel' },
          { text: '2.3 · Confirmação e risco', link: '/modulo-02/2-3-confirmacao-risco' },
          { text: '2.4 · Prática guiada', link: '/modulo-02/2-4-pratica-guiada' }
        ]
      },
      {
        text: 'Módulo 03 · Repetição controlada',
        items: [
          { text: 'Visão geral', link: '/modulo-03/' },
          { text: '3.1 · Preparar bloco', link: '/modulo-03/3-1-preparar-bloco' },
          { text: '3.2 · Registrar tentativa', link: '/modulo-03/3-2-registrar-tentativa' },
          { text: '3.3 · Revisar aderência', link: '/modulo-03/3-3-revisar-aderencia' },
          { text: '3.4 · Fechar bloco', link: '/modulo-03/3-4-fechar-bloco' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Buscar',
            buttonAriaLabel: 'Buscar no curso'
          },
          modal: {
            displayDetails: 'Mostrar detalhes',
            resetButtonTitle: 'Limpar busca',
            backButtonTitle: 'Voltar',
            noResultsText: 'Nenhum resultado para',
            footer: {
              selectText: 'selecionar',
              navigateText: 'navegar',
              closeText: 'fechar'
            }
          }
        }
      }
    },
    outline: { label: 'Nesta página', level: [2, 3] },
    docFooter: { prev: 'Anterior', next: 'Próximo' },
    sidebarMenuLabel: 'Menu do curso',
    returnToTopLabel: 'Voltar ao topo',
    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Usar tema claro',
    darkModeSwitchTitle: 'Usar tema escuro',
    skipToContentLabel: 'Ir para o conteúdo'
  },
  mermaid: {
    securityLevel: 'strict'
  },
  vite: {
    optimizeDeps: {
      // O plugin injeta Mermaid após a descoberta inicial; converter também suas dependências CommonJS.
      include: ['mermaid']
    }
  }
})

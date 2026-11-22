import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { join } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath, pathToFileURL } from 'node:url'

const dist = fileURLToPath(new URL('../docs/.vitepress/dist/', import.meta.url))
const pages = [
  'index.html',
  'comece-aqui.html',
  'trilha.html',
  'pratica/modelos.html',
  'pratica/diario-bordo.html',
  'pratica/validacao-operacional.html',
  'implantacao/publicar-versao.html',
  'referencias/glossario.html',
  'referencias/fontes.html',
  'modulo-01/index.html',
  'modulo-01/1-1-terreno-usd.html',
  'modulo-01/1-2-mt5-essencial.html',
  'modulo-01/1-3-conta-demo.html',
  'modulo-01/1-4-ordem-mercado.html',
  'modulo-02/index.html',
  'modulo-02/2-1-estrategia-simples.html',
  'modulo-02/2-2-contexto-nivel.html',
  'modulo-02/2-3-confirmacao-risco.html',
  'modulo-02/2-4-pratica-guiada.html',
  'modulo-03/index.html',
  'modulo-03/3-1-preparar-bloco.html',
  'modulo-03/3-2-registrar-tentativa.html',
  'modulo-03/3-3-revisar-aderencia.html',
  'modulo-03/3-4-fechar-bloco.html'
]

test('o build entrega páginas em português, navegação e página 404', async () => {
  for (const page of [...pages, '404.html']) {
    const html = await readFile(join(dist, page), 'utf8')
    assert.match(html, /<html[^>]*lang="pt-BR"/, page)
    assert.match(html, /<title>[^<]+<\/title>/, page)
  }

  const home = await readFile(join(dist, 'index.html'), 'utf8')
  assert.match(home, /href="\/comece-aqui"/)
  assert.match(home, /href="\/pratica\/modelos"/)
  assert.match(home, /href="(?:\.\/)?modulo-02\/?"/)
  assert.match(home, /Menu do curso/)
  assert.match(home, /Ir para o conteúdo/)
  const diary = await readFile(join(dist, 'pratica/diario-bordo.xlsx') )
  assert.equal(diary[0], 0x50, 'XLSX publicado não começa com assinatura ZIP')
  assert.equal(diary[1], 0x4b, 'XLSX publicado não começa com assinatura ZIP')
  assert.ok(diary.length > 5000, 'XLSX do Diário de bordo está vazio ou incompleto')
  const operations = await readFile(join(dist, 'implantacao/publicar-versao.html'), 'utf8')
  assert.match(operations, /ghcr\.io\/kratos4ai\/curso-trading-wiki:latest/)
  assert.match(operations, /trading-agent-curso-trading\.hkjpsr\.easypanel\.host/)
  assert.match(operations, /Checklist de validação em camadas/)
  const beginner = await readFile(join(dist, 'pratica/validacao-operacional.html'), 'utf8')
  assert.match(beginner, /Antes de começar/)
  assert.match(beginner, /Palavras que você verá/)
})

test('callouts e o componente Mermaid fazem parte do artefato publicado', async () => {
  const home = await readFile(join(dist, 'index.html'), 'utf8')
  assert.match(home, /class="info custom-block"/)
  assert.match(home, /class="warning custom-block"/)
  assert.match(home, /class="mermaid"/)

  const chunks = await readdir(join(dist, 'assets/chunks'))
  assert.ok(chunks.some((name) => name.startsWith('virtual_mermaid-config.')))
  const assets = await readdir(join(dist, 'assets'))
  const pageBundle = assets.find((name) => /^index\.md\..+\.js$/.test(name))
  assert.ok(pageBundle, 'bundle da página inicial ausente')
  const script = await readFile(join(dist, 'assets', pageBundle), 'utf8')
  assert.match(script, /flowchart%20TD/, 'definição do diagrama ausente')
  // A renderização SVG, temas e teclado também precisam de homologação no navegador.
})

test('a busca publicada encontra checklist e indexa todas as páginas do curso', async () => {
  const chunksDir = join(dist, 'assets/chunks')
  const indexFile = (await readdir(chunksDir))
    .find((name) => name.startsWith('@localSearchIndexroot.') && name.endsWith('.js'))
  assert.ok(indexFile, 'índice local de busca ausente; execute npm run docs:build')
  const { default: serialized } = await import(pathToFileURL(join(chunksDir, indexFile)))
  const data = JSON.parse(serialized)
  const indexedPaths = new Set(Object.values(data.documentIds).map((id) => id.split('#')[0]))
  for (const route of ['/', '/comece-aqui', '/trilha', '/pratica/modelos', '/pratica/diario-bordo',
    '/pratica/validacao-operacional',
    '/implantacao/publicar-versao',
    '/referencias/glossario', '/referencias/fontes', '/modulo-01/',
    '/modulo-01/1-1-terreno-usd', '/modulo-01/1-2-mt5-essencial',
    '/modulo-01/1-3-conta-demo', '/modulo-01/1-4-ordem-mercado',
    '/modulo-02/', '/modulo-02/2-1-estrategia-simples',
    '/modulo-02/2-2-contexto-nivel', '/modulo-02/2-3-confirmacao-risco',
    '/modulo-02/2-4-pratica-guiada', '/modulo-03/',
    '/modulo-03/3-1-preparar-bloco', '/modulo-03/3-2-registrar-tentativa',
    '/modulo-03/3-3-revisar-aderencia', '/modulo-03/3-4-fechar-bloco']) {
    assert.ok(indexedPaths.has(route), `${route} não foi indexada`)
  }

  // Usar a mesma dependência de busca do VitePress para consultar o índice real.
  const require = createRequire(import.meta.resolve('vitepress'))
  const MiniSearch = require('minisearch')
  const index = MiniSearch.loadJSON(serialized, {
    fields: ['title', 'titles', 'text'],
    storeFields: ['title', 'titles']
  })
  const results = index.search('checklist', { prefix: true, fuzzy: 0.2 })
  assert.ok(results.some((result) => result.id.startsWith('/pratica/modelos#')),
    'a consulta por checklist precisa retornar os modelos de prática')
  assert.ok(index.search('Stop Loss').some((result) =>
    result.id.startsWith('/modulo-01/1-4-ordem-mercado#')),
  'a consulta por Stop Loss precisa encontrar a aula de execução')
})

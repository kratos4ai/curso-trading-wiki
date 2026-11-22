import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
import { relative, resolve, sep } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const docsRoot = fileURLToPath(new URL('../docs/', import.meta.url))
const distRoot = fileURLToPath(new URL('../docs/.vitepress/dist/', import.meta.url))

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    const path = resolve(directory, entry.name)
    if (entry.isDirectory()) files.push(...await markdownFiles(path))
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(path)
  }
  return files
}

function visualBlocks(markdown) {
  const blocks = []
  for (const match of markdown.matchAll(/```mermaid\s*\r?\n[\s\S]*?```/g)) {
    blocks.push({ end: match.index + match[0].length, kind: 'mermaid' })
  }
  for (const match of markdown.matchAll(/!\[([^\]]+)\]\([^)]+\)/g)) {
    if (match[1].trim()) blocks.push({ end: match.index + match[0].length, kind: 'image' })
  }
  return blocks.sort((a, b) => a.end - b.end)
}

function hasReadingNote(markdown, block) {
  return /^\s*\*\*Como ler:\*\*/m.test(markdown.slice(block.end))
}

async function sourceAndBuiltPages() {
  const sources = await markdownFiles(docsRoot)
  return Promise.all(sources.map(async (source) => {
    const relativeSource = relative(docsRoot, source).split(sep).join('/')
    const route = relativeSource.replace(/\.md$/, '.html')
    return { source, relativeSource, markdown: await readFile(source, 'utf8'), html: await readFile(resolve(distRoot, route), 'utf8') }
  }))
}

test('toda página autoral tem visual relevante e instrução Como ler', async () => {
  const pages = await sourceAndBuiltPages()
  assert.equal(pages.length, 24, 'o inventário autoral esperado mudou; revise a Spec')
  for (const page of pages) {
    const blocks = visualBlocks(page.markdown)
    assert.ok(blocks.length > 0, `${page.relativeSource} não tem Mermaid ou imagem`) 
    assert.ok(blocks.some((block) => hasReadingNote(page.markdown, block)),
      `${page.relativeSource} não explica o visual com Como ler`)
    const mermaids = blocks.filter((block) => block.kind === 'mermaid').length
    assert.ok((page.html.match(/class="mermaid"/g) ?? []).length >= mermaids,
      `${page.relativeSource} não publicou todos os Mermaid no HTML`)
  }
})

test('a regra rejeita uma página futura sem representação', () => {
  const fixture = '# Página futura\n\nTexto sem fluxo, cadeia ou diagrama.\n'
  assert.equal(visualBlocks(fixture).length, 0)
  assert.throws(() => {
    assert.ok(visualBlocks(fixture).length > 0, 'página sem representação')
  }, /página sem representação/)
})

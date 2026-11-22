import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const lesson = (name) => readFile(new URL(`../docs/modulo-02/${name}.md`, import.meta.url), 'utf8')
const lessons = ['2-1-estrategia-simples', '2-2-contexto-nivel', '2-3-confirmacao-risco', '2-4-pratica-guiada']

test('o Módulo 02 apresenta uma única estratégia simples e a Demo de USD 1.000', async () => {
  const index = await lesson('index')
  assert.match(index, /nível, confirmação e proteção/)
  assert.match(index, /Demo em USD 1\.000/)
  assert.match(index, /2-1-estrategia-simples/)
})

test('as quatro aulas têm sequência, rubrica e limite editorial', async () => {
  for (const name of lessons) {
    const text = await lesson(name)
    assert.match(text, /^# Aula 2\.[1-4][^\n]*\n\n::: tip Resumo Pareto/)
    assert.match(text, /## Objetivo e pré-requisitos/)
    assert.match(text, /## Fontes e próximo passo/)
    assert.match(text, /2026-11-21/)
    assert.match(text, /```mermaid/)
    assert.match(text, /\*\*Como ler:\*\*/)
    assert.ok(text.split(/\s+/).filter(Boolean).length <= 900, `${name} excedeu 900 palavras`)
  }
})

test('o fluxo da estratégia termina em proteção ou não execução', async () => {
  const [first, risk, practice] = await Promise.all([
    lesson(lessons[0]), lesson(lessons[2]), lesson(lessons[3])
  ])
  assert.match(first, /nível horizontal/)
  assert.match(first, /confirmação/)
  assert.match(risk, /Demo de USD 1\.000/)
  assert.match(risk, /não executar/)
  assert.match(practice, /Ordem Demo opcional/)
  assert.match(practice, /diário|Diario e revisao/)
})

test('as páginas de consulta conectam Módulos 01 e 02', async () => {
  const [models, glossary, sources] = await Promise.all([
    readFile(new URL('../docs/pratica/modelos.md', import.meta.url), 'utf8'),
    readFile(new URL('../docs/referencias/glossario.md', import.meta.url), 'utf8'),
    readFile(new URL('../docs/referencias/fontes.md', import.meta.url), 'utf8')
  ])
  assert.match(models, /O mesmo modelo em cada módulo/)
  assert.match(models, /modulo-02\/index\.md/)
  assert.match(models, /diario-bordo\.md/)
  assert.match(glossary, /Estratégia simples: nível e confirmação/)
  assert.match(glossary, /modulo-02\/2-3-confirmacao-risco\.md/)
  assert.match(sources, /Módulo 02: fontes primárias/)
  assert.match(sources, /Gráficos e períodos/)
})

test('a planilha XLSX do Diário de bordo contém um artefato utilizável', async () => {
  const xlsx = await readFile(new URL('../docs/public/pratica/diario-bordo.xlsx', import.meta.url))
  assert.equal(xlsx[0], 0x50)
  assert.equal(xlsx[1], 0x4b)
  assert.ok(xlsx.length > 5000)
})

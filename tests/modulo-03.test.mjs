import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const lesson = (name) => readFile(new URL(`../docs/modulo-03/${name}.md`, import.meta.url), 'utf8')
const lessons = ['3-1-preparar-bloco', '3-2-registrar-tentativa', '3-3-revisar-aderencia', '3-4-fechar-bloco']

test('o Módulo 03 mantém uma regra e usa o Diário de bordo', async () => {
  const index = await lesson('index')
  assert.match(index, /Módulo 02/)
  assert.match(index, /mesma regra/)
  assert.match(index, /10 registros comparáveis/)
  assert.match(index, /Diário de bordo/)
  assert.match(index, /não prova vantagem estatística/)
})

test('as quatro aulas de repetição têm ação, rubrica, visual e limite', async () => {
  for (const name of lessons) {
    const text = await lesson(name)
    assert.match(text, /^# Aula 3\.[1-4][^\n]*\n\n::: tip Resumo Pareto/)
    assert.match(text, /## Objetivo e pré-requisitos/)
    assert.match(text, /## Fontes e próximo passo/)
    assert.match(text, /```mermaid/)
    assert.match(text, /\*\*Como ler:\*\*/)
    assert.match(text, /2026-11-21/)
    assert.ok(text.split(/\s+/).filter(Boolean).length <= 900, `${name} excedeu 900 palavras`)
  }
})

test('o fechamento do bloco prioriza processo antes de nova estratégia', async () => {
  const review = await lesson('3-3-revisar-aderencia')
  const close = await lesson('3-4-fechar-bloco')
  assert.match(review, /Aderência|aderência/)
  assert.match(review, /10 registros comparáveis/)
  assert.match(close, /Repetir|Pausar|Revisar/)
  assert.match(close, /não.*estratégia nova|estratégia nova/i)
})

import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const lesson = (name) => readFile(new URL(`../docs/modulo-01/${name}.md`, import.meta.url), 'utf8')
const near = (actual, expected, context) => assert.ok(
  Math.abs(actual - expected) < 1e-8,
  `${context}: ${actual} deveria ser ${expected}`
)
const cells = (line) => line.split('|').slice(1, -1).map((cell) => cell.trim())
const numbers = (value) => [...value.matchAll(/\d+(?:\.\d+)?/g)].map(([n]) => Number(n))

test('a tabela publicada recalcula nove cenários de lote, tick, nocional e margem', async () => {
  const text = await lesson('1-1-terreno-usd')
  const contracts = {
    EURUSD: { size: 100000, price: 1.1, tick: 0.00001, move: 0.0001 },
    US100: { size: 1, price: 20000, tick: 0.1, move: 1 },
    XAUUSD: { size: 100, price: 3000, tick: 0.01, move: 1 }
  }
  const rows = text.split('\n').filter((line) =>
    /^\| (EURUSD|US100|XAUUSD) \| (0\.01|0\.10|1\.00) \|/.test(line))
  assert.equal(rows.length, 9)
  const seen = new Set()
  for (const row of rows) {
    const [symbol, ...values] = cells(row)
    assert.equal(values.length, 6)
    const [volume, exposure, movement, tick, notional, margin] = values.map(Number)
    assert.ok(values.every((value) => Number.isFinite(Number(value))))
    const model = contracts[symbol]
    const key = `${symbol}/${volume}`
    assert.ok(!seen.has(key), `linha duplicada: ${key}`)
    seen.add(key)
    near(exposure, model.size * volume, `${key}: exposição`)
    near(movement, model.size * volume * model.move, `${key}: movimento-base`)
    near(tick, model.size * volume * model.tick, `${key}: tick`)
    near(notional, model.size * volume * model.price, `${key}: nocional`)
    near(margin, notional / 100, `${key}: margem hipotética`)
  }
})

test('os orçamentos e a ordem publicada respeitam o teto estimado de 1% com reserva', async () => {
  const demo = await lesson('1-3-conta-demo')
  assert.match(demo, /saldo inicial de \*\*USD 1000\*\*/)
  assert.doesNotMatch(demo, /1000[–-]5000|USD 2500|USD 5000/)
  const rows = demo.split('\n').filter((line) => /^\| 1000 \|/.test(line))
  assert.equal(rows.length, 1)
  for (const row of rows) {
    const [equity, budget] = cells(row).map(Number)
    near(budget, equity * 0.01, 'orçamento da Demo')
  }

  const execution = await lesson('1-4-ordem-mercado')
  const data = Object.fromEntries(execution.split('\n')
    .filter((line) => line.startsWith('| ') && line.includes(' | '))
    .map((line) => cells(line)))
  const [equity, budget] = numbers(data['Capital líquido / orçamento de 1%'])
  const [reserve] = numbers(data['Reserva de comissão e slippage'])
  const [bid, ask] = numbers(data['Bid / Ask de entrada'])
  const [stop, take] = numbers(data['Stop Loss / Take Profit de compra'])
  const [stopPips, takePips] = numbers(data['Distância até SL / até TP'])
  const [perLot] = numbers(data['Perda bruta em 1.00 lote até SL'])
  const [volume] = numbers(data['Volume calculado e permitido no cenário'])
  const [gross, recordedReserve, total] = numbers(data['Perda bruta / reserva / total estimado'])
  near(budget, equity * 0.01, 'orçamento da ordem')
  near(stopPips, (ask - stop) / 0.0001, 'distância ao SL')
  near(takePips, (take - ask) / 0.0001, 'distância ao TP')
  near(perLot, (ask - stop) * 100000, 'perda por lote')
  near(volume, Math.floor(((budget - reserve) / perLot + 1e-10) / 0.01) * 0.01,
    'volume arredondado para baixo')
  near(gross, perLot * volume, 'perda pelo movimento até SL')
  near(recordedReserve, reserve, 'reserva publicada')
  near(total, gross + reserve, 'risco total estimado')
  assert.ok(total <= budget)
  const initialLossText = execution.match(/marcação inicial aproximada de \*\*−USD ([\d.,]+)\*\*/)?.[1]
  const initialLoss = Number(initialLossText?.replace(',', '.'))
  near(initialLoss, (ask - bid) * 100000 * volume, 'marcação inicial pelo spread')
  const balance = execution.match(/saldo USD (\d+), resultado −USD ([\d.,]+),\s+equity USD ([\d.,]+), margem USD ([\d.,]+); margem livre \*\*USD ([\d.,]+)\*\*/)
  assert.ok(balance, 'exemplo de saldo/equity/margem livre não encontrado')
  const [saldo, loss, liquid, margin, free] = balance.slice(1).map((value) => Number(value.replace(',', '.')))
  near(liquid, saldo - loss, 'equity simplificada')
  near(free, liquid - margin, 'margem livre simplificada')
})

test('as quatro aulas preservam resumo inicial, exercícios, fontes e limite editorial', async () => {
  for (const name of ['1-1-terreno-usd', '1-2-mt5-essencial', '1-3-conta-demo', '1-4-ordem-mercado']) {
    const text = await lesson(name)
    assert.match(text, /^# Aula 1\.[1-4][^\n]*\n\n::: tip Resumo Pareto/)
    assert.match(text, /## Objetivo e pré-requisitos/)
    assert.match(text, /## .*([Ee]xercício|Faça)/)
    assert.match(text, /## Fontes e próximo passo/)
    assert.match(text, /2026-11-21/)
    assert.match(text, /https:\/\/(www\.metatrader5\.com|www\.mql5\.com)\//)
    assert.ok(text.split(/\s+/).filter(Boolean).length <= 900, `${name} excedeu 900 palavras`)
  }
})

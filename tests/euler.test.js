import fs from 'fs'
import path from 'path'
import test from 'node:test'
import assert from 'assert/strict'
import solutions from './solutions.js'

for (const filename of fs.readdirSync('src')) {
  const testId = path.basename(filename, '.js')
  if (!testId in solutions) continue
  test(testId, async () => {
    const { default: solve } = await import(`../src/${filename}`)
    assert.equal(solve(), solutions[testId])
  })
}

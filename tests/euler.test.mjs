import fs from 'fs'
import path from 'path'
import solutions from './solutions.mjs'

fs.readdirSync('src')
  .map((filename) => path.basename(filename, '.mjs'))
  .filter((id) => id in solutions)
  .forEach((id) => {
    test(id, async () => {
      const { default: solve } = await import(`../src/${id}.mjs`)
      expect(solve()).toStrictEqual(solutions[id])
    })
  })

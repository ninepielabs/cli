const { build } = require('esbuild')
const path = require('path')
const fs = require('fs')

const rootDir = process.cwd()

const distDir = path.resolve(rootDir, 'dist')

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true })
}

build({
  entryPoints: ['src/index.ts'],
  format: 'cjs',
  bundle: true,
  platform: 'node',
  outfile: path.resolve(distDir, 'index.js'),
})

import path from 'path'
import fs from 'fs'
import { getPrompts } from './prompts'
import log from './utils/log'
import { cloneTemplate } from './utils/cloneTemplate'

export async function createApp(name?: string) {
  const options = await getPrompts({ name })

  if (fs.existsSync(path.resolve(process.cwd(), options.name))) {
    log.error('The path already exists!')
  }

  await cloneTemplate({
    repo: options.repo,
    path: path.resolve(process.cwd(), options.name),
  })

  process.exit(1)
}

import git from 'simple-git'
import ora from 'ora'
import path from 'path'
import fs from 'fs'
import log from './log'

const spinner = ora()

interface CloneTemplateOptions {
  repo: string
  path: string
}

export const cloneTemplate = ({ repo, path: appPath }: CloneTemplateOptions) => {
  const _git = git(appPath)
  spinner.start('Start cloning template...')
  return _git
    .clone(repo)
    .then(() => {
      spinner.succeed()
      const dotGitPath = path.resolve(appPath, '.git')
      if (fs.existsSync(dotGitPath)) {
        fs.rmSync(dotGitPath, { recursive: true })
      }
      log.success('Cloned template successfully!')
    })
    .catch(() => {
      spinner.fail()
      log.error('Failed to clone template!')
    })
}

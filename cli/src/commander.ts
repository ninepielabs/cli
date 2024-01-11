import { program } from 'commander'
import { createApp } from './create-app'
import pkg from '../package.json'

export function defineCommander() {
  program.version(pkg.version).usage('<command> [options]')

  program
    .command('create <app-name>')
    .description('create a new project')
    .action((name) => {
      createApp(name)
    })

  program.parse()
}

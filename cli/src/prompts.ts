import prompts from 'prompts'
import { gitTemplates } from './config/templates'

const questions: prompts.PromptObject[] = [
  {
    type: 'text',
    name: 'name',
    message: 'Enter your project name:',
    initial: 'MyApp',
    validate: (value) => (value ? true : 'Please enter a project name'),
  },
  {
    type: 'select',
    name: 'repo',
    message: 'Select an template:',
    initial: 0,
    validate: (value) => (value ? true : 'Please enter a project name'),
    choices: gitTemplates.map((t) => ({ title: t.name, value: t.url })),
  },
]

type Options = {
  name?: string
}

export async function getPrompts(opts: Options = {}) {
  const { name } = opts

  let _questions = questions

  // filter
  if (name) {
    _questions = _questions.filter((q) => q.name !== 'name')
  }

  const response = await prompts(_questions)
  return response
}

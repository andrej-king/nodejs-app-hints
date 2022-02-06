import type {Config} from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  // rootDir: './tests', // dir with tests
  testRegex: '.e2e-spec.ts$',
  coverageDirectory: './var/coverage' // where save coverage result
}

export default config

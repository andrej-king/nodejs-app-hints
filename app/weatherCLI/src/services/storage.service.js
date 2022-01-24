import {homedir} from 'os'
import {join, dirname, extname, relative, isAbsolute, resolve, sep} from 'path'

const filePath = join(homedir(), 'weather-data.json')

const saveKeyValue = (key, value) => {
  console.log(`filePath: ${filePath}`)
  console.log(key, value)
}

// eslint-disable-next-line no-unused-vars
const examples = () => {
  console.log(`filePath: ${filePath}`)
  console.log(`dirname: ${dirname(filePath)}`)
  console.log(`extname: ${extname(filePath)}`)
  console.log(`relative: ${relative(filePath, dirname(filePath))}`)
  console.log(`isAbsolute: ${isAbsolute(filePath)}`)
  console.log(`resolve: ${resolve('..')}`)
  console.log(`sep: ${sep}`)
}

export {saveKeyValue}

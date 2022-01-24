import {homedir} from 'os'
import {join, dirname, extname, relative, isAbsolute, resolve, sep} from 'path'
import {promises} from 'fs'

// const filePath = join(homedir(), 'weather-data.json') // on linux dir '/root'
const filePath = process.env.STORAGE_PATH + '/.weather-data.json'

const TOKEN_DICTIONARY = {
  token: 'token',
  city: 'city'
}

const saveKeyValue = async (key, value) => {
  let data = {}
  if (await isExists(filePath)) {
    const file = await promises.readFile(filePath)
    data = JSON.parse(file)
  }

  data[key] = value

  await promises.writeFile(filePath, JSON.stringify(data))
}

const getKeyValue = async (key) => {
  if (await isExists(filePath)) {
    const file = await promises.readFile(filePath)
    const data = JSON.parse(file)
    return data[key]
  }
  return undefined
}

const isExists = async (path) => {
  try {
    await promises.stat(path)
    return true

  // eslint-disable-next-line no-unused-vars
  } catch (e) {
    return false
  }
}

// eslint-disable-next-line no-unused-vars
const examples = () => {
  console.log(join(homedir(), 'weather-data.json')) // on linux dir '/root'
  console.log(`filePath: ${filePath}`)
  console.log(`dirname: ${dirname(filePath)}`)
  console.log(`extname: ${extname(filePath)}`)
  console.log(`relative: ${relative(filePath, dirname(filePath))}`)
  console.log(`isAbsolute: ${isAbsolute(filePath)}`)
  console.log(`resolve: ${resolve('..')}`)
  console.log(`sep: ${sep}`)
}

export {saveKeyValue, getKeyValue, TOKEN_DICTIONARY}

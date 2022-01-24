#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import {printHelp, printSuccess, printError} from './services/log.service.js'
import {saveKeyValue} from './services/storage.service.js'

const saveToken = async (token) => {
  try {
    await saveKeyValue('token', token)
    printSuccess('Токен сохранен')
  } catch (e) {
    printError(e.message)
  }
}

const initCLI = () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp()
    // Вывод help
  }
  if (args.s) {
    // printSuccess(args.s)
    // Сохранить название города
  }
  if (args.t) {
    saveToken(args.t)
    // printSuccess(args.t)
  }

  // printError('Some error')
  // вывести погоду
}

initCLI()

#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import {printHelp, printSuccess, printError} from './services/log.service.js'
import {saveKeyValue, TOKEN_DICTIONARY} from './services/storage.service.js'
import {getWeather} from "./services/api.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError('Не передан token')
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
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
  getWeather('tallinn')
  // printError('Some error')
  // вывести погоду
}

initCLI()

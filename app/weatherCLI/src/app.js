#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import {printHelp, printSuccess, printError} from './services/log.service.js'

const initCLI = () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp()
    // Вывод help
  }
  if (args.s) {
    printSuccess(args.s)
    // Сохранить название города
  }
  if (args.t) {
    printSuccess(args.t)
    // Сохранить токен
  }

  printError('Some error')
  // вывести погоду
}

initCLI()

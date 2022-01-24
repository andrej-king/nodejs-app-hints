#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import {printHelp, printSuccess} from "./services/log.service.js";

const initCLI = () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp()
    // Вывод help
  }
  if (args.s) {
    // Сохранить название города
  }
  if (args.t) {
    // Сохранить токен
  }
  // вывести погоду
}

initCLI()

#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import {printHelp, printSuccess, printError, printWeather} from './services/log.service.js'
import {saveKeyValue, TOKEN_DICTIONARY} from './services/storage.service.js'
import {getWeather, getIcon} from './services/api.service.js'

const saveToken = async (token) => {
  if (!token.length) {
    printError('Не передан токен')
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSuccess('Токен сохранен')
  } catch (e) {
    printError(e.message)
  }
}

const saveCity = async (city) => {
  if (!city.length) {
    printError('Не передано название города')
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city)
    printSuccess('Название города сохранено')
  } catch (e) {
    printError(e.message)
  }
}

const getForecast = async () => {
  try {
    const weather = await getWeather()
    printWeather(weather, getIcon(weather.weather[0].icon))
    // console.log(weather) // Красивый вывод погоды
  } catch (e) {
    if (e?.response?.status === 404) {
      printError('Неверно указан город')
    } else if (e?.response?.status === 401) {
      printError('Неверное указан токен')
    } else {
      printError(e.message)
    }
  }
}

const initCLI = () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp()
  }
  if (args.s) {
    saveCity(args.s)
  }
  if (args.t) {
    saveToken(args.t)
  }

  getForecast()
}

initCLI()

import chalk from 'chalk' // colored console
import dedent from 'dedent-js' // trim spaces

const printError = (error) => {
  console.log(
    dedent(`
      ${chalk.bgRed(' ERROR ')}
      ${error}
    `)
  )
}

const printSuccess = (message) => {
  console.log(
    dedent(`
      ${chalk.bgGreen(' SUCCESS ')}
      ${message}
    `)
  )
}

const printHelp = () => {
  console.log(
    dedent(`
      ${chalk.bgCyan(' HELP ')}
      Без параметров - вывод погоды
      -s [CITY] для установки города
      -h для вывода помощи
      -t [API_KEY] для сохранения токена
    `)
  )
}

const printWeather = (res, icon) => {
  console.log(
    dedent(`
      ${chalk.bgYellow(' WEATHER ')} Погода в городе ${res.name}
      ${icon} ${res.weather[0].description}
      Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
      Влажность: ${res.main.humidity}%
      Скорость ветра: ${res.wind.speed} м/c
    `)
  )
}

export {printSuccess, printError, printHelp, printWeather}

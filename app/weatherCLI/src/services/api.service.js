// import https from 'https'
import {getKeyValue, TOKEN_DICTIONARY} from './storage.service.js'
import axios from 'axios'

const getWeather = async () => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token)
  if (!token) {
    throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
  }

  const city = await getKeyValue(TOKEN_DICTIONARY.city)
  if (!city) {
    throw new Error('Не задано название города, задайте его через команду -s [CITY]')
  }

  const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: 'ru',
      units: 'metric'
    }
  })

  return data

  // default https request
  // const url = new URL('https://api.openweathermap.org/data/2.5/weather')
  // url.searchParams.append('q', city)
  // url.searchParams.append('appid', token)
  // url.searchParams.append('lang', 'ru')
  // url.searchParams.append('units', 'metric')
  //
  // https.get(url, (response) => {
  //   let result = ''
  //   response.on('data', (chunk) => {
  //     result += chunk
  //   })
  //
  //   response.on('end', () => {
  //     console.log(result)
  //   })
  // })
}

export {getWeather}

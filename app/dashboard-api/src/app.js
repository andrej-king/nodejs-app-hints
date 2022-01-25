import express from 'express'
import {userRouter} from './users/users.js'

const port = process.env.PORT || 3000
const app = express()

// глобальный обработчик каждого запросы
app.use((req, res, next) => {
  console.log('Время ', Date.now())
  next()
})

// middleware для запросов
app.all('/hello', (req, res, next) => {
  console.log('all')
  next()
})

app.get('/hello', (req, res) => {
  console.log('hello')
  throw new Error('Some error')
  res.send('Hello')
})

app.use('/users', userRouter)

// error handler
app.use((err, req, res, next) => {
  console.log(err.message)
  res.status(500).json(err.message)
})

app.listen(port, () => {
  console.log(`Server running on ${port} port.`)
})

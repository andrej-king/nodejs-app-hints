import express, {Request, Response, NextFunction} from 'express'
import {userRouter} from './users/users.js'

const port = process.env.PORT || 3000
const app = express()

// глобальный обработчик каждого запросы
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Время ', Date.now())
  next()
})

// middleware для запросов
app.all('/hello', (req: Request, res: Response, next: NextFunction) => {
  console.log('all')
  next()
})

app.get('/hello', (req: Request, res: Response) => {
  console.log('hello')
  throw new Error('Some error')
  // res.send('Hello')
})

app.use('/users', userRouter)

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message)
  res.status(500).json(err.message)
})

app.listen(port, () => {
  console.log(`Server running on ${port} port.`)
})

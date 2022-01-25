import express from 'express'

const userRouter = express.Router()

// обработчик роутов users
userRouter.use((req, res, next) => {
  console.log('Обработчик users', Date.now())
  next()
})

userRouter.post('/login', (req, res) => {
  res.send('login')
})

userRouter.post('/register', (req, res) => {
  res.send('register')
})

export {userRouter}

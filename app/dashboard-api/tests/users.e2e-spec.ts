import {App} from '../src/app'
import {boot} from '../src/main'
import request from 'supertest'

let application: App

// В идеале надо сделать чистую БД и накатить миграции для создания таблиц
beforeAll( async () => {
  const {app} = await boot
  application = app
})

afterAll(async () => {
  await application.close()
})

describe('Users e2e', () => {
  it('Register error', async () => {
    // application.app - express instance
    // Если такого пользователя ещё нету в базе - тест упадёт
    const res = await request(application.app).post('/users/join').send({
      email: 'test@app.com',
      password: 'example'
    })

    expect(res.statusCode).toBe(422)
  })
})

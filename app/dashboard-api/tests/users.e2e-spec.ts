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
    const res = await request(application.app)
      .post('/users/join')
      .send({
        email: 'test@app.com',
        password: 'example',
      })

    expect(res.statusCode).toEqual(422)
  })

  it('Login - success', async () => {
    // Если такого пользователя ещё нету в базе - тест упадёт
    const res = await request(application.app)
      .post('/users/login')
      .send({
        email: 'test@app.com',
        password: 'example',
      })

    expect(res.statusCode).toEqual(200)
    expect(res.body.jwt).not.toBeUndefined()
  })

  it('Login - error', async () => {
    // Если такого пользователя ещё нету в базе - тест упадёт
    const res = await request(application.app)
      .post('/users/login')
      .send({
        email: 'test@app.com',
        password: 'example1',
      })

    expect(res.statusCode).toEqual(401)
    expect(res.body.err).not.toBeUndefined()
  })

  it('Info - success', async () => {
    // Если такого пользователя ещё нету в базе - тест упадёт
    const userEmail =  'test@app.com'
    const userPassword = 'example'

    const login = await request(application.app)
      .post('/users/login')
      .send({
        email:userEmail,
        password: userPassword,
      })

    const res = await request(application.app)
      .get('/users/info')
      .set('Authorization', `Bearer ${login.body.jwt}`)

    expect(res.statusCode).toEqual(200)
    expect(res.body.email).toEqual(userEmail)
  })

  it('Info - wrong token', async () => {
    const res = await request(application.app)
      .get('/users/info')
      .set('Authorization', `Bearer 123`)

    expect(res.statusCode).toEqual(401)
    expect(res.body.err).not.toBeUndefined()
  })
})

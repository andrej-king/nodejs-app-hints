import {Container} from 'inversify'
import {IUsersRepository} from './users.repository.interface'
import {IUsersService} from './users.service.interface'
import {TYPES} from '../types'
import {UsersService} from './users.service'
import {User} from './user.entity'
import {UserModel} from '@prisma/client'
import 'reflect-metadata'

// Unit тесты

// mock
// const ConfigServiceMock: IConfigService = {
//   get: jest.fn()
// }

const UsersRepositoryMock: IUsersRepository = {
  create: jest.fn(),
  find: jest.fn()
}

const container = new Container()
// let configService: IConfigService
let usersRepository: IUsersRepository
let usersService: IUsersService

// Реальный UserService и mock его зависимостей
beforeAll(() => {
  container.bind<IUsersService>(TYPES.UserService).to(UsersService)
  // container.bind<IConfigService>(TYPES.ConfigService).toConstantValue(ConfigServiceMock)
  container
    .bind<IUsersRepository>(TYPES.UsersRepository)
    .toConstantValue(UsersRepositoryMock)

  // configService = container.get<IConfigService>(TYPES.ConfigService)
  usersRepository = container.get<IUsersRepository>(TYPES.UsersRepository)
  usersService = container.get<IUsersService>(TYPES.UserService)
})

beforeEach(() => {
  usersRepository.create = jest.fn().mockImplementationOnce(
    (user: User): UserModel => ({
      id: 1,
      name: user.name,
      email: user.email,
      password: user.password
    })
  )
})

describe('User service', () => {
  it('createUser - success', async () => {
    // configService.get = jest.fn().mockReturnValueOnce('1')

    const userEmail: string = 'user@test.app'
    const userName: string = 'John'
    const userPassword: string = 'myBestPassword'

    const createdUser = await usersService.createUser({
      email: userEmail,
      name: userName,
      password: userPassword
    })

    expect(createdUser?.id).toEqual(1)
    expect(createdUser?.password).not.toEqual(userPassword)
  })

  it('validateUser - success', async () => {
    const userEmail: string = 'user@test.app'
    const userName: string = 'John'
    const userPassword: string = 'myBestPassword'

    const createdUser = await usersService.createUser({
      email: userEmail,
      name: userName,
      password: userPassword
    })

    usersRepository.find = jest.fn().mockReturnValueOnce(createdUser)

    // сравнивается переданный пароль с паролем у созданного ранее пользователя
    const result = await usersService.validateUser({
      email: userEmail,
      password: userPassword
    })

    expect(result).toBeTruthy()
  })

  it('validateUser - wrong password', async () => {
    const userEmail: string = 'user@test.app'
    const userName: string = 'John'
    const userPassword: string = 'myBestPassword'

    const createdUser = await usersService.createUser({
      email: userEmail,
      name: userName,
      password: userPassword
    })

    usersRepository.find = jest.fn().mockReturnValueOnce(createdUser)

    // сравнивается переданный пароль с паролем у созданного ранее пользователя
    const result = await usersService.validateUser({
      email: userEmail,
      password: '123'
    })

    expect(result).toBeFalsy()
  })

  it('validateUser - user not found', async () => {
    const userEmail: string = 'user@test.app'
    const userName: string = 'John'
    const userPassword: string = 'myBestPassword'

    const createdUser = await usersService.createUser({
      email: userEmail,
      name: userName,
      password: userPassword
    })

    usersRepository.find = jest.fn().mockReturnValueOnce(null)

    // сравнивается переданный пароль с паролем у созданного ранее пользователя
    const result = await usersService.validateUser({
      email: userEmail,
      password: userPassword
    })

    expect(result).toBeFalsy()
  })
})

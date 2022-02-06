import {Container} from 'inversify'
import {IUsersRepository} from './users.repository.interface'
import {IUsersService} from './users.service.interface'
import {TYPES} from '../types'
import {UsersService} from './users.service'
import {User} from './user.entity'
import {UserModel} from '@prisma/client'
import 'reflect-metadata'

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

let createdUser: UserModel | null

describe('User service', () => {
  it('createUser', async () => {
    // configService.get = jest.fn().mockReturnValueOnce('1')
    usersRepository.create = jest.fn().mockImplementationOnce(
      (user: User): UserModel => ({
        id: 1,
        name: user.name,
        email: user.email,
        password: user.password
      })
    )

    createdUser = await usersService.createUser({
      email: 'user@test.app',
      name: 'John',
      password: 'myBestPassword'
    })

    expect(createdUser?.id).toEqual(1)
    expect(createdUser?.password).not.toEqual('myBestPassword')
  })
})

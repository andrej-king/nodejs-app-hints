import {App} from './app'
import {LoggerService} from './logger/logger.service'
import {UsersController} from './users/users.controller'
import {ExceptionFilter} from './errors/exception.filter'
import {Container, ContainerModule, interfaces} from 'inversify'
import {ILogger} from './logger/logger.interface'
import {TYPES} from './types'
import {IExceptionFilter} from './errors/exception.filter.interface'
import 'reflect-metadata'
import {IUsersService} from './users/users.service.interface'
import {IUsersController} from './users/users.controller.interface'
import {UsersService} from './users/users.service'
import {IConfigService} from './config/config.service.interface'
import {ConfigService} from './config/config.service'
import {PrismaService} from './database/prisma.service'
import {UsersRepository} from './users/users.repository'
import {IUsersRepository} from './users/users.repository.interface'

export interface IBootstrapReturn {
  appContainer: Container
  app: App
}

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<ILogger>(TYPES.ILogger).to(LoggerService).inSingletonScope()
  bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter)
  bind<IUsersController>(TYPES.UserController).to(UsersController)
  bind<IUsersService>(TYPES.UserService).to(UsersService)
  bind<IUsersRepository>(TYPES.UsersRepository).to(UsersRepository).inSingletonScope()
  bind<PrismaService>(TYPES.PrismaService).to(PrismaService).inSingletonScope()
  bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope()
  bind<App>(TYPES.Application).to(App)
})

function bootstrap(): IBootstrapReturn {
  const appContainer = new Container()
  appContainer.load(appBindings)
  const app = appContainer.get<App>(TYPES.Application)
  app.init()
  return {appContainer, app}
}

export const {app, appContainer} = bootstrap()

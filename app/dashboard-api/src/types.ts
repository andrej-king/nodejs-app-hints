import {UsersController} from './users/users.controller'
import {ExceptionFilter} from './errors/exception.filter'

export const TYPES = {
  Application: Symbol.for('Application'),
  ILogger: Symbol.for('ILogger'),
  UserController: Symbol.for('UserController'),
  UserService: Symbol.for('UserService'),
  ExceptionFilter: Symbol.for('ExceptionFilter'),
  ConfigService: Symbol.for('ConfigService')
}

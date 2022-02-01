import {UsersController} from './users/users.controller'
import {ExceptionFilter} from './errors/exception.filter'

export const TYPES = {
  Application: Symbol.for('Application'),
  ILogger: Symbol.for('ILogger'),
  UsersController: Symbol.for('UsersController'),
  ExceptionFilter: Symbol.for('ExceptionFilter')
}

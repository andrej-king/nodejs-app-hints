import {BaseController} from '../common/base.controller'
import {NextFunction, Request, Response} from 'express'
import {HttpError} from '../errors/http-error'
import {ILogger} from '../logger/logger.interface'
import {inject, injectable} from 'inversify'
import {TYPES} from '../types'
import 'reflect-metadata'
import {IUsersController} from './users.controller.interface'
import {UserLoginDto} from './dto/user-login.dto'
import {UserJoinDto} from './dto/user-join.dto'

@injectable()
export class UsersController
  extends BaseController
  implements IUsersController
{
  constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
    super(loggerService)

    this.bindRoutes([
      {path: '/join', method: 'post', func: this.join},
      {path: '/login', method: 'post', func: this.login}
    ])
  }

  login(req: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction): void {
    console.log(req.body)
    // this.ok(res, 'login')
    next(new HttpError(401, 'Ошибка авторизации', 'login'))
  }

  join(req: Request<{}, {}, UserJoinDto>, res: Response, next: NextFunction): void {
    console.log(req.body)
    this.ok(res, 'registration')
  }
}

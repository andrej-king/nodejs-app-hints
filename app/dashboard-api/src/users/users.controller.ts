import {BaseController} from '../common/base.controller'
import {NextFunction, Request, Response} from 'express'
import {HttpError} from '../errors/http-error'
import {ILogger} from '../logger/logger.interface'

export class UsersController extends BaseController {
  constructor(
    logger: ILogger
  ) {
    super(logger)

    this.bindRoutes([
      {path: '/join', method: 'post', func: this.join},
      {path: '/login', method: 'post', func: this.login}
    ])
  }

  login(req: Request, res: Response, next: NextFunction) {
    // this.ok(res, 'login')
    next(new HttpError(401, 'Ошибка авторизации', 'login'))
  }

  join(req: Request, res: Response, next: NextFunction) {
    this.ok(res, 'registration')
  }
}

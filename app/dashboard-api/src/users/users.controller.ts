import {BaseController} from '../common/base.controller'
import {LoggerService} from '../logger/logger.service'
import {NextFunction, Request, Response} from 'express'

export class UsersController extends BaseController {
  constructor(
    logger: LoggerService
  ) {
    super(logger)

    this.bindRoutes([
      {path: '/join', method: 'post', func: this.join},
      {path: '/login', method: 'post', func: this.login}
    ])
  }

  login(req: Request, res: Response, next: NextFunction) {
    this.ok(res, 'login')
  }

  join(req: Request, res: Response, next: NextFunction) {
    this.ok(res, 'registration')
  }
}

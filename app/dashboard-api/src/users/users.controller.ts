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
import {IUsersService} from './users.service.interface'
import {ValidateMiddleware} from '../common/validate.middleware'

@injectable()
export class UsersController
  extends BaseController
  implements IUsersController
{
  constructor(
    @inject(TYPES.ILogger) private loggerService: ILogger,
    @inject(TYPES.UserService) private userService: IUsersService
  ) {
    super(loggerService)

    this.bindRoutes([
      {
        path: '/join',
        method: 'post',
        func: this.join,
        middlewares: [new ValidateMiddleware(UserJoinDto)]
      },
      {path: '/login', method: 'post', func: this.login}
    ])
  }

  login(
    req: Request<{}, {}, UserLoginDto>,
    res: Response,
    next: NextFunction
  ): void {
    console.log(req.body)
    // this.ok(res, 'login')
    next(new HttpError(401, 'Ошибка авторизации', 'login'))
  }

  async join(
    {body}: Request<{}, {}, UserJoinDto>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const result = await this.userService.createUser(body)

    if (!result) {
      return next(new HttpError(422, 'Такой пользователь уже существует'))
    }

    this.ok(res, {email: result.email, id: result.id})
  }
}

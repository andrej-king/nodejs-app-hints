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
import {sign} from 'jsonwebtoken'

@injectable()
export class UsersController
  extends BaseController
  implements IUsersController
{
  constructor(
    @inject(TYPES.ILogger) private loggerService: ILogger,
    @inject(TYPES.UserService) private userService: IUsersService
    // @inject(TYPES.ConfigService) private configService: ConfigService
  ) {
    super(loggerService)

    this.bindRoutes([
      {
        path: '/join',
        method: 'post',
        func: this.join,
        middlewares: [new ValidateMiddleware(UserJoinDto)]
      },
      {
        path: '/login',
        method: 'post',
        func: this.login,
        middlewares: [new ValidateMiddleware(UserLoginDto)]
      }
    ])
  }

  async login(
    {body}: Request<{}, {}, UserLoginDto>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const result = await this.userService.validateUser(body)
    if (!result) {
      return next(new HttpError(401, 'Ошибка авторизации', 'login'))
    }

    const jwt = await this.signJWT(body.email, process.env.JWT_SECRET as string)

    this.ok(res, {jwt})
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

  private async signJWT(email: string, secret: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      sign(
        {
          email,
          iat: Math.floor(Date.now() / 1000)
        },
        secret,
        {
          algorithm: 'HS256'
        },
        (err, token) => {
          if (err) {
            reject(err)
          }

          resolve(token as string)
        }
      )
    })
  }
}

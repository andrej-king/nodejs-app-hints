import {Response, Router} from 'express'
import {IControllerRoute} from './route.interface'
import {ILogger} from '../logger/logger.interface'

export abstract class BaseController {
  private readonly _router: Router
  private logger: ILogger

  protected constructor(logger: ILogger) {
    this._router = Router()
    this.logger = logger
  }

  public get router(): Router {
    return this._router
  }

  public send<T>(res: Response, code: number, message: T) {
    res.type('application/json')
    return res.status(code).json(message)
  }

  public ok<T>(res: Response, message: T) {
    return this.send<T>(res, 200, message)
  }

  public created(res: Response) {
    return res.status(201)
  }

  protected bindRoutes(routes: IControllerRoute[]) {
    for (const route of routes) {
      this.logger.log(`[${route.method}] ${route.path}`)
      const handler = route.func.bind(this)
      this.router[route.method](route.path, handler)
    }
  }
}
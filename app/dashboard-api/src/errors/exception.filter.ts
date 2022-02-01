import {NextFunction, Request, Response} from 'express'
import {IExceptionFilter} from './exception.filter.interface'
import {HttpError} from './http-error'
import {ILogger} from '../logger/logger.interface'

export class ExceptionFilter implements IExceptionFilter {
  private logger: ILogger

  constructor(logger: ILogger) {
    this.logger = logger
  }

  catch(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof HttpError) {
      this.logger.error(`[${err.context}] [${err.staticCode}] : ${err.message}`)
      res.status(err.staticCode).json({err: err.message})
    } else {
      this.logger.error(`${err.message}`)
      res.status(500).json({err: err.message})
    }
  }
}

import {Logger} from 'tslog'

export class LoggerService {
  private logger: Logger

  constructor() {
    this.logger = new Logger({
      displayInstanceName: false,
      displayLoggerName: false,
      displayFilePath: 'hidden',
      displayFunctionName: false,
    })
  }

  log(...args: unknown[]) {
    this.logger.info(...args)
  }

  error(...args: unknown[]) {
    // отправка в senty / rollbar
    this.logger.error(...args)
  }

  war(...args: unknown[]) {
    this.logger.warn(...args)
  }
}

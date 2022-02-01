export class HttpError extends Error {
  staticCode: number
  context?: string

  constructor(statusCode: number, message: string, context?: string) {
    super(message)
    this.staticCode = statusCode
    this.message = message
    this.context = context
  }
}

import { AuthErrorCodes } from "firebase/auth"

export class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ValidationError"
  }

  static throwValidationError(code: string) {
    if (code == AuthErrorCodes.INVALID_EMAIL) {
      throw new ValidationError('The email provided is invalid')
    }

    if (code == AuthErrorCodes.EMAIL_EXISTS) {
      throw new ValidationError('The provided email is already used by an user')
    }

    if (code == AuthErrorCodes.WEAK_PASSWORD) {
      throw new ValidationError('The password should be more than 6 characters long')
    }

    if (code == AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
      throw new ValidationError('Invalid login credentials')
    }

    if (code == AuthErrorCodes.INVALID_PASSWORD) {
      throw new ValidationError('Wrong password')
    }

    if (code == AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER) {
      throw new ValidationError('Too many requests... Try again later')
    }
  }
}

export class ConnectionError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ConnectionError"
  }
}

export class DatabaseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "DatabaseError"
  }
}
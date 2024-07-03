export enum ResMessage {
  /* 400 */
  BAD_REQUEST = 'BAD REQUEST',
  PASSWORD_NOT_MATCH = 'PASSWORD NOT MATCH',

  /* 401 */
  UNAUTHORIZED = 'UNAUTHORIZED',
  NO_TOKEN_INFORMATION = 'NO TOKEN INFORMATION',
  EXPIRED_TOKEN = 'EXPRIED TOKEN',
  MALFORMED_TOKEN = 'MALFORMED TOKEN',

  /* 403 */
  FORBIDDEN = 'FORBIDDEN',

  /* 404 */
  NOT_FOUND = 'NOT FOUND',

  /* 409 */
  ALREADY_REGISTRATION = 'ALREADY REGISTRATION',
  ALREADY_AUTHORIZED = 'ALREADY AUTHORIZED',

  /* 500 */
  INTERNAL_SERVER_ERROR = 'INTERNAL SERVER ERROR',
}
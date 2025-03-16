const errorTypes: Record<number, string> = {
  400: 'badRequest',
  401: 'unauthorized',
  402: 'paymentRequired',
  403: 'forbidden',
  404: 'notFound',
  405: 'methodNotAllowed',
  406: 'notAcceptable',
  407: 'proxyAuthenticationRequired',
  408: 'requestTimeout',
  409: 'conflict',
  410: 'gone',
  411: 'lengthRequired',
  412: 'preconditionFailed',
  413: 'payloadTooLarge',
  414: 'uriTooLong',
  415: 'unsupportedMediaType',
  416: 'rangeNotSatisfiable',
  417: 'expectationFailed',
  418: 'imATeapot', // April Fools' joke (RFC 2324)
  421: 'misdirectedRequest',
  422: 'unprocessableEntity',
  423: 'locked',
  424: 'failedDependency',
  426: 'upgradeRequired',
  428: 'preconditionRequired',
  429: 'tooManyRequests',
  431: 'requestHeaderFieldsTooLarge',
  451: 'unavailableForLegalReasons',
};

export enum ErrorType {
  NOT_ACCESS_TOKEN = 'noAccessToken',
  NOT_REFRESH_TOKEN = 'noRefreshToken',
  INVALID_TOKEN = 'invalidToken',
  EXPIRED_TOKEN = 'expiredToken',
  EMAIL_NOT_VERIFIED = 'emailNotVerified',
  PERMISSION_DENIED = 'permissionDenied',
  USER_DISABLED = 'userDisabled',
}

export class HttpException extends Error {
  statusCode: number;
  errorType: string;

  constructor(statusCode: number, message?: any, errorType?: string) {
    if (typeof message === 'string') {
      super(message);
    } else if (typeof message === 'object') {
      super(JSON.stringify(message));
    } else {
      super(message);
    }
    this.statusCode = statusCode;
    if (!errorType) {
      this.errorType =
        errorTypes && 'statusCode' in errorTypes
          ? errorTypes[statusCode]
          : 'unknownError';
    } else {
      this.errorType = errorType;
    }
    this.errorType;
  }
}

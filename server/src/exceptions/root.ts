// message, htto status code, error codes, error


export class HttpException extends Error {
    message: string;
    errorCode: any;
    statusCode: number;
    errors: ErrorCode;

    constructor(message:string, errorCode: any, statusCode:number, errors: ErrorCode) {
        super(message)
        this.message = message,
        this.errorCode = errorCode,
        this.statusCode = statusCode,
        this.errors = errors
    }
}

export enum ErrorCode {
    USER_NOT_FOUND = 1001,
    USER_ALREADY_EXITS = 1002,
    INCOORRECT_PASSWORD = 1003,
    UNPROCESSABLE_ENTITY = 2001, 
    INTERNAL_EXCEPTION = 3001
}
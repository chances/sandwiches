/// <reference path="../declarations/tsd.d.ts" />

export class GenericError implements Error {
    public name: string;
    public message: string;
    public stack: string;

    constructor(message: string) {
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.message = message;
    }
}

export class ArgumentError extends GenericError {
    public name: string;
    public stack: string;

    constructor(message: string, public argumentName: string) {
        super(message);
    }
}

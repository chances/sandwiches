interface Function {
    name: string;
}

interface Error {
    captureStackTrace?: CaptureStackTraceImpl;
}

interface ErrorConstructor {
    captureStackTrace: CaptureStackTraceImpl;
}

interface CaptureStackTraceImpl {
    (error: Error, constructorOpt: any): void;
}

export class AppError extends Error{
   constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        // 4xx errors are 'fail', 5xx errors are 'error'
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        
        // Marks operational errors (trusted errors we can predict)
        this.isOperational = true;

        // Captures the stack trace so it doesn't pollute the custom class
        Error.captureStackTrace(this, this.constructor);
    }
}
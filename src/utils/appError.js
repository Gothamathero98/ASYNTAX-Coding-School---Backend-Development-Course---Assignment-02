class AppError extends Error {
 constructor(message, statusCode) {
 super(message);
 this.statusCode = statusCode;
 this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';
 this.isOperational = true; 
 Error.captureStackTrace(this, this.constructor);
 }
}
export default AppError;
// Usage inside any service:
// throw new AppError('Employee not found', 404);
// throw new AppError('Email already registered', 409);
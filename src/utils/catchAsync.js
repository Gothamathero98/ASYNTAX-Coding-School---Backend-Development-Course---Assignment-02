const catchAsync = (fn) => {
 return (req, res, next) => {
 fn(req, res, next).catch(next); // any thrown error goes to globalErrorHandler
 };
};
export default catchAsync;
// Usage in controller:
// export const getEmployee = catchAsync(async (req, res) => { ... });
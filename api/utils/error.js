export const errorHandler = (statusCode, message) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    console.error(`Error ${statusCode}: ${message}`);
    return error;
};

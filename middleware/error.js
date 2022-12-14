const ErrorResponse = require('../helpers/errorResponse')

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message
    error.statusCode = err.statusCode
    console.log(err)
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(x => x.message)
        error = new ErrorResponse(message, 400)
    }

    //duplicate value error
    if (err.code === 11000) {
        const message = 'Duplicate field entered';
        error = new ErrorResponse(message, 400)
    }
    if (err.name === 'CastError') {
        const message = 'Resource not found'
        error = new ErrorResponse(message, 404)
    }

    res.status(error.statusCode || 500).json({
        sucess: false,
        error: error.message || 'Server Error'
    })




}

module.exports = errorHandler
const successResponse = (res) => {
    return {
        success: true,
        statusCode: res.statusCode,
        message: res.message,
        response: res.response,
    }
}

const errorResponse = (error) => {
    return {
        success: false,
        statusCode: error.statusCode || 500,
        message: error.message,
        errror: error.stack
    }
}

module.exports = {
    successResponse,
    errorResponse,
}
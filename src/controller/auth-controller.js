const AuthService = require('../services/auth-service');
const { successResponse, errorResponse}= require('../utils/controller-response');
const authService = new AuthService();

const signup = async (req, res) => {
    try {
        const response = await authService.registerUser(req.body);
        res.status(response.statusCode).json(
            successResponse(response)
        );
    } catch (error) {
        res.status(error.statusCode || 500).json(
            errorResponse(error)
        );
    }
}

module.exports = {
    signup,
}
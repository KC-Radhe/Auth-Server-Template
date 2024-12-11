const AuthService = require('../services/auth-service');

const authService = new AuthService();

const signup = async (req, res) => {
    try {
        const response = await authService.registerUser(req.body);
        res.status(201).json({
            message: 'a new user created',
            data: response,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong!!! Internal error!!!'
        });
    }
}

module.exports = {
    signup,
}
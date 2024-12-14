const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie = async (payload, res) => {
    try {
        const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_TOKEN, { expiresIn: '1d' });

        res.cookie('access_token', accessToken, {
            httpOnly: true,
            sameSite: true,
            maxAge: 1000*60*60*24
    })
    return accessToken;    
    } catch (error) {
        throw error;
    }
}

module.exports = generateTokenAndSetCookie;
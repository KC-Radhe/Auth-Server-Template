const userRepository = require('../repository/user-repository');
const bcrypt = require('bcryptjs');
const generateTokenAndSetCookie = require('../utils/genToken&setcookie');

class authService {
    constructor() {
        this.userRepo = new userRepository();
    }

    async registerUser(data) {
        try {
            if(!data.email || !data.password) throw {
                statusCode: 400,
                message: 'Credentials Empty!!!'
            }
            const isEmailExists = await this.userRepo.getBy({email: data.email});
            if(isEmailExists) throw {
                statusCode: 409,
                message: 'Email already used!! Try another email.'
            }
            data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(8));
            const user = await this.userRepo.create(data);
            user.password = undefined;
            return {
                statusCode: 201,
                message: 'A user created.',
                response: user
            };
        } catch (error) {
            throw error;
        }
    }

    async loginUser(data, res) {
        try {
            if(!data.email || !data.password)  throw {
                statusCode: 400,
                message: 'Credentials Empty!!!'
            }
            const user = await this.userRepo.getBy({email: data.email});
            if(!user) throw {
                statusCode: 404,
                message: `Email doesn't exists`
            }
            const password = bcrypt.compareSync(data.password, user.password);
            if(!password) throw {
                statusCode: 401,
                message: 'Incorrect Password!!!'
            }
            const accessToken = await generateTokenAndSetCookie({ _id: user._id}, res);
            return {
                statusCode: 200,
                message: 'login successfully.',
                response: accessToken,
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = authService;
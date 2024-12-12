const userRepository = require('../repository/user-repository');
const bcrypt = require('bcryptjs');

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
}

module.exports = authService;
const userRepository = require('../repository/user-repository');

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
            const user = await this.userRepo.create(data);
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
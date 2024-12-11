const userRepository = require('../repository/user-repository');

class authService {
    constructor() {
        this.userRepo = new userRepository();
    }

    async registerUser(data) {
        try {
            if(!data.email || !data.password) throw {message: 'Credentials Empty!!!'}
            const user = await this.userRepo.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = authService;
const User = require('../models/user-model');
const crudRepository = require('./crud-repository');

class userRepository extends crudRepository {
    constructor() {
        super(User);
    }
}
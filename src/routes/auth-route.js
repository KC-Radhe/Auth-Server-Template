const router = require('express').Router();
const authController = require('../controller/auth-controller');


router.post('/auth/signup', authController.signup);

module.exports = router;
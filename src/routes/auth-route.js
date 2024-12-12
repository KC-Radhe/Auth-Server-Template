const router = require('express').Router();
const authController = require('../controller/auth-controller');


router.post('/auth/signup', authController.signup);
router.post('/auth/login', authController.login);

module.exports = router;
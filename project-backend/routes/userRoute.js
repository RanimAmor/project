var express = require('express');
var router = express.Router();

import * as userController from '../controllers/userController'

router.route('/signup').post(userController.signup);
router.route('/signin').post(userController.signin);

module.exports = router;
var express = require('express');
var router = express.Router();

import * as categoryController from '../controllers/categoryController'

router.route('/plus').post(categoryController.plus);
router.route('/get').get(categoryController.getList);
router.route('/getById/:id').get(categoryController.getById);


module.exports = router;
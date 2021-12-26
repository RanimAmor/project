var express = require('express');
var router = express.Router();

import * as offerController from '../controllers/offerController'

router.route('/plus').post(offerController.plus);
router.route('/get').get(offerController.getList);
router.route('/get/:id').get(offerController.getListby);
router.route('/getById/:id').get(offerController.getById);


module.exports = router;
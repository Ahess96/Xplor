const express = require('express');
const router = express.Router();
const recreationCtrl = require('../../controllers/api/recreation')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/recareas/:id', recreationCtrl.create)


module.exports = router;
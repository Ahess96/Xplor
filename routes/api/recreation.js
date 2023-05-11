const express = require('express');
const router = express.Router();
const recreationCtrl = require('../../controllers/api/recreation')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', recreationCtrl.getAll);
router.post('/recareas/:id', recreationCtrl.create);
router.delete('/:id', recreationCtrl.deleteRec);
router.put('/:id/delete-activity', recreationCtrl.deleteAct);


module.exports = router;
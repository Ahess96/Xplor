const express = require('express');
const router = express.Router();
const recreationCtrl = require('../../controllers/api/recreation')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// router.post('/recareas/plans', recreationCtrl.plans);
// router.post('/recareas/activities', recreationCtrl.addPlannedActivities);
router.get('/', recreationCtrl.getAll);
router.post('/recareas/:id', recreationCtrl.create);
router.delete('/:id', recreationCtrl.deleteRec);


module.exports = router;
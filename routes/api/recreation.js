const express = require('express');
const router = express.Router();
const Campsite = require('../../models/campsite')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', async (req, res) => {
    try {
      const campsites = await Campsite.find({});
      res.status(200).json(campsites);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
})


module.exports = router;
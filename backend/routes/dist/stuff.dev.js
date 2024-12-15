"use strict";

var express = require('express');

var router = express.Router();

var stuffCtrl = require('../controllers/stuff');

var auth = require('../middleware/auth');

var multer = require('../middleware/multer-config');

router.get('/', auth, stuffCtrl.getAllStuff);
router.post('/', auth, multer, stuffCtrl.createThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router["delete"]('/:id', auth, stuffCtrl.deleteThing);
module.exports = router;
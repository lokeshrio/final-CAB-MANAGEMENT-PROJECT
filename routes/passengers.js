
const express = require('express');
const pc = require('../controllers/passengerController');
const cc = require('../controllers/cabDetailsController')
const router = express.Router('{}');

router.get('/register',pc.register);
router.post('/register',pc.registerPost);
router.get('/login',pc.login);
router.post('/login',pc.loginpost);
router.get('/home',pc.homePage);
router.get('/passenger',pc.passengerDetail);
router.get('/update',pc.updatePassenger);
router.post('/update',pc.updatePassengerPost);
router.get('/delete',pc.delete);
router.get('/create',cc.addCab);
router.get('/logout',pc.logout);
module.exports = router;
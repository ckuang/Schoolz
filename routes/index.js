const router = require('express').Router();

debugger;
router.use('/schools', require('./schoolRoute'));
router.use('/student', require('./studentRoute'));

module.exports = router;
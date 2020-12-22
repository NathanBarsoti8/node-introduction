const express = require('express');
const router = express.Router();

router.post('', require('../services/customers/create'));

module.exports = router;
const express = require('express');
const router = express.Router();

router.post('', require('../services/customers/create'));
router.delete('/:id', require('../services/customers/delete'));
router.get('/:id', require('../services/customers/listOne'));
router.get('', require('../services/customers/list'));
router.put('/:id', require('../services/customers/update'));

module.exports = router;
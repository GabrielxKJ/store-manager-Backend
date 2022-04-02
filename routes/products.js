const express = require('express');

const router = express.Router();

const {
   getAllProducts, getProductId,
  } = require('../controllers/index');

const { 
  notFoundProductId, validateProducts,
 } = require('../middlewares/index');

router.get('/', getAllProducts);
router.get('/:id', notFoundProductId, getProductId);
router.post('/', validateProducts);
router.put('/:id', validateProducts);

module.exports = router;
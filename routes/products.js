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
router.post('/', validateProducts.validateProducts, validateProducts.productAlreadyExist);
router.put('/:id', validateProducts.validateProducts);

module.exports = router;
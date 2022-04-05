const express = require('express');

const router = express.Router();

const {
   getAllProducts, getProductId, postProduct, putProduct, deleteProduct,
  } = require('../controllers/index');

const { 
  notFoundProductId, validateProducts, productAlreadyExist,
 } = require('../middlewares/index');

router.get('/', getAllProducts);
router.get('/:id', notFoundProductId, getProductId);
router.post('/', validateProducts, productAlreadyExist, postProduct);
router.put('/:id', validateProducts, notFoundProductId, putProduct);
router.delete('/:id', notFoundProductId, deleteProduct);

module.exports = router;
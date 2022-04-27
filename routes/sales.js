const express = require('express');

const router = express.Router();

const {
    getAllSales, getSalesId, postSale, putSale, deleteSale,
   } = require('../controllers/index');
 
 const { 
    notFoundSalesId, validateSales, countQuantity,
  } = require('../middlewares/index');

router.get('/', getAllSales);
router.get('/:id', notFoundSalesId, getSalesId);
router.post('/', validateSales, countQuantity, postSale);
router.put('/:id', validateSales, putSale);
router.delete('/:id', notFoundSalesId, deleteSale);

module.exports = router;
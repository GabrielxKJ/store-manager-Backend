const express = require('express');

const router = express.Router();

const {
    getAllSales, getSalesId, postSale,
   } = require('../controllers/index');
 
 const { 
    notFoundSalesId, validateSales,
  } = require('../middlewares/index');
 
router.get('/', getAllSales);
router.get('/:id', notFoundSalesId, getSalesId);
router.post('/', validateSales, postSale);
router.put('/:id', validateSales);

module.exports = router;
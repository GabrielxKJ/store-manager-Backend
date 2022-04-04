const express = require('express');

const router = express.Router();

const {
    getAllSales, getSalesId,
   } = require('../controllers/index');
 
 const { 
    notFoundSalesId, validateSales,
  } = require('../middlewares/index');
 
router.get('/', getAllSales);
router.get('/:id', notFoundSalesId, getSalesId);
router.post('/', validateSales);
router.put('/:id', validateSales);

module.exports = router;
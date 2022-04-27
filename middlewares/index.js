const notFoundProductId = require('./notFoundProductId');
const notFoundSalesId = require('./notFoundSalesId');
const validateProducts = require('./validateProducts');
const validateSales = require('./validateSales');
const productAlreadyExist = require('./productAlreadyExist');
const countQuantity = require('./countQuantity');

module.exports = {
  countQuantity,
  notFoundProductId,
  notFoundSalesId,
  validateProducts,
  validateSales,
  productAlreadyExist,
};
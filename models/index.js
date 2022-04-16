const destroyProduct = require('./destroyProduct');
const insertProduct = require('./insertProduct');
const insertSale = require('./insertSale');
const salesProducts = require('./sales_product');
const searchAllProducts = require('./searchAllProducts');
const searchAllSales = require('./searchAllSales');
const searchProductById = require('./searchProductById');
const searchSalesById = require('./searchSalesById');
const updateProducts = require('./updateProducts');
const updateSale = require('./updateSale');

module.exports = {
  destroyProduct,
  insertProduct,
  insertSale,
  salesProducts,
  searchAllProducts,
  searchAllSales,
  searchProductById,
  searchSalesById,
  updateProducts,
  updateSale,
};
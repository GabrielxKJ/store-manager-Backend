const getAllProducts = require('./getAllProducts');
const getAllSales = require('./getAllSales');
const getProductId = require('./getProductsId');
const getSalesId = require('./getSalesId');
const postProduct = require('./postProduct');
const putProduct = require('./putProduct');
const deleteProduct = require('./deleteProduct');
const postSale = require('./postSale');
const putSale = require('./putSale');
const deleteSale = require('./deleteSales');

module.exports = {
    deleteSale,
    getAllProducts,
    getAllSales,
    getProductId,
    getSalesId,
    postProduct,
    putProduct,
    deleteProduct,
    postSale,
    putSale,
};
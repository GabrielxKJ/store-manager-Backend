const getAllProducts = require('./getAllProducts');
const getAllSales = require('./getAllSales');
const getProductId = require('./getProductsId');
const getSalesId = require('./getSalesId');
const postProduct = require('./postProduct');
const putProduct = require('./putProduct');
const deleteProduct = require('./deleteProduct');

module.exports = {
    getAllProducts,
    getAllSales,
    getProductId,
    getSalesId,
    postProduct,
    putProduct,
    deleteProduct,
};
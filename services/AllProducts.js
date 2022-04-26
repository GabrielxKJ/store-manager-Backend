const models = require('../models/searchAllProducts');

module.exports.AllProducts = async () => {
const allProducts = await models.searchAllProducts();
return allProducts;
};
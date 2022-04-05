const destroyProduct = require('../models/destroyProduct');

module.exports = async (id) => {
 const destroyedProduct = await destroyProduct(id);
 return destroyedProduct;
};
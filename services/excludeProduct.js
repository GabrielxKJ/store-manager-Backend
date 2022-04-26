const models = require('../models/destroyProduct');

module.exports.excludeProduct = async (id) => {
 const destroyedProduct = await models.destroyProducts(id);
 return destroyedProduct;
};
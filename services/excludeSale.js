const models = require('../models/destroySale');

module.exports.excludeProduct = async (id) => {
 const destroyedSale = await models.destroyProducts(id);
 return destroyedSale;
};
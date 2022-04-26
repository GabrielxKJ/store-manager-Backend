const models = require('../models/searchProductById');

module.exports.findProductsById = async (id) => {
    const foundProductId = await models.searchProductById(id);
    return foundProductId;
};
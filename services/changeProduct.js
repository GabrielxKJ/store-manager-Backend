const models = require('../models/updateProducts');

module.exports.changeProduct = async (id, name, quantity) => {
 const changeProduct = await models.updateProducts(id, name, quantity);
 return changeProduct;
};
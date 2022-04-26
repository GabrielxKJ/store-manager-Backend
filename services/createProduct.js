const models = require('../models/insertProduct');

module.exports.createProduct = async (name, quantity) => {
   const create = await models.insertProduct(name, quantity);
   return create;
};
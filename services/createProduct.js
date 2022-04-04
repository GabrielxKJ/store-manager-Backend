const insertProduct = require('../models/insertProduct');

module.exports = async (name, quantity) => {
   const create = await insertProduct(name, quantity);
   return create;
};
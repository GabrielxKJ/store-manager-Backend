const insertProduct = require('../models/insertProduct');

module.exports = async (name, quantity) => {
   const create = await insertProduct(name, quantity);
   console.log(create);
   return create;
};
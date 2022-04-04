const updateProducts = require('../models/updateProducts');

module.exports = async (id, name, quantity) => {
 const changeProduct = await updateProducts(id, name, quantity);
 return changeProduct;
};
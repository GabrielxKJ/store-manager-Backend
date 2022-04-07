const updateSale = require('../models/updateSale');

module.exports = async (productId, quantity, id) => {
 await updateSale(productId, quantity, id);
 return {
    saleId: id,
    itemUpdated: [{ productId, quantity }],
 };
};
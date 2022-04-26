const models = require('../models/updateSale');

module.exports.changeSale = async (productId, quantity, id) => {
 await models.updateSale(productId, quantity, id);
 return {
    saleId: id,
    itemUpdated: [{ productId, quantity }],
 };
};
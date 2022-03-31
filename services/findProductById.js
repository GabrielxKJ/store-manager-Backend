const findProductByid = require('../models/searchProductById');

module.exports = async (id) => {
    const foundProductId = await findProductByid(id);
    return foundProductId;
};